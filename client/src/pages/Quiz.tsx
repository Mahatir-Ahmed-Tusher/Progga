import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/components/LanguageProvider';
import { api } from '@/lib/api';
import { OpenAIHelper } from '@/lib/openai';
import { 
  Target, 
  Brain, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Award,
  RefreshCw,
  ArrowRight,
  Play,
  Loader2,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import { SUBJECT_NAMES } from '@shared/schema';
import type { ClassLevel, Subject } from '@/types';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface QuizSession {
  questions: QuizQuestion[];
  currentQuestion: number;
  selectedAnswers: { [key: string]: number };
  timeStarted: Date;
  timeEnded?: Date;
  score?: {
    correct: number;
    total: number;
    percentage: number;
    grade: string;
    message: string;
  };
}

export default function Quiz() {
  const { classLevel, subject } = useParams<{ classLevel?: string; subject?: Subject }>();
  const { language } = useLanguage();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [quizSession, setQuizSession] = useState<QuizSession | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (quizSession && !showResults) {
      interval = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - quizSession.timeStarted.getTime()) / 1000));
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [quizSession, showResults]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startQuiz = async (questionCount: number = 10) => {
    if (!classLevel || !subject) {
      toast({
        title: language === 'bn' ? "তথ্য অনুপস্থিত" : "Missing Information",
        description: language === 'bn' 
          ? "শ্রেণী এবং বিষয় নির্বাচন করুন।"
          : "Please select class and subject.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      // Call backend to generate quiz questions
      const response = await fetch('/api/ai/generate-quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject,
          classLevel,
          count: questionCount
        }),
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to generate quiz');
      }

      const quizData = await response.json();

      const session: QuizSession = {
        questions: quizData.questions || [],
        currentQuestion: 0,
        selectedAnswers: {},
        timeStarted: new Date()
      };

      setQuizSession(session);
      setShowResults(false);
      setTimeElapsed(0);

      toast({
        title: language === 'bn' ? "কুইজ শুরু!" : "Quiz Started!",
        description: language === 'bn' 
          ? `${questionCount}টি প্রশ্নের কুইজ শুরু হয়েছে।`
          : `Quiz with ${questionCount} questions has started.`,
      });
    } catch (error) {
      console.error('Failed to start quiz:', error);
      toast({
        title: language === 'bn' ? "ত্রুটি" : "Error",
        description: language === 'bn' 
          ? "কুইজ শুরু করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।"
          : "Failed to start quiz. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const selectAnswer = (questionId: string, answerIndex: number) => {
    if (!quizSession || showResults) return;

    setQuizSession(prev => prev ? {
      ...prev,
      selectedAnswers: {
        ...prev.selectedAnswers,
        [questionId]: answerIndex
      }
    } : null);
  };

  const nextQuestion = () => {
    if (!quizSession) return;

    const nextIndex = quizSession.currentQuestion + 1;
    if (nextIndex < quizSession.questions.length) {
      setQuizSession(prev => prev ? {
        ...prev,
        currentQuestion: nextIndex
      } : null);
    } else {
      finishQuiz();
    }
  };

  const previousQuestion = () => {
    if (!quizSession) return;

    const prevIndex = quizSession.currentQuestion - 1;
    if (prevIndex >= 0) {
      setQuizSession(prev => prev ? {
        ...prev,
        currentQuestion: prevIndex
      } : null);
    }
  };

  const finishQuiz = () => {
    if (!quizSession) return;

    const correctAnswers = quizSession.questions.filter(q => 
      quizSession.selectedAnswers[q.id] === q.correctAnswer
    ).length;

    const score = OpenAIHelper.formatQuizScore(correctAnswers, quizSession.questions.length);

    setQuizSession(prev => prev ? {
      ...prev,
      timeEnded: new Date(),
      score: {
        correct: correctAnswers,
        total: quizSession.questions.length,
        ...score
      }
    } : null);

    setShowResults(true);

    toast({
      title: language === 'bn' ? "কুইজ সম্পূর্ণ!" : "Quiz Complete!",
      description: language === 'bn' 
        ? `আপনার স্কোর: ${correctAnswers}/${quizSession.questions.length}`
        : `Your score: ${correctAnswers}/${quizSession.questions.length}`,
    });
  };

  const resetQuiz = () => {
    setQuizSession(null);
    setShowResults(false);
    setTimeElapsed(0);
  };

  if (!classLevel || !subject) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="text-center py-12">
              <Target className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'bn' ? 'অবৈধ কুইজ পথ' : 'Invalid Quiz Route'}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {language === 'bn' 
                  ? 'শ্রেণী এবং বিষয় নির্বাচন করে কুইজে অংশগ্রহণ করুন।'
                  : 'Please select a class and subject to participate in the quiz.'
                }
              </p>
              <Link href="/learn">
                <Button>
                  <BookOpen className="mr-2 h-4 w-4" />
                  {language === 'bn' ? 'শেখার পেইজে যান' : 'Go to Learning'}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const subjectName = SUBJECT_NAMES[subject as Subject] || subject;
  const className = classLevel.replace('class-', '');

  // Quiz Start Screen
  if (!quizSession) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  {language === 'bn' ? 'ইন্টারেক্টিভ কুইজ' : 'Interactive Quiz'}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {subjectName} • {className === '6' ? (language === 'bn' ? 'ষষ্ঠ শ্রেণী' : 'Class 6') :
                   className === '7' ? (language === 'bn' ? 'সপ্তম শ্রেণী' : 'Class 7') :
                   className === '8' ? (language === 'bn' ? 'অষ্টম শ্রেণী' : 'Class 8') :
                   className === '9' ? (language === 'bn' ? 'নবম শ্রেণী' : 'Class 9') :
                   className === '10' ? (language === 'bn' ? 'দশম শ্রেণী' : 'Class 10') :
                   `Class ${className}`}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-2 mb-6 text-sm">
            <Link href="/learn">
              <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                {language === 'bn' ? 'শেখো প্রজ্ঞার সাথে' : 'Learn with Progga'}
              </span>
            </Link>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <Link href={`/learn/class-${className}`}>
              <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                {className === '6' ? (language === 'bn' ? 'ষষ্ঠ শ্রেণী' : 'Class 6') :
                 className === '7' ? (language === 'bn' ? 'সপ্তম শ্রেণী' : 'Class 7') :
                 className === '8' ? (language === 'bn' ? 'অষ্টম শ্রেণী' : 'Class 8') :
                 className === '9' ? (language === 'bn' ? 'নবম শ্রেণী' : 'Class 9') :
                 className === '10' ? (language === 'bn' ? 'দশম শ্রেণী' : 'Class 10') :
                 `Class ${className}`}
              </span>
            </Link>
            <ArrowRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600 dark:text-gray-300">{language === 'bn' ? 'কুইজ' : 'Quiz'}</span>
          </div>

          {/* Quiz Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-6 w-6 text-blue-500" />
                  <span>{language === 'bn' ? 'দ্রুত কুইজ' : 'Quick Quiz'}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {language === 'bn' 
                    ? '৫টি প্রশ্নের একটি সংক্ষিপ্ত কুইজ। আপনার মৌলিক জ্ঞান যাচাই করুন।'
                    : 'A short quiz with 5 questions. Test your basic knowledge.'
                  }
                </p>
                <ul className="text-sm text-gray-500 mb-6 space-y-1">
                  <li>• {language === 'bn' ? '৫টি প্রশ্ন' : '5 questions'}</li>
                  <li>• {language === 'bn' ? 'আনুমানিক ৫ মিনিট' : 'Approximately 5 minutes'}</li>
                  <li>• {language === 'bn' ? 'সহজ থেকে মাঝারি মানের' : 'Easy to medium difficulty'}</li>
                </ul>
                <Button 
                  onClick={() => startQuiz(5)}
                  disabled={isLoading}
                  className="w-full"
                  size="lg"
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Play className="mr-2 h-4 w-4" />
                  )}
                  {language === 'bn' ? 'শুরু করুন' : 'Start Quiz'}
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-purple-500" />
                  <span>{language === 'bn' ? 'সম্পূর্ণ কুইজ' : 'Full Quiz'}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {language === 'bn' 
                    ? '১০টি প্রশ্নের একটি বিস্তৃত কুইজ। গভীর মূল্যায়নের জন্য।'
                    : 'A comprehensive quiz with 10 questions. For in-depth assessment.'
                  }
                </p>
                <ul className="text-sm text-gray-500 mb-6 space-y-1">
                  <li>• {language === 'bn' ? '১০টি প্রশ্ন' : '10 questions'}</li>
                  <li>• {language === 'bn' ? 'আনুমানিক ১৫ মিনিট' : 'Approximately 15 minutes'}</li>
                  <li>• {language === 'bn' ? 'সব মানের প্রশ্ন' : 'All difficulty levels'}</li>
                </ul>
                <Button 
                  onClick={() => startQuiz(10)}
                  disabled={isLoading}
                  className="w-full"
                  size="lg"
                  variant="outline"
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Target className="mr-2 h-4 w-4" />
                  )}
                  {language === 'bn' ? 'শুরু করুন' : 'Start Quiz'}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>
                {language === 'bn' ? 'নির্দেশনা' : 'Instructions'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                    {language === 'bn' ? 'কুইজের নিয়ম:' : 'Quiz Rules:'}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        {language === 'bn' 
                          ? 'প্রতিটি প্রশ্নের জন্য একটি মাত্র সঠিক উত্তর রয়েছে'
                          : 'Each question has only one correct answer'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        {language === 'bn' 
                          ? 'আপনি যেকোনো সময় আগের প্রশ্নে ফিরে যেতে পারেন'
                          : 'You can go back to previous questions anytime'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        {language === 'bn' 
                          ? 'সময়ের কোনো সীমাবদ্ধতা নেই, আরামে উত্তর দিন'
                          : 'No time limit, answer at your own pace'
                        }
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                    {language === 'bn' ? 'স্কোরিং:' : 'Scoring:'}
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        {language === 'bn' 
                          ? '৯০%+ = A+ (অসাধারণ)'
                          : '90%+ = A+ (Excellent)'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        {language === 'bn' 
                          ? '৮০%+ = A (খুবই ভালো)'
                          : '80%+ = A (Very Good)'
                        }
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        {language === 'bn' 
                          ? '৭০%+ = B (ভালো)'
                          : '70%+ = B (Good)'
                        }
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Results Screen
  if (showResults && quizSession.score) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {language === 'bn' ? 'কুইজ সম্পূর্ণ!' : 'Quiz Complete!'}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {quizSession.score.message}
            </p>
          </div>

          {/* Score Display */}
          <Card className="mb-8">
            <CardContent className="text-center py-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {quizSession.score.grade}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {language === 'bn' ? 'গ্রেড' : 'Grade'}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {quizSession.score.percentage}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {language === 'bn' ? 'স্কোর' : 'Score'}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {quizSession.score.correct}/{quizSession.score.total}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {language === 'bn' ? 'সঠিক উত্তর' : 'Correct'}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {formatTime(timeElapsed)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {language === 'bn' ? 'সময়' : 'Time'}
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Progress 
                  value={quizSession.score.percentage} 
                  className="w-full h-3"
                />
              </div>
            </CardContent>
          </Card>

          {/* Question Review */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                {language === 'bn' ? 'উত্তর পর্যালোচনা' : 'Answer Review'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {quizSession.questions.map((question, index) => {
                  const userAnswer = quizSession.selectedAnswers[question.id];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div key={question.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex-1">
                          {index + 1}. {question.question}
                        </h3>
                        <div className="flex items-center space-x-2 ml-4">
                          <Badge 
                            variant="outline" 
                            className={OpenAIHelper.getDifficultyColor(question.difficulty)}
                          >
                            {OpenAIHelper.getDifficultyLabel(question.difficulty, language)}
                          </Badge>
                          {isCorrect ? (
                            <CheckCircle className="h-6 w-6 text-green-500" />
                          ) : (
                            <XCircle className="h-6 w-6 text-red-500" />
                          )}
                        </div>
                      </div>
                      
                      <div className="grid gap-2 mb-4">
                        {question.options.map((option, optionIndex) => {
                          const isUserAnswer = userAnswer === optionIndex;
                          const isCorrectAnswer = optionIndex === question.correctAnswer;
                          
                          return (
                            <div
                              key={optionIndex}
                              className={`p-3 rounded-lg border ${
                                isCorrectAnswer
                                  ? 'border-green-500 bg-green-50 dark:bg-green-900'
                                  : isUserAnswer && !isCorrectAnswer
                                  ? 'border-red-500 bg-red-50 dark:bg-red-900'
                                  : 'border-gray-200 dark:border-gray-600'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-gray-900 dark:text-white">
                                  {String.fromCharCode(65 + optionIndex)}. {option}
                                </span>
                                <div className="flex items-center space-x-2">
                                  {isUserAnswer && (
                                    <Badge variant="outline" className="text-xs">
                                      {language === 'bn' ? 'আপনার উত্তর' : 'Your Answer'}
                                    </Badge>
                                  )}
                                  {isCorrectAnswer && (
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      
                      {question.explanation && (
                        <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded-lg">
                          <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                            {language === 'bn' ? 'ব্যাখ্যা:' : 'Explanation:'}
                          </h4>
                          <p className="text-blue-800 dark:text-blue-200 text-sm">
                            {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={resetQuiz} size="lg">
              <RefreshCw className="mr-2 h-4 w-4" />
              {language === 'bn' ? 'নতুন কুইজ' : 'New Quiz'}
            </Button>
            <Link href={`/learn/class-${className}/${subject}`}>
              <Button variant="outline" size="lg">
                <BookOpen className="mr-2 h-4 w-4" />
                {language === 'bn' ? 'পড়াশোনায় ফিরুন' : 'Back to Learning'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Quiz In Progress
  const currentQuestion = quizSession.questions[quizSession.currentQuestion];
  const progress = ((quizSession.currentQuestion + 1) / quizSession.questions.length) * 100;
  const selectedAnswer = quizSession.selectedAnswers[currentQuestion?.id];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quiz Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {subjectName} {language === 'bn' ? 'কুইজ' : 'Quiz'}
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {language === 'bn' ? 'প্রশ্ন' : 'Question'} {quizSession.currentQuestion + 1} {language === 'bn' ? 'এর' : 'of'} {quizSession.questions.length}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Clock className="h-4 w-4" />
                <span className="font-mono">{formatTime(timeElapsed)}</span>
              </div>
            </div>
          </div>
          
          <Progress value={progress} className="w-full h-2" />
        </div>

        {/* Question Card */}
        {currentQuestion && (
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">
                  {currentQuestion.question}
                </CardTitle>
                <Badge 
                  variant="outline" 
                  className={OpenAIHelper.getDifficultyColor(currentQuestion.difficulty)}
                >
                  {OpenAIHelper.getDifficultyLabel(currentQuestion.difficulty, language)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => selectAnswer(currentQuestion.id, index)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          isSelected 
                            ? 'border-blue-500 bg-blue-500 text-white' 
                            : 'border-gray-300 dark:border-gray-600'
                        }`}>
                          {isSelected && <span className="text-sm font-bold">✓</span>}
                        </div>
                        <span className="text-gray-900 dark:text-white">
                          <strong>{String.fromCharCode(65 + index)}.</strong> {option}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            onClick={previousQuestion}
            disabled={quizSession.currentQuestion === 0}
            variant="outline"
          >
            {language === 'bn' ? 'পূর্ববর্তী' : 'Previous'}
          </Button>
          
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {Object.keys(quizSession.selectedAnswers).length}/{quizSession.questions.length} {language === 'bn' ? 'উত্তর দেওয়া হয়েছে' : 'answered'}
          </div>
          
          {quizSession.currentQuestion === quizSession.questions.length - 1 ? (
            <Button
              onClick={finishQuiz}
              disabled={Object.keys(quizSession.selectedAnswers).length < quizSession.questions.length}
              className="bg-green-600 hover:bg-green-700"
            >
              <Award className="mr-2 h-4 w-4" />
              {language === 'bn' ? 'কুইজ সম্পূর্ণ করুন' : 'Finish Quiz'}
            </Button>
          ) : (
            <Button
              onClick={nextQuestion}
              disabled={selectedAnswer === undefined}
            >
              {language === 'bn' ? 'পরবর্তী' : 'Next'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
