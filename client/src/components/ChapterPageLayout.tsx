import React, { useState, ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MessageCircle, HelpCircle, ArrowLeft, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

interface ChapterPageLayoutProps {
  chapterNumber: number;
  chapterTitle: string;
  subject: string;
  classLevel: string;
  backLink: string;
  children: ReactNode;
  quizQuestions?: QuizQuestion[];
  chatContext?: { book: string; chapter: string };
}

export function ChapterPageLayout({
  chapterNumber,
  chapterTitle,
  subject,
  classLevel,
  backLink,
  children,
  quizQuestions = [],
  chatContext,
}: ChapterPageLayoutProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleChatSubmit = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message.trim();
    setMessage('');
    setLoading(true);
    setChatHistory(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const response = await axios.post('/api/ai/chat', {
        message: userMessage,
        context: `${chatContext?.book} - ${chatContext?.chapter}`,
      });
      
      setChatHistory(prev => [...prev, { 
        role: 'assistant', 
        content: response.data.response 
      }]);
    } catch (error) {
      setChatHistory(prev => [...prev, { 
        role: 'assistant', 
        content: 'দুঃখিত, ত্রুটি ঘটেছে। আবার চেষ্টা করুন।' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuizSubmit = () => {
    let correctCount = 0;
    quizQuestions.forEach((q, index) => {
      if (quizAnswers[index] !== undefined && q.options[quizAnswers[index]] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <Link href={backLink}>
            <Button variant="outline" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              অধ্যায় তালিকায় ফিরুন
            </Button>
          </Link>
          
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{classLevel}</Badge>
                    <Badge variant="secondary">{subject}</Badge>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    অধ্যায় {chapterNumber}: {chapterTitle}
                  </h1>
                </div>
                <BookOpen className="h-12 w-12 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chapter Content - Book Style */}
        <Card className="mb-6">
          <CardContent className="p-8 md:p-12 prose prose-lg dark:prose-invert max-w-none">
            {children}
          </CardContent>
        </Card>

        {/* Bottom Action Bar */}
        {(quizQuestions.length > 0 || chatContext) && (
          <Card className="sticky bottom-4 shadow-lg">
            <CardContent className="p-4">
              <div className="flex items-center justify-center gap-4">
                {chatContext && (
                  <Button 
                    onClick={() => setIsChatOpen(true)}
                    className="flex items-center gap-2"
                    size="lg"
                  >
                    <MessageCircle className="h-5 w-5" />
                    প্রশ্ন করো
                  </Button>
                )}
                {quizQuestions.length > 0 && (
                  <Button 
                    onClick={() => setIsQuizOpen(true)}
                    variant="secondary"
                    className="flex items-center gap-2"
                    size="lg"
                  >
                    <HelpCircle className="h-5 w-5" />
                    কুইজ ({quizQuestions.length} টি প্রশ্ন)
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Chat Dialog */}
        <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
          <DialogContent className="max-w-2xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-blue-500" />
                {subject} - অধ্যায় {chapterNumber}
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex flex-col h-[500px]">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg mb-4">
                {chatHistory.length === 0 ? (
                  <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                    <MessageCircle className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p>তোমার এই অধ্যায় সম্পর্কে যেকোনো প্রশ্ন করো</p>
                  </div>
                ) : (
                  chatHistory.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-lg p-3 ${
                        msg.role === 'user' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                      }`}>
                        {msg.role === 'assistant' ? (
                          <ReactMarkdown className="prose prose-sm dark:prose-invert">
                            {msg.content}
                          </ReactMarkdown>
                        ) : (
                          <p>{msg.content}</p>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                  placeholder="আপনার প্রশ্ন লিখুন..."
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  disabled={loading}
                />
                <Button onClick={handleChatSubmit} disabled={loading || !message.trim()}>
                  {loading ? 'পাঠাচ্ছি...' : 'পাঠান'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Quiz Dialog */}
        <Dialog open={isQuizOpen} onOpenChange={setIsQuizOpen}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-green-500" />
                অধ্যায় {chapterNumber} - কুইজ
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 mt-4">
              {quizQuestions.map((q, qIdx) => {
                const selectedAnswer = quizAnswers[qIdx];
                const isCorrect = selectedAnswer !== undefined && q.options[selectedAnswer] === q.correctAnswer;
                
                return (
                  <Card key={qIdx} className={quizSubmitted ? (isCorrect ? 'border-green-500' : 'border-red-500') : ''}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <Badge variant="outline" className="mt-1">{qIdx + 1}</Badge>
                        <p className="text-lg font-medium text-gray-900 dark:text-white flex-1">
                          {q.question}
                        </p>
                      </div>

                      <div className="space-y-2">
                        {q.options.map((option, optIdx) => (
                          <button
                            key={optIdx}
                            onClick={() => !quizSubmitted && setQuizAnswers({ ...quizAnswers, [qIdx]: optIdx })}
                            disabled={quizSubmitted}
                            className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                              quizSubmitted && q.options[optIdx] === q.correctAnswer
                                ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                                : quizSubmitted && selectedAnswer === optIdx
                                ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                                : selectedAnswer === optIdx
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-gray-900 dark:text-white">{option}</span>
                              {quizSubmitted && (
                                q.options[optIdx] === q.correctAnswer ? (
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : selectedAnswer === optIdx ? (
                                  <XCircle className="h-5 w-5 text-red-500" />
                                ) : null
                              )}
                            </div>
                          </button>
                        ))}
                      </div>

                      {quizSubmitted && (
                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                          <p className="text-sm font-medium text-blue-900 dark:text-blue-200 mb-1">ব্যাখ্যা:</p>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{q.explanation}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}

              {/* Quiz Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                {quizSubmitted ? (
                  <>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      ফলাফল: {score}/{quizQuestions.length} সঠিক
                    </div>
                    <Button onClick={resetQuiz} variant="outline">
                      পুনরায় চেষ্টা করুন
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {Object.keys(quizAnswers).length}/{quizQuestions.length} টি উত্তর দেওয়া হয়েছে
                    </div>
                    <Button 
                      onClick={handleQuizSubmit}
                      disabled={Object.keys(quizAnswers).length !== quizQuestions.length}
                    >
                      উত্তর জমা দিন
                    </Button>
                  </>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

