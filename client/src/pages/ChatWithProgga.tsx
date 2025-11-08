import React, { useState, useEffect } from 'react';
import { ChatInterface } from '@/components/ui/chat-interface';
import { useLanguage } from '@/components/LanguageProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { api } from '@/lib/api';
import { Brain, MessageCircle, Upload, Zap, Clock, Users } from 'lucide-react';

// Markdown formatting utility
const formatMarkdown = (text: string): string => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/#{1,6}\s*(.*?)\n?/g, '<h3>$1</h3>')
    .replace(/\n/g, '<br>');
};

const formatLists = (text: string): string => {
  const lines = text.split('\n');
  let formatted = '';
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (/^\d+\.\s/.test(line)) {
      if (!inList) {
        formatted += '<ol class="list-decimal list-inside ml-4 space-y-1">';
        inList = true;
      }
      formatted += `<li>${line.replace(/^\d+\.\s/, '')}</li>`;
    } else if (/^[-*]\s/.test(line)) {
      if (!inList) {
        formatted += '<ul class="list-disc list-inside ml-4 space-y-1">';
        inList = true;
      }
      formatted += `<li>${line.replace(/^[-*]\s/, '')}</li>`;
    } else {
      if (inList) {
        formatted += '</ol></ul>';
        inList = false;
      }
      if (line) formatted += line + '\n';
    }
  }

  if (inList) {
    formatted += '</ol></ul>';
  }

  return formatted;
};

export default function ChatWithProgga() {
  const { language } = useLanguage();
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    const initializeSession = async () => {
      try {
        const session = await api.createChatSession('general');
        setSessionId(session.sessionId);
      } catch (error) {
        console.error('Failed to create chat session:', error);
      }
    };

    initializeSession();
  }, []);

  const features = [
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: language === 'bn' ? 'সাধারণ প্রশ্নোত্তর' : 'General Q&A',
      description: language === 'bn' 
        ? 'যেকোনো বিষয়ে প্রশ্ন করুন'
        : 'Ask questions on any topic'
    },
    {
      icon: <Upload className="h-5 w-5" />,
      title: language === 'bn' ? 'ছবি আপলোড' : 'Image Upload',
      description: language === 'bn' 
        ? 'ছবি আপলোড করে সমাধান চান'
        : 'Upload images for solutions'
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: language === 'bn' ? 'তাৎক্ষণিক উত্তর' : 'Instant Answers',
      description: language === 'bn' 
        ? 'দ্রুত এবং নির্ভুল উত্তর পান'
        : 'Get fast and accurate answers'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: language === 'bn' ? '২৪/৭ উপলব্ধ' : '24/7 Available',
      description: language === 'bn' 
        ? 'যেকোনো সময় সাহায্য নিন'
        : 'Get help anytime'
    }
  ];

  const suggestions = [
    {
      text: language === 'bn' ? 'গণিতের একটি সমস্যা সমাধান করুন' : 'Solve a math problem',
      category: language === 'bn' ? 'গণিত' : 'Mathematics'
    },
    {
      text: language === 'bn' ? 'বিজ্ঞানের একটি ধারণা ব্যাখ্যা করুন' : 'Explain a science concept',
      category: language === 'bn' ? 'বিজ্ঞান' : 'Science'
    },
    {
      text: language === 'bn' ? 'ইংরেজি গ্রামার সাহায্য করুন' : 'Help with English grammar',
      category: language === 'bn' ? 'ইংরেজি' : 'English'
    },
    {
      text: language === 'bn' ? 'বাংলা সাহিত্য নিয়ে প্রশ্ন' : 'Questions about Bengali literature',
      category: language === 'bn' ? 'বাংলা' : 'Bengali'
    },
    {
      text: language === 'bn' ? 'ইতিহাস ও সামাজিক বিজ্ঞান' : 'History and social science',
      category: language === 'bn' ? 'সামাজিক বিজ্ঞান' : 'Social Science'
    },
    {
      text: language === 'bn' ? 'পরীক্ষার প্রস্তুতি নিতে সাহায্য' : 'Help with exam preparation',
      category: language === 'bn' ? 'পরীক্ষা' : 'Exam'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {language === 'bn' ? 'কথা বলো প্রজ্ঞার সাথে' : 'Chat with Progga'}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {language === 'bn' 
                  ? 'যেকোনো প্রশ্ন করুন, তাৎক্ষণিক উত্তর পান'
                  : 'Ask any question, get instant answers'
                }
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{language === 'bn' ? 'সবার জন্য' : 'For Everyone'}</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Zap className="h-4 w-4" />
              <span>{language === 'bn' ? 'AI চালিত' : 'AI Powered'}</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{language === 'bn' ? '২৪/৭ সেবা' : '24/7 Service'}</span>
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  <span>
                    {language === 'bn' ? 'বৈশিষ্ট্যসমূহ' : 'Features'}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'bn' ? 'প্রশ্নের উদাহরণ' : 'Question Examples'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {suggestions.map((suggestion, index) => (
                  <div key={index} className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <Badge variant="outline" className="text-xs">
                        {suggestion.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {suggestion.text}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'bn' ? 'ব্যবহারের টিপস' : 'Usage Tips'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <p>
                    {language === 'bn' 
                      ? 'স্পষ্ট এবং বিস্তারিত প্রশ্ন করুন'
                      : 'Ask clear and detailed questions'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <p>
                    {language === 'bn' 
                      ? 'ছবি আপলোড করে সমস্যার সমাধান চান'
                      : 'Upload images to get problem solutions'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <p>
                    {language === 'bn' 
                      ? 'প্রসঙ্গ ও প্রয়োজনীয় তথ্য দিন'
                      : 'Provide context and necessary information'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card className="h-[600px]">
              <ChatInterface
                sessionId={sessionId}
                placeholder={language === 'bn' 
                  ? "আপনার প্রশ্ন লিখুন... (ছবি আপলোড করতে 📎 ব্যবহার করুন)"
                  : "Type your question... (Use 📎 to upload images)"
                }
                className="h-full"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}