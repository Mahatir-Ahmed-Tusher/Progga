import * as React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ArrowRight } from 'lucide-react';

const chapters = [
  { id: 1, title: 'মূলদ ও অমূলদ সংখ্যা', path: '/seventh/math/chapter1' },
  { id: 2, title: 'সমানুপাত ও লাভ-ক্ষতি', path: '/seventh/math/chapter2' },
  { id: 3, title: 'পরিমাপ', path: '/seventh/math/chapter3' },
  { id: 4, title: 'বীজগণিতীয় রাশির গুণ ও ভাগ', path: '/seventh/math/chapter4' },
  { id: 5, title: 'বীজগণিতীয় সূত্রাবলি ও প্রয়োগ', path: '/seventh/math/chapter5' },
  { id: 6, title: 'বীজগণিতীয় ভগ্নাংশ', path: '/seventh/math/chapter6' },
  { id: 7, title: 'সরল সমীকরণ', path: '/seventh/math/chapter7' },
  { id: 8, title: 'সমান্তরাল সরলরেখা', path: '/seventh/math/chapter8' },
  { id: 9, title: 'ত্রিভুজ', path: '/seventh/math/chapter9' },
  { id: 10, title: 'সর্বসমতা ও সদৃশতা', path: '/seventh/math/chapter10' },
  { id: 11, title: 'তথ্য ও উপাত্ত', path: '/seventh/math/chapter11' },
];

const MathChapterList: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mr-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                সাধারণ গণিত
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                সপ্তম শ্রেণী - অধ্যায় তালিকা
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
          <Link href="/learn/class-7">
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

export default MathChapterList;
