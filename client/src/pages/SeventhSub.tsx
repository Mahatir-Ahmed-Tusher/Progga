import type { FC } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/components/LanguageProvider';
import { 
  BookOpen, 
  ArrowRight,
  Users,
  Brain,
  Target
} from 'lucide-react';
import { link } from 'fs';

export default function SeventhSub() {
  const { language } = useLanguage();

  const subjects = [
    {
      id: 'bangla_1st',
      name: language === 'bn' ? 'বাংলা ১ম পত্র' : 'Bengali 1st Paper',
      description: language === 'bn' ? 'সাহিত্য ও ব্যাকরণ' : 'Literature & Grammar', 
      color: 'from-red-500 to-pink-500',
      link: '/seventh/bangla1/bangla_first' // Updated to match the new Route path
    },
    {
      id: 'bangla_2nd',
      name: language === 'bn' ? 'বাংলা ২য় পত্র' : 'Bengali 2nd Paper',
      description: language === 'bn' ? 'রচনা ও ব্যাকরণ' : 'Composition & Grammar',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'english_1st',
      name: language === 'bn' ? 'ইংরেজি ১ম পত্র' : 'English 1st Paper', 
      description: language === 'bn' ? 'সাহিত্য ও পঠন' : 'Literature & Reading',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'english_2nd',
      name: language === 'bn' ? 'ইংরেজি ২য় পত্র' : 'English 2nd Paper',
      description: language === 'bn' ? 'ব্যাকরণ ও রচনা' : 'Grammar & Writing',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      id: 'science',
      name: language === 'bn' ? 'বিজ্ঞান' : 'Science',
      description: language === 'bn' ? 'পদার্থ, রসায়ন ও জীববিজ্ঞান' : 'Physics, Chemistry & Biology',
      color: 'from-green-500 to-emerald-500',
      link: '/seventh/science' // Updated to match the Route path
    },
    {
      id: 'math',
      name: language === 'bn' ? 'গণিত' : 'Mathematics',
      description: language === 'bn' ? 'সংখ্যা, বীজগণিত ও জ্যামিতি' : 'Numbers, Algebra & Geometry',
      color: 'from-purple-500 to-violet-500',
      link: '/seventh/math' // Updated to match the Route path
    },
    {
      id: 'bangladesh_studies',
      name: language === 'bn' ? 'বাংলাদেশ ও বিশ্বপরিচয়' : 'Bangladesh & Global Studies',
      description: language === 'bn' ? 'ইতিহাস, ভূগোল ও সমাজবিজ্ঞান' : 'History, Geography & Social Science',
      color: 'from-orange-500 to-amber-500',
      link: '/seventh/shomaj'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold text-2xl">৭</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {language === 'bn' ? 'সপ্তম শ্রেণী' : 'Class 7'}
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              href={subject.link || `/learn/class-7/${subject.id}`} // Use subject.link if provided, otherwise fallback to default
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${subject.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {subject.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {subject.description}
                  </p>
                  <Button size="sm" className="w-full">
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
              <Link href="/quiz/7">
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