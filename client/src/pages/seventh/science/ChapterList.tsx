import * as React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ArrowRight } from 'lucide-react';

const chapters = [
  { id: 1, title: 'নিম্নশ্রেণির জীব', path: '/seventh/science/chapter1' },
  { id: 2, title: 'উদ্ভিদ ও প্রাণীর কোষীয় সংগঠন', path: '/seventh/science/chapter2' },
  { id: 3, title: 'উদ্ভিদের বাহ্যিক বৈশিষ্ট্য' },
  { id: 4, title: 'শ্বসন' },
  { id: 5, title: 'পরিপাকতন্ত্র এবং রক্ত সংবহনতন্ত্র' },
  { id: 6, title: 'পদার্থের গঠন' },
  { id: 7, title: 'শক্তির ব্যবহার' },
  { id: 8, title: 'শব্দের কথা' },
  { id: 9, title: 'তাপ ও তাপমাত্রা' },
  { id: 10, title: 'বিদ্যুৎ ও চুম্বকের ঘটনা' },
  { id: 11, title: 'পারিপার্শ্বিক পরিবর্তন ও বিভিন্ন ঘটনা' },
  { id: 12, title: 'সৌরজগৎ ও আমাদের পৃথিবী' },
  { id: 13, title: 'প্রাকৃতিক পরিবেশ এবং দূষণ' },
  { id: 14, title: 'জলবায়ু পরিবর্তন' },
];

const ChapterList: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                সাধারণ বিজ্ঞান
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

export default ChapterList;
