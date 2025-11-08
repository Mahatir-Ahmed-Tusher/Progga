import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChatInterface } from '@/components/ui/chat-interface';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/components/LanguageProvider';
import { api } from '@/lib/api';
import { 
  BookOpen, 
  ArrowRight, 
  Brain, 
  Target, 
  FileText,
  Calculator,
  Clock,
  Users
} from 'lucide-react';
import { SUBJECT_NAMES } from '@shared/schema';
import type { ClassLevel, Subject } from '@/types';

export default function SubjectChat() {
  const { classLevel, subject } = useParams<{ classLevel?: string; subject?: Subject }>();
  const { language } = useLanguage();
  const [sessionId, setSessionId] = useState<string>('');

  useEffect(() => {
    if (classLevel && subject) {
      const initializeSession = async () => {
        try {
          const session = await api.createChatSession('subject', classLevel, subject);
          setSessionId(session.sessionId);
        } catch (error) {
          console.error('Failed to create subject chat session:', error);
        }
      };

      initializeSession();
    }
  }, [classLevel, subject]);

  if (!classLevel || !subject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'bn' ? 'অবৈধ পথ' : 'Invalid Route'}
          </h1>
          <Link href="/learn">
            <Button>
              {language === 'bn' ? 'শেখার পেইজে ফিরুন' : 'Return to Learning'}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const subjectName = SUBJECT_NAMES[subject as Subject] || subject;
  const className = classLevel.replace('class-', '');
  
  const tips = [
    {
      title: language === 'bn' ? 'স্পষ্ট প্রশ্ন করুন' : 'Ask Clear Questions',
      description: language === 'bn' 
        ? 'বিস্তারিত এবং স্পষ্ট প্রশ্ন করলে ভালো উত্তর পাবেন'
        : 'Detailed and clear questions will get better answers'
    },
    {
      title: language === 'bn' ? 'ছবি ব্যবহার করুন' : 'Use Images',
      description: language === 'bn' 
        ? 'সমস্যার ছবি আপলোড করে সহজে সমাধান পান'
        : 'Upload problem images to get easy solutions'
    },
    {
      title: language === 'bn' ? 'ধাপে ধাপে শিখুন' : 'Learn Step by Step',
      description: language === 'bn' 
        ? 'জটিল বিষয়গুলো ছোট ছোট অংশে ভাগ করে শিখুন'
        : 'Break complex topics into smaller parts for learning'
    }
  ];

  const quickActions = [
    {
      title: language === 'bn' ? 'MCQ প্রশ্ন তৈরি' : 'Generate MCQ',
      description: language === 'bn' ? 'এই বিষয়ের উপর প্রশ্ন তৈরি করুন' : 'Create questions on this subject',
      href: `/mcq?subject=${subject}&class=${className}`,
      icon: <Target className="h-5 w-5" />
    },
    {
      title: language === 'bn' ? 'কুইজ খেলুন' : 'Take Quiz',
      description: language === 'bn' ? 'মজার কুইজে অংশ নিন' : 'Participate in fun quizzes',
      href: `/quiz/${className}/${subject}`,
      icon: <Brain className="h-5 w-5" />
    },
    {
      title: language === 'bn' ? 'বই দেখুন' : 'View Books',
      description: language === 'bn' ? 'সংশ্লিষ্ট বই ও রিসোর্স' : 'Related books and resources',
      href: `/books?class=${className}&subject=${subject}`,
      icon: <FileText className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {subjectName}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {className === '6' ? (language === 'bn' ? 'ষষ্ঠ শ্রেণী' : 'Class 6') :
                 className === '7' ? (language === 'bn' ? 'সপ্তম শ্রেণী' : 'Class 7') :
                 className === '8' ? (language === 'bn' ? 'অষ্টম শ্রেণী' : 'Class 8') :
                 className === '9' ? (language === 'bn' ? 'নবম শ্রেণী' : 'Class 9') :
                 className === '10' ? (language === 'bn' ? 'দশম শ্রেণী' : 'Class 10') :
                 `Class ${className}`}
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{language === 'bn' ? 'বিশেষায়িত AI' : 'Specialized AI'}</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{language === 'bn' ? '২৪/৭ সহায়তা' : '24/7 Support'}</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Brain className="h-4 w-4" />
              <span>{language === 'bn' ? 'স্মার্ট সহায়ক' : 'Smart Assistant'}</span>
            </Badge>
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
          <span className="text-gray-600 dark:text-gray-300">{subjectName}</span>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Learning Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5 text-blue-500" />
                  <span>
                    {language === 'bn' ? 'শেখার টিপস' : 'Learning Tips'}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                      {tip.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'bn' ? 'দ্রুত কার্যক্রম' : 'Quick Actions'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link key={index} href={action.href}>
                    <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          {action.icon}
                        </div>
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                          {action.title}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {action.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Subject Info */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'bn' ? 'বিষয় সম্পর্কে' : 'About Subject'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <p>
                    {language === 'bn' 
                      ? 'এই বিষয়ে যেকোনো প্রশ্ন করুন'
                      : 'Ask any question about this subject'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <p>
                    {language === 'bn' 
                      ? 'অনুশীলনী ও সমস্যার সমাধান পান'
                      : 'Get solutions to exercises and problems'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <p>
                    {language === 'bn' 
                      ? 'ধারণা পরিষ্কার করুন সহজ ভাষায়'
                      : 'Clarify concepts in simple language'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px]">
              <ChatInterface
                sessionId={sessionId}
                context={`Subject: ${subjectName}, Class: ${className}`}
                placeholder={language === 'bn' 
                  ? `${subjectName} সম্পর্কে প্রশ্ন করুন...`
                  : `Ask questions about ${subjectName}...`
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
