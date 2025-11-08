import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/components/LanguageProvider';
import { 
  Brain, 
  MessageCircle, 
  GraduationCap, 
  HelpCircle, 
  BookOpen, 
  Calculator, 
  Users, 
  CheckCircle, 
  Lightbulb,
  Heart,
  Globe,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function Home() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: language === 'bn' ? 'AI চ্যাট সহায়ক' : 'AI Chat Assistant',
      description: language === 'bn' 
        ? 'যেকোনো বিষয়ে প্রশ্ন করুন এবং তাৎক্ষণিক উত্তর পান। ছবি আপলোড করে সমস্যার সমাধান চান।'
        : 'Ask questions on any topic and get instant answers. Upload images for problem solving.',
      color: 'from-blue-500 to-blue-600',
      href: '/chat'
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: language === 'bn' ? 'শ্রেণীভিত্তিক শিক্ষা' : 'Class-wise Learning',
      description: language === 'bn'
        ? 'ষষ্ঠ থেকে দশম শ্রেণী পর্যন্ত প্রতিটি বিষয়ের জন্য বিশেষায়িত AI শিক্ষক।'
        : 'Specialized AI teachers for each subject from Class 6 to 10.',
      color: 'from-green-500 to-green-600',
      href: '/learn'
    },
    {
      icon: <HelpCircle className="h-8 w-8" />,
      title: language === 'bn' ? 'যাচাই করো তোমাকে' : 'Test Yourself',
      description: language === 'bn'
        ? 'যেকোনো পাঠ্যাংশ থেকে স্বয়ংক্রিয় MCQ প্রশ্ন তৈরি করুন এবং নিজেকে যাচাই করুন।'
        : 'Generate automatic MCQ questions from any content and test yourself.',
      color: 'from-purple-500 to-purple-600',
      href: '/mcq'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: language === 'bn' ? 'স্মার্ট ডিকশনারী' : 'Smart Dictionary',
      description: language === 'bn'
        ? 'বাংলা ও ইংরেজি শব্দের অর্থ, প্রতিশব্দ এবং ব্যবহার জানুন।'
        : 'Learn meanings, synonyms and usage of Bengali and English words.',
      color: 'from-yellow-500 to-orange-500',
      href: '/dictionary'
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: language === 'bn' ? 'বৈজ্ঞানিক ক্যালকুলেটর' : 'Scientific Calculator',
      description: language === 'bn'
        ? 'গণিত ও বিজ্ঞানের জটিল হিসাব-নিকাশের জন্য উন্নত ক্যালকুলেটর।'
        : 'Advanced calculator for complex mathematical and scientific calculations.',
      color: 'from-red-500 to-pink-500',
      href: '/calculator'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: language === 'bn' ? 'বইপত্র' : 'Textbooks',
      description: language === 'bn'
        ? 'সকল শ্রেণীর পাঠ্যবই এবং সহায়ক বইয়ের তথ্য ও গাইড।'
        : 'Information and guides for textbooks and reference materials for all classes.',
      color: 'from-indigo-500 to-purple-500',
      href: '/books'
    }
  ];

  const classes = [
    { number: '৬', name: language === 'bn' ? 'ষষ্ঠ শ্রেণী' : 'Class 6', subjects: 7, color: 'from-red-400 to-red-500' },
    { number: '৭', name: language === 'bn' ? 'সপ্তম শ্রেণী' : 'Class 7', subjects: 7, color: 'from-orange-400 to-orange-500' },
    { number: '৮', name: language === 'bn' ? 'অষ্টম শ্রেণী' : 'Class 8', subjects: 7, color: 'from-yellow-400 to-yellow-500' },
    { number: '৯', name: language === 'bn' ? 'নবম শ্রেণী' : 'Class 9', subjects: 8, color: 'from-green-400 to-green-500' },
    { number: '১০', name: language === 'bn' ? 'দশম শ্রেণী' : 'Class 10', subjects: 8, color: 'from-blue-400 to-blue-500' }
  ];

  const aboutPoints = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      text: language === 'bn' ? 'বাংলা ও ইংরেজি উভয় ভাষায় সাপোর্ট' : '24/7 available AI support'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      text: language === 'bn' ? 'বাংলাদেশের পাঠ্যক্রম অনুযায়ী ডিজাইন' : 'Support for both Bengali and English'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      text: language === 'bn' ? '২৪/৭ উপলব্ধ AI সহায়ক' : 'Designed according to Bangladesh curriculum'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      text: language === 'bn' ? 'ইন্টারেক্টিভ শিক্ষার পরিবেশ' : 'Interactive learning environment'
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-12 w-12 text-blue-500" />,
      title: language === 'bn' ? 'উদ্ভাবন' : 'Innovation',
      description: language === 'bn' ? 'আধুনিক প্রযুক্তির সাথে ঐতিহ্যবাহী শিক্ষার সমন্বয়' : 'Combining modern technology with traditional education'
    },
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: language === 'bn' ? 'নিষ্ঠা' : 'Dedication',
      description: language === 'bn' ? 'প্রতিটি শিক্ষার্থীর সাফল্যের জন্য আমাদের অটুট প্রতিশ্রুতি' : 'Our unwavering commitment to every student\'s success'
    },
    {
      icon: <Globe className="h-12 w-12 text-green-500" />,
      title: language === 'bn' ? 'দৃষ্টিভঙ্গি' : 'Vision',
      description: language === 'bn' ? 'বিশ্বমানের শিক্ষা সবার কাছে পৌঁছে দেওয়া' : 'Delivering world-class education to everyone'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-300"/>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Sparkles className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {language === 'bn' ? 'প্রযুক্তি হোক শেখার মাধ্যম' : 'Next Generation Education'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  প্রজ্ঞা AI
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl">
                  {language === 'bn' ? 'এর সাথে শেখো' : 'Learn with AI'}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {language === 'bn' 
                  ? 'শেখো, জিজ্ঞাসা করো, এগিয়ে যাও - প্রজ্ঞার সঙ্গে। বাংলাদেশের শিক্ষার্থীদের জন্য AI-চালিত শিক্ষার নতুন যুগ।'
                  : 'Learn, Ask, Discover - with Progga AI. A new era of AI-powered education for Bangladeshi students.'
                }
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/chat">
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {t('chatWithProgga')}
                  </Button>
                </Link>
                <Link href="/learn">
                  <Button variant="outline" size="lg" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-200">
                    <GraduationCap className="mr-2 h-5 w-5" />
                    {t('learnWithProgga')}
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute inset-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-40 flex items-center justify-center">
                  <img 
                  src="https://i.postimg.cc/Kj7Njv5t/Blank-board-9.png"
                  alt="Progga AI"
                  className="h-54 w-54"
                  />
                </div>
                
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg animate-bounce">
                  <Calculator className="h-6 w-6 text-green-500" />
                </div>
                <div className="absolute top-1/4 -left-8 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.3s'}}>
                  <BookOpen className="h-6 w-6 text-purple-500" />
                </div>
                <div className="absolute bottom-1/4 -right-8 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.6s'}}>
                  <GraduationCap className="h-6 w-6 text-blue-500" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0.9s'}}>
                  <HelpCircle className="h-6 w-6 text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-12">
            <img 
              src="https://i.postimg.cc/gcHNqFjS/Blank-board-6.png" 
              alt="Progga AI Features"
              className="max-w-[920px] h-auto"
            />
            </div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              {language === 'bn' ? 'প্রজ্ঞা AI এর বৈশিষ্ট্যসমূহ' : 'Progga AI Features'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-200 max-w-3xl mx-auto">
              {language === 'bn'
                ? 'আধুনিক AI প্রযুক্তির সাহায্যে বাংলাদেশের শিক্ষাব্যবস্থার সাথে মানানসই একটি সম্পূর্ণ শিক্ষার পরিবেশ'
                : 'A complete educational environment compatible with Bangladesh\'s education system using modern AI technology'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-blue-500 group-hover:text-blue-600 transition-colors">
                      <span className="text-sm font-medium mr-2">
                        {language === 'bn' ? 'ব্যবহার করুন' : 'Try Now'}
                      </span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Class Selection Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'bn' ? 'আপনার শ্রেণী নির্বাচন করুন' : 'Select Your Class'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {language === 'bn' 
                ? 'প্রতিটি শ্রেণীর জন্য বিশেষভাবে ডিজাইন করা AI সহায়ক'
                : 'Specially designed AI assistants for each class'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {classes.map((cls, index) => (
              <Link key={index} href={`/learn/class-${6 + index}`}>
                <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${cls.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <span className="text-white font-bold text-xl">{cls.number}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {cls.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {cls.subjects} {language === 'bn' ? 'টি বিষয়' : 'subjects'}
                    </p>
                    <Button size="sm" className="w-full">
                      {t('use')}
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
            <div className="flex justify-start mb-6">
              <img 
              src="https://i.postimg.cc/fLQ1F13g/Removal-179.png" 
              alt="Why Progga AI"
              className="max-w-[350px] w-full h-auto float-left" 
              />
            </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'bn' ? 'কেন প্রজ্ঞা AI?' : 'Why Progga AI?'}
          </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {language === 'bn'
                  ? 'বাংলাদেশের শিক্ষাব্যবস্থায় একটি নতুন বিপ্লব আনতে আমরা তৈরি করেছি প্রজ্ঞা AI। এটি একটি সম্পূর্ণ AI-চালিত শিক্ষার প্ল্যাটফর্ম যা শিক্ষার্থীদের ব্যক্তিগত প্রয়োজন অনুযায়ী শিক্ষা প্রদান করে।'
                  : 'We have created Progga AI to bring a new revolution to Bangladesh\'s education system. It is a complete AI-powered educational platform that provides education according to the individual needs of students.'
                }
              </p>
              
              <div className="space-y-4">
                {aboutPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {point.icon}
                    <p className="text-gray-600 dark:text-gray-300">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'bn' 
              ? 'আজই শুরু করুন আপনার শিক্ষার যাত্রা'
              : 'Start Your Learning Journey Today'
            }
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {language === 'bn'
              ? 'প্রজ্ঞা AI এর সাথে আবিষ্কার করুন শিক্ষার নতুন সম্ভাবনা'
              : 'Discover new possibilities in education with Progga AI'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chat">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-200">
                <Brain className="mr-2 h-5 w-5" />
                {language === 'bn' ? 'এখনই শুরু করুন' : 'Start Now'}
              </Button>
            </Link>
            <Link href="/learn">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transform hover:scale-105 transition-all duration-200">
                <GraduationCap className="mr-2 h-5 w-5" />
                {language === 'bn' ? 'ডেমো দেখুন' : 'View Demo'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
