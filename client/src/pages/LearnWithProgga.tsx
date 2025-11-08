import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/components/LanguageProvider';
import { 
  GraduationCap, 
  BookOpen, 
  Calculator, 
  HelpCircle,
  Users,
  FileText,
  Brain,
  Lightbulb,
  Target,
  ArrowRight
} from 'lucide-react';
import type { ClassLevel, Subject } from '@/types';
import { SUBJECTS_BY_CLASS, SUBJECT_NAMES } from '@shared/schema';

export default function LearnWithProgga() {
  const { classLevel } = useParams<{ classLevel?: string }>();
  const { language, t } = useLanguage();

  const classes = [
    { 
      level: '6' as ClassLevel, 
      name: language === 'bn' ? 'ষষ্ঠ শ্রেণী' : 'Class 6', 
      color: 'from-red-400 to-red-500',
      icon: '৬'
    },
    { 
      level: '7' as ClassLevel, 
      name: language === 'bn' ? 'সপ্তম শ্রেণী' : 'Class 7', 
      color: 'from-orange-400 to-orange-500',
      icon: '৭'
    },
    { 
      level: '8' as ClassLevel, 
      name: language === 'bn' ? 'অষ্টম শ্রেণী' : 'Class 8', 
      color: 'from-yellow-400 to-yellow-500',
      icon: '৮'
    },
    { 
      level: '9' as ClassLevel, 
      name: language === 'bn' ? 'নবম শ্রেণী' : 'Class 9', 
      color: 'from-green-400 to-green-500',
      icon: '৯'
    },
    { 
      level: '10' as ClassLevel, 
      name: language === 'bn' ? 'দশম শ্রেণী' : 'Class 10', 
      color: 'from-blue-400 to-blue-500',
      icon: '১০'
    }
  ];

  const additionalFeatures = [
    {
      title: language === 'bn' ? 'ডিকশনারী' : 'Dictionary',
      description: language === 'bn' ? 'বিভিন্ন বিষয়ের শব্দার্থ' : 'Word meanings for various subjects',
      icon: <BookOpen className="h-6 w-6" />,
      href: '/dictionary',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: language === 'bn' ? 'বৈজ্ঞানিক ক্যালকুলেটর' : 'Scientific Calculator',
      description: language === 'bn' ? 'জটিল গণিত সমাধান' : 'Complex math solutions',
      icon: <Calculator className="h-6 w-6" />,
      href: '/calculator',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: language === 'bn' ? 'যাচাই করো তোমাকে' : 'Test Yourself',
      description: language === 'bn' ? 'MCQ প্রশ্ন তৈরি' : 'MCQ question generation',
      icon: <HelpCircle className="h-6 w-6" />,
      href: '/mcq',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const bookSections = [
    {
      title: language === 'bn' ? 'পাঠ্যবই' : 'Textbooks',
      description: language === 'bn' ? 'সরকারি পাঠ্যবই এবং গাইড' : 'Official textbooks and guides',
      icon: <FileText className="h-6 w-6" />,
      href: '/books?type=textbooks',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: language === 'bn' ? 'রেফারেন্স বুক' : 'Reference Books',
      description: language === 'bn' ? 'অতিরিক্ত অধ্যয়ন উপকরণ' : 'Additional study materials',
      icon: <BookOpen className="h-6 w-6" />,
      href: '/books?type=reference',
      color: 'from-green-500 to-teal-500'
    }
  ];

  // If a specific class is selected, show subjects for that class
  if (classLevel) {
    const selectedClass = classes.find(c => c.level === classLevel.replace('class-', ''));
    if (selectedClass) {
      const subjects = SUBJECTS_BY_CLASS[selectedClass.level as ClassLevel] || [];
      
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${selectedClass.color} rounded-xl flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold text-2xl">{selectedClass.icon}</span>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {selectedClass.name}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {language === 'bn' ? 'বিষয় নির্বাচন করুন' : 'Select a Subject'}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4 mb-6">
                <Badge variant="secondary" className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{subjects.length} {language === 'bn' ? 'টি বিষয়' : 'subjects'}</span>
                </Badge>
                <Badge variant="secondary" className="flex items-center space-x-1">
                  <Brain className="h-4 w-4" />
                  <span>{language === 'bn' ? 'AI সহায়ক' : 'AI Assistant'}</span>
                </Badge>
              </div>
            </div>

            {/* Back Button */}
            <div className="mb-6">
              <Link href="/learn">
                <Button variant="outline" className="flex items-center space-x-2">
                  <ArrowRight className="h-4 w-4 rotate-180" />
                  <span>{language === 'bn' ? 'ক্লাস নির্বাচনে ফিরুন' : 'Back to Class Selection'}</span>
                </Button>
              </Link>
            </div>

            {/* Subjects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subjects.map((subject) => (
                <Link key={subject} href={`/learn/class-${selectedClass.level}/${subject}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {SUBJECT_NAMES[subject as Subject] || subject}
                      </h3>
                      <Button size="sm" className="w-full mt-4">
                        {language === 'bn' ? 'শুরু করুন' : 'Start Learning'}
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Quiz Section */}
            <div className="mt-12">
              <Card className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                <CardContent className="p-8 text-center">
                  <Target className="h-16 w-16 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-4">
                    {language === 'bn' ? 'ইন্টারেক্টিভ কুইজ' : 'Interactive Quiz'}
                  </h2>
                  <p className="text-lg mb-6">
                    {language === 'bn' 
                      ? 'আপনার জ্ঞান যাচাই করুন মজার কুইজের মাধ্যমে'
                      : 'Test your knowledge with fun interactive quizzes'
                    }
                  </p>
                    <Link href={`/quiz?class=${selectedClass.level}`}>
                    <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                      {language === 'bn' ? 'কুইজ শুরু করুন' : 'Start Quiz'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      );
    }
  }

  // Main class selection page
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                {language === 'bn' ? 'শেখো প্রজ্ঞার সাথে' : 'Learn with Progga'}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">
                {language === 'bn' 
                  ? 'আপনার শ্রেণী ও বিষয় অনুযায়ী AI সহায়তা পান'
                  : 'Get AI assistance according to your class and subjects'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Class Selection */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'bn' ? 'ক্লাস নির্বাচন করুন' : 'Select Your Class'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {language === 'bn' 
                ? 'আপনার শ্রেণী অনুযায়ী বিশেষায়িত AI সহায়ক'
                : 'Specialized AI assistant according to your class'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {classes.map((cls) => (
              <Link key={cls.level} href={`/learn/class-${cls.level}`}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${cls.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <span className="text-white font-bold text-xl">{cls.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {cls.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {SUBJECTS_BY_CLASS[cls.level].length} {language === 'bn' ? 'টি বিষয়' : 'subjects'}
                    </p>
                    <Button size="sm" className="w-full">
                      {language === 'bn' ? 'ব্যবহার করুন' : 'Use'}
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Additional Features */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'bn' ? 'অতিরিক্ত ফিচারসমূহ' : 'Additional Features'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {language === 'bn' 
                ? 'বিভিন্ন বিষয়ের ডিকশনারী এবং বৈজ্ঞানিক ক্যালকুলেটর'
                : 'Subject dictionaries and scientific calculator'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Link key={index} href={feature.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-blue-500 group-hover:text-blue-600 transition-colors">
                      <span className="text-sm font-medium mr-2">
                        {language === 'bn' ? 'ব্যবহার করুন' : 'Use Now'}
                      </span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Books Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'bn' ? 'বইপত্র' : 'Books & Resources'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {language === 'bn' 
                ? 'পাঠ্যবই এবং অতিরিক্ত পড়াশোনার উপকরণ'
                : 'Textbooks and additional study materials'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {bookSections.map((section, index) => (
              <Link key={index} href={section.href}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white`}>
                      {section.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {section.description}
                    </p>
                    <Button className="w-full">
                      {language === 'bn' ? 'দেখুন' : 'View'}
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <Lightbulb className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                {language === 'bn' ? 'আমাদের লক্ষ্য' : 'Our Mission'}
              </h2>
              <p className="text-xl max-w-4xl mx-auto">
                {language === 'bn' 
                  ? 'বাংলাদেশের প্রতিটি শিক্ষার্থীর কাছে গুণগত শিক্ষা পৌঁছে দেওয়া এবং তাদের শিক্ষার যাত্রায় AI প্রযুক্তির মাধ্যমে সহায়তা করা।'
                  : 'To deliver quality education to every student in Bangladesh and assist them in their learning journey through AI technology.'
                }
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
