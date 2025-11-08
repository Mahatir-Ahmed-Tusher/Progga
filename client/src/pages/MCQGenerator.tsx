import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/components/LanguageProvider';
import { api } from '@/lib/api';
import { 
  HelpCircle, 
  Upload, 
  Loader2, 
  CheckCircle, 
  XCircle, 
  RefreshCw,
  FileText,
  Image as ImageIcon
} from 'lucide-react';
import type { MCQResponse } from '@/lib/api';

export default function MCQGenerator() {
  const location = usePathname();
  const { language } = useLanguage();
  const { toast } = useToast();
  
  const [content, setContent] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [mcqData, setMcqData] = useState<MCQResponse | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);

  // Get URL parameters manually
  const urlParams = new URLSearchParams(location.split('?')[1] || '');
  const subject = urlParams.get('subject');
  const classLevel = urlParams.get('class');

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: language === 'bn' ? "ফাইল খুব বড়" : "File too large",
          description: language === 'bn' 
            ? "দয়া করে ১০MB এর কম সাইজের ছবি আপলোড করুন।"
            : "Please upload an image smaller than 10MB.",
          variant: "destructive"
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const generateMCQ = async () => {
    if (!content.trim() && !selectedFile) {
      toast({
        title: language === 'bn' ? "ইনপুট প্রয়োজন" : "Input Required",
        description: language === 'bn' 
          ? "দয়া করে কোনো টেক্সট লিখুন অথবা ছবি আপলোড করুন।"
          : "Please enter some text or upload an image.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    try {
      const response = await api.generateMCQ(content, selectedFile ?? undefined);
      setMcqData(response);
      setSelectedAnswers({});
      setShowResults(false);
      
      toast({
        title: language === 'bn' ? "সফল!" : "Success!",
        description: language === 'bn' 
          ? `${response.questions.length}টি প্রশ্ন তৈরি হয়েছে।`
          : `Generated ${response.questions.length} questions.`,
      });
    } catch (error) {
      console.error('Failed to generate MCQ:', error);
      toast({
        title: language === 'bn' ? "ত্রুটি" : "Error",
        description: language === 'bn' 
          ? "MCQ তৈরি করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।"
          : "Failed to generate MCQ. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    if (!showResults) {
      setSelectedAnswers(prev => ({
        ...prev,
        [questionId]: answerIndex
      }));
    }
  };

  const checkAnswers = () => {
    setShowResults(true);
    const correctAnswers = mcqData?.questions.filter(q => 
      selectedAnswers[q.id] === q.correctAnswer
    ).length || 0;
    
    toast({
      title: language === 'bn' ? "ফলাফল" : "Results",
      description: language === 'bn' 
        ? `${mcqData?.questions.length} টির মধ্যে ${correctAnswers}টি সঠিক উত্তর!`
        : `${correctAnswers} out of ${mcqData?.questions.length} correct answers!`,
    });
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {language === 'bn' ? 'যাচাই করো তোমাকে' : 'Test Yourself'}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {language === 'bn' 
                  ? 'কোনো বিষয়বস্তু থেকে MCQ প্রশ্ন তৈরি করুন'
                  : 'Generate MCQ questions from any content'
                }
              </p>
            </div>
          </div>
          
          {(subject || classLevel) && (
            <div className="flex items-center justify-center space-x-4 mb-6">
              {classLevel && (
                <Badge variant="secondary">
                  {language === 'bn' ? `${classLevel} শ্রেণী` : `Class ${classLevel}`}
                </Badge>
              )}
              {subject && (
                <Badge variant="secondary">
                  {subject}
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* MCQ Generator Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>
                {language === 'bn' ? 'প্রশ্ন তৈরি করুন' : 'Generate Questions'}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Text Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {language === 'bn' ? 'বিষয়বস্তু লিখুন' : 'Enter Content'}
              </label>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={language === 'bn' 
                  ? "যে বিষয়ে প্রশ্ন তৈরি করতে চান তা এখানে লিখুন..."
                  : "Enter the content you want to generate questions from..."
                }
                className="min-h-[120px]"
                disabled={isGenerating}
              />
            </div>

            {/* File Upload */}
            

            {/* Generate Button */}
            <Button 
              onClick={generateMCQ}
              disabled={isGenerating || (!content.trim() && !selectedFile)}
              className="w-full"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {language === 'bn' ? 'প্রশ্ন তৈরি করছি...' : 'Generating Questions...'}
                </>
              ) : (
                <>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  {language === 'bn' ? 'প্রশ্ন তৈরি করুন' : 'Generate Questions'}
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Generated MCQ Questions */}
        {mcqData && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>
                {language === 'bn' ? 'তৈরি হওয়া প্রশ্নসমূহ' : 'Generated Questions'}
                {mcqData.topic && (
                  <Badge variant="outline" className="ml-2">
                    {mcqData.topic}
                  </Badge>
                )}
              </CardTitle>
              <div className="flex space-x-2">
                {Object.keys(selectedAnswers).length === mcqData.questions.length && !showResults && (
                  <Button onClick={checkAnswers}>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    {language === 'bn' ? 'উত্তর যাচাই করুন' : 'Check Answers'}
                  </Button>
                )}
                {showResults && (
                  <Button onClick={resetQuiz} variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    {language === 'bn' ? 'আবার চেষ্টা করুন' : 'Try Again'}
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {mcqData.questions.map((question, index) => (
                <div key={question.id} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {index + 1}. {question.question}
                  </h3>
                  
                  <div className="space-y-3">
                    {question.options.map((option, optionIndex) => {
                      const isSelected = selectedAnswers[question.id] === optionIndex;
                      const isCorrect = optionIndex === question.correctAnswer;
                      const showCorrect = showResults && isCorrect;
                      const showIncorrect = showResults && isSelected && !isCorrect;
                      
                      return (
                        <button
                          key={optionIndex}
                          onClick={() => handleAnswerSelect(question.id, optionIndex)}
                          disabled={showResults}
                          className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                            showCorrect
                              ? 'border-green-500 bg-green-50 dark:bg-green-900'
                              : showIncorrect
                              ? 'border-red-500 bg-red-50 dark:bg-red-900'
                              : isSelected
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                              : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-gray-900 dark:text-white">
                              {String.fromCharCode(65 + optionIndex)}. {option}
                            </span>
                            {showResults && (
                              <div className="flex items-center">
                                {isCorrect && <CheckCircle className="h-5 w-5 text-green-500" />}
                                {showIncorrect && <XCircle className="h-5 w-5 text-red-500" />}
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  
                  {showResults && question.explanation && (
                    <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        {language === 'bn' ? 'ব্যাখ্যা:' : 'Explanation:'}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Usage Instructions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>
              {language === 'bn' ? 'কীভাবে ব্যবহার করবেন' : 'How to Use'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</span>
              <p>
                {language === 'bn' 
                  ? 'যে বিষয়ে প্রশ্ন তৈরি করতে চান সেই টেক্সট লিখুন অথবা সংশ্লিষ্ট ছবি আপলোড করুন।'
                  : 'Enter the text content or upload an image from which you want to generate questions.'
                }
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</span>
              <p>
                {language === 'bn' 
                  ? '"প্রশ্ন তৈরি করুন" বাটনে ক্লিক করুন এবং AI আপনার জন্য প্রশ্ন তৈরি করবে।'
                  : 'Click "Generate Questions" button and AI will create questions for you.'
                }
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</span>
              <p>
                {language === 'bn' 
                  ? 'প্রশ্নের উত্তর দিন এবং "উত্তর যাচাই করুন" বাটনে ক্লিক করে আপনার স্কোর দেখুন।'
                  : 'Answer the questions and click "Check Answers" to see your score.'
                }
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}