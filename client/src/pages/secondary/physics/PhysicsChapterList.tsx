import * as React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ArrowRight } from 'lucide-react';

const chapters = [
  { id: 1, title: 'ভৌত রাশি আর তার পরিমাপ', path: '/physics/chapter1' },
  { id: 2, title: 'গতি', path: '/physics/chapter2' },
  { id: 3, title: 'বল' },
  { id: 4, title: 'কাজ, ক্ষমতা ও শক্তি' },
  { id: 5, title: 'পদার্থের অবস্থা ও চাপ' },
  { id: 6, title: 'বস্তুর উপর তাপের প্রভাব' },
  { id: 7, title: 'তরঙ্গ ও শব্দ' },
  { id: 8, title: 'আলোর প্রতিফলন' },
  { id: 9, title: 'আলোর প্রতিসরণ' },
  { id: 10, title: 'স্থির বিদ্যুৎ' },
  { id: 11, title: 'চলবিদ্যুৎ' },
  { id: 12, title: 'বিদ্যুতের চৌম্বক ক্রিয়া' },
  { id: 13, title: 'আধুনিক পদার্থবিজ্ঞান ও ইলেকট্রনিক্স' },
  { id: 14, title: 'মানুষের জন্য পদার্থবিজ্ঞান' },
];

const PhysicsChapterList: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                পদার্থবিজ্ঞান
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                নবম-দশম শ্রেণী - অধ্যায় তালিকা
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-6">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <BookOpen className="h-4 w-4" />
              <span>{chapters.length} টি অধ্যায়</span>
            </Badge>
          </div>
        </div>

        {/* Back Button */}
        <div className="mb-6">
          <Link href="/learn/class-9">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowRight className="h-4 w-4 rotate-180" />
              <span>শ্রেণী নির্বাচনে ফিরুন</span>
            </Button>
          </Link>
        </div>

        {/* Chapters List */}
        <div className="space-y-4">
          {chapters.map((chapter) => (
            <Card key={chapter.id} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge variant="outline" className="text-sm">
                        অধ্যায় {chapter.id}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {chapter.title}
                    </h3>
                  </div>
                  <div className="ml-4">
                    {chapter.path ? (
                      <Link href={chapter.path}>
                        <Button size="sm" className="flex items-center space-x-2">
                          <span>শুরু করুন</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Button size="sm" variant="secondary" disabled>
                        শীঘ্রই আসছে
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhysicsChapterList;
