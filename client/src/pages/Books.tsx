import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/components/LanguageProvider';
import { 
  BookOpen, 
  Search, 
  Download, 
  ExternalLink,
  Star,
  Filter,
  Grid,
  List,
  FileText,
  Users
} from 'lucide-react';
import { SUBJECTS_BY_CLASS, SUBJECT_NAMES } from '@shared/schema';
import type { ClassLevel, Subject } from '@/types';

interface Book {
  id: string;
  title: string;
  titleEn: string;
  subject: Subject;
  class: ClassLevel | 'all';
  type: 'textbook' | 'reference' | 'guide' | 'magazine' | 'fiction';
  author: string;
  publisher: string;
  year: number;
  pages: number;
  description: string;
  descriptionEn: string;
  thumbnail: string;
  downloadUrl?: string;
  viewUrl?: string;
  rating: number;
  downloads: number;
}

export default function Books() {
  const location = usePathname();
  const { language } = useLanguage();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState<ClassLevel | 'all'>('all');
  const [selectedSubject, setSelectedSubject] = useState<Subject | 'all'>('all');
  const [selectedType, setSelectedType] = useState<'textbook' | 'reference' | 'guide' | 'magazine' | 'fiction' | 'all'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get URL parameters manually
  const urlParams = new URLSearchParams(location.split('?')[1] || '');
  const urlClass = urlParams.get('class') as ClassLevel;
  const urlSubject = urlParams.get('subject') as Subject;
  const urlType = urlParams.get('type') as 'textbook' | 'reference' | 'guide' | 'magazine' | 'fiction';

  // Mock data for books (in a real app, this would come from an API)
  const mockBooks: Book[] = [
    {
      id: '1',
      title: 'গণিত (ষষ্ঠ শ্রেণী)',
      titleEn: 'Mathematics (Class 6)',
      subject: 'math',
      class: '6',
      type: 'textbook',
      author: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড',
      publisher: 'NCTB',
      year: 2024,
      pages: 156,
      description: 'ষষ্ঠ শ্রেণীর গণিত বিষয়ের সরকারি পাঠ্যবই। এই বইয়ে সংখ্যা, বীজগণিত, জ্যামিতি এবং পরিসংখ্যানের মৌলিক বিষয়গুলো রয়েছে।',
      descriptionEn: 'Official mathematics textbook for Class 6. This book covers basic topics in numbers, algebra, geometry, and statistics.',
      thumbnail: '/api/placeholder/200/280',
      downloadUrl: '#',
      viewUrl: '#',
      rating: 4.5,
      downloads: 12543
    },
    {
      id: '2',
      title: 'বাংলা (নব bleu-দশম শ্রেণী)',
      titleEn: 'Bengali (Class 9-10)',
      subject: 'bangla_1st',
      class: '9',
      type: 'textbook',
      author: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড',
      publisher: 'NCTB',
      year: 2024,
      pages: 224,
      description: 'নবম ও দশম শ্রেণীর বাংলা ১ম পত্রের সরকারি পাঠ্যবই। গদ্য, পদ্য ও নাটকের সমন্বয়ে সাজানো।',
      descriptionEn: 'Official Bengali 1st paper textbook for Classes 9-10. Arranged with prose, poetry, and drama.',
      thumbnail: '/api/placeholder/200/280',
      downloadUrl: '#',
      viewUrl: '#',
      rating: 4.7,
      downloads: 18392
    },
    {
      id: '3',
      title: 'পদার্থবিজ্ঞান (নবম-দশম শ্রেণী)',
      titleEn: 'Physics (Class 9-10)',
      subject: 'physics',
      class: '9',
      type: 'textbook',
      author: 'জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড',
      publisher: 'NCTB',
      year: 2024,
      pages: 189,
      description: 'নবম ও দশম শ্রেণীর পদার্থবিজ্ঞানের সরকারি পাঠ্যবই। বল, গতি, শক্তি এবং পদার্থের ধর্ম নিয়ে আলোচনা।',
      descriptionEn: 'Official physics textbook for Classes 9-10. Discusses force, motion, energy, and properties of matter.',
      thumbnail: '/api/placeholder/200/280',
      downloadUrl: '#',
      viewUrl: '#',
      rating: 4.3,
      downloads: 9876
    },
    {
      id: '4',
      title: 'গণিত সমাধান গাইড (অষ্টম শ্রেণী)',
      titleEn: 'Mathematics Solution Guide (Class 8)',
      subject: 'math',
      class: '8',
      type: 'guide',
      author: 'প্রফেসর আহমেদ',
      publisher: 'শিক্ষা প্রকাশনী',
      year: 2024,
      pages: 89,
      description: 'অষ্টম শ্রেণীর গণিত বইয়ের সকল অনুশীলনীর সমাধান সহ গাইড বই।',
      descriptionEn: 'Guide book with solutions to all exercises from Class 8 mathematics textbook.',
      thumbnail: '/api/placeholder/200/280',
      downloadUrl: 'https://drive.google.com/file/d/18TTyGILGHBsuL1l9FLIhBvTEaT_wruRE/view',
      viewUrl: 'https://drive.google.com/file/d/18TTyGILGHBsuL1l9FLIhBvTEaT_wruRE/view',
      rating: 4.1,
      downloads: 5432
    },
    {
      id: '5',
      title: 'ব্যাঙাচি- দানব সংখ্যা',
      titleEn: 'Byangachi - Monster Numbers',
      subject: 'science',
      class: 'all',
      type: 'magazine',
      author: 'ব্যাঙের ছাতার বিজ্ঞান',
      publisher: 'ব্যাঙের ছাতার বিজ্ঞান',
      year: 2024,
      pages: 50,
      description: 'ফেইসবুক ভিত্তিক বিজ্ঞান গ্রুপ ব্যাঙের ছাতার বিজ্ঞান কর্তৃক প্রকাশিত মাসিক বিজ্ঞান ম্যাগাজিন। এই সংখ্যায় দৈত্যাকার সব প্রাণি নিয়ে মজার সব তথ্য।',
      descriptionEn: 'Monthly science magazine published by Facebook group Byang er Chatar Biggan. This issue features interesting facts about large numbers in science and mathematics.',
      thumbnail: 'https://i.postimg.cc/jS9hLKvL/image.png',
      downloadUrl: 'https://drive.google.com/file/d/1DsGsU_IEa1rfcpVO8-2ARX9wn4Je6Lt4/view',
      viewUrl: 'https://drive.google.com/file/d/1DsGsU_IEa1rfcpVO8-2ARX9wn4Je6Lt4/view',
      rating: 4.8,
      downloads: 2500
    },
    {
      id: '6',
      title: 'নীল নদের রহস্য',
      titleEn: 'Mystery of the Blue River',
      subject: 'bangla_1st',
      class: 'all',
      type: 'fiction',
      author: 'শরৎচন্দ্র রায়',
      publisher: 'অনুপম প্রকাশনী',
      year: 2024,
      pages: 320,
      description: 'একটি রোমাঞ্চকর কাল্পনিক গল্প যেখানে একটি রহস্যময় নদীকে কেন্দ্র করে একদল তরুণ অভিযাত্রীর দুঃসাহসিক যাত্রা বর্ণনা করা হয়েছে।',
      descriptionEn: 'A thrilling fictional story about a group of young adventurers unraveling the mysteries surrounding a mystical blue river.',
      thumbnail: '/api/placeholder/200/280',
      downloadUrl: 'https://example.com/nil-noder-rohosyo.pdf',
      viewUrl: 'https://example.com/nil-noder-rohosyo.pdf',
      rating: 4.6,
      downloads: 3200
    }
  ];

  // Apply URL filters
  React.useEffect(() => {
    if (urlClass) setSelectedClass(urlClass);
    if (urlSubject) setSelectedSubject(urlSubject);
    if (urlType) setSelectedType(urlType);
  }, [urlClass, urlSubject, urlType]);

  // Filter books based on search and filters
  const filteredBooks = mockBooks.filter(book => {
    const matchesSearch = searchTerm === '' || 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.titleEn.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesClass = selectedClass === 'all' || book.class === selectedClass;
    const matchesSubject = selectedSubject === 'all' || book.subject === selectedSubject;
    const matchesType = selectedType === 'all' || book.type === selectedType;
    
    return matchesSearch && matchesClass && matchesSubject && matchesType;
  });

  const classes: ClassLevel[] = ['6', '7', '8', '9', '10'];
  const bookTypes = [
    { value: 'textbook', label: language === 'bn' ? 'পাঠ্যবই' : 'Textbooks' },
    { value: 'reference', label: language === 'bn' ? 'রেফারেন্স' : 'Reference' },
    { value: 'guide', label: language === 'bn' ? 'গাইড বই' : 'Guide Books' },
    { value: 'magazine', label: language === 'bn' ? 'ম্যাগাজিন' : 'Magazine' },
    { value: 'fiction', label: language === 'bn' ? 'কল্পকাহিনী' : 'Fiction' }
  ] as const;

  const getSubjectsForClass = (classLevel: ClassLevel) => {
    return SUBJECTS_BY_CLASS[classLevel] || [];
  };

  const allSubjects = Array.from(new Set(
    classes.flatMap(cls => getSubjectsForClass(cls))
  ));

  const renderBookCard = (book: Book) => (
    <Card key={book.id} className="h-full hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-4">
        <div className="flex space-x-4 h-full">
          {/* Thumbnail */}
          <div className="flex-shrink-0">
            <img 
              src={book.thumbnail} 
              alt={language === 'bn' ? book.title : book.titleEn} 
              className="w-24 h-32 object-cover rounded-lg"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                {language === 'bn' ? book.title : book.titleEn}
              </h3>
              <div className="flex items-center space-x-1 text-yellow-500 ml-2">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm text-gray-600 dark:text-gray-300">{book.rating}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge variant="outline">
                {language === 'bn' ? (book.class === 'all' ? 'সব শ্রেণী' : `${book.class} শ্রেণী`) : (book.class === 'all' ? 'All Classes' : `Class ${book.class}`)}
              </Badge>
              <Badge variant="outline">
                {SUBJECT_NAMES[book.subject] || book.subject}
              </Badge>
              <Badge variant={book.type === 'textbook' ? 'default' : 'secondary'}>
                {book.type === 'textbook' 
                  ? (language === 'bn' ? 'পাঠ্যবই' : 'Textbook')
                  : book.type === 'reference' 
                  ? (language === 'bn' ? 'রেফারেন্স' : 'Reference')
                  : book.type === 'guide'
                  ? (language === 'bn' ? 'গাইড' : 'Guide')
                  : book.type === 'magazine'
                  ? (language === 'bn' ? 'ম্যাগাজিন' : 'Magazine')
                  : (language === 'bn' ? 'কল্পকাহিনী' : 'Fiction')
                }
              </Badge>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
              {language === 'bn' ? book.description : book.descriptionEn}
            </p>
            
            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
              <span>{book.author}</span>
              <span>{book.pages} {language === 'bn' ? 'পৃষ্ঠা' : 'pages'}</span>
            </div>
            
            <div className="flex space-x-2">
              {book.viewUrl && (
                <a href={book.viewUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    {language === 'bn' ? 'দেখুন' : 'View'}
                  </Button>
                </a>
              )}
              {book.downloadUrl && (
                <a href={book.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-1" />
                    {language === 'bn' ? 'ডাউনলোড' : 'Download'}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderBookGrid = (book: Book) => (
    <Card key={book.id} className="h-full hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-4">
        {/* Thumbnail */}
        <img 
          src={book.thumbnail} 
          alt={language === 'bn' ? book.title : book.titleEn} 
          className="w-full h-32 object-cover rounded-lg mb-4"
        />
        
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2 flex-1">
            {language === 'bn' ? book.title : book.titleEn}
          </h3>
          <div className="flex items-center space-x-1 text-yellow-500 ml-2">
            <Star className="h-3 w-3 fill-current" />
            <span className="text-xs text-gray-600 dark:text-gray-300">{book.rating}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          <Badge variant="outline" className="text-xs">
            {language === 'bn' ? (book.class === 'all' ? 'সব শ্রেণী' : `${book.class} শ্রেণী`) : (book.class === 'all' ? 'All Classes' : `Class ${book.class}`)}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {book.type === 'textbook' 
              ? (language === 'bn' ? 'পাঠ্য' : 'Text')
              : book.type === 'reference' 
              ? (language === 'bn' ? 'রেফ' : 'Ref')
              : book.type === 'guide'
              ? (language === 'bn' ? 'গাইড' : 'Guide')
              : book.type === 'magazine'
              ? (language === 'bn' ? 'ম্যাগাজিন' : 'Mag')
              : (language === 'bn' ? 'কল্পকাহিনী' : 'Fic')
            }
          </Badge>
        </div>
        
        <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
          {language === 'bn' ? book.description : book.descriptionEn}
        </p>
        
        <div className="flex space-x-1">
          {book.viewUrl && (
            <a href={book.viewUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button size="sm" variant="outline" className="w-full text-xs">
                <ExternalLink className="h-3 w-3 mr-1" />
                {language === 'bn' ? 'দেখুন' : 'View'}
              </Button>
            </a>
          )}
          {book.downloadUrl && (
            <a href={book.downloadUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button size="sm" className="w-full text-xs">
                <Download className="h-3 w-3 mr-1" />
                {language === 'bn' ? 'DL' : 'DL'}
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {language === 'bn' ? 'বইপত্র' : 'Books & Resources'}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {language === 'bn' 
                  ? 'সকল শ্রেণীর পাঠ্যবই, গাইড, রেফারেন্স বই, ম্যাগাজিন এবং কল্পকাহিনী'
                  : 'Textbooks, guides, reference materials, magazines, and fiction for all classes'
                }
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <FileText className="h-4 w-4" />
              <span>{filteredBooks.length} {language === 'bn' ? 'টি বই' : 'books'}</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{language === 'bn' ? 'সব শ্রেণীর জন্য' : 'For all classes'}</span>
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>{language === 'bn' ? 'ফিল্টার' : 'Filters'}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {language === 'bn' ? 'খুঁজুন' : 'Search'}
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder={language === 'bn' ? "বইয়ের নাম লিখুন..." : "Enter book name..."}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Class Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {language === 'bn' ? 'শ্রেণী' : 'Class'}
                  </label>
                  <div className="space-y-2">
                    <Button
                      variant={selectedClass === 'all' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedClass('all')}
                      className="w-full justify-start"
                    >
                      {language === 'bn' ? 'সব শ্রেণী' : 'All Classes'}
                    </Button>
                    {classes.map((cls) => (
                      <Button
                        key={cls}
                        variant={selectedClass === cls ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedClass(cls)}
                        className="w-full justify-start"
                      >
                        {language === 'bn' ? `${cls} শ্রেণী` : `Class ${cls}`}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Subject Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {language === 'bn' ? 'বিষয়' : 'Subject'}
                  </label>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    <Button
                      variant={selectedSubject === 'all' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedSubject('all')}
                      className="w-full justify-start"
                    >
                      {language === 'bn' ? 'সব বিষয়' : 'All Subjects'}
                    </Button>
                    {allSubjects.map((subject) => (
                      <Button
                        key={subject}
                        variant={selectedSubject === subject ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedSubject(subject)}
                        className="w-full justify-start text-xs"
                      >
                        {SUBJECT_NAMES[subject] || subject}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {language === 'bn' ? 'ধরন' : 'Type'}
                  </label>
                  <div className="space-y-2">
                    <Button
                      variant={selectedType === 'all' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedType('all')}
                      className="w-full justify-start"
                    >
                      {language === 'bn' ? 'সব ধরন' : 'All Types'}
                    </Button>
                    {bookTypes.map((type) => (
                      <Button
                        key={type.value}
                        variant={selectedType === type.value ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedType(type.value)}
                        className="w-full justify-start"
                      >
                        {type.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Books Grid */}
          <div className="lg:col-span-3">
            {/* View Toggle and Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {filteredBooks.length} {language === 'bn' ? 'টি বই পাওয়া গেছে' : 'books found'}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {selectedClass !== 'all' && `${language === 'bn' ? 'শ্রেণী' : 'Class'}: ${selectedClass} • `}
                  {selectedSubject !== 'all' && `${SUBJECT_NAMES[selectedSubject as Subject]} • `}
                  {selectedType !== 'all' && `${bookTypes.find(t => t.value === selectedType)?.label}`}
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Books Display */}
            {filteredBooks.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {language === 'bn' ? 'কোনো বই পাওয়া যায়নি' : 'No books found'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'bn' 
                      ? 'আপনার সার্চ অনুযায়ী কোনো বই খুঁজে পাওয়া যায়নি। ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।'
                      : 'No books match your search criteria. Try adjusting your filters.'
                    }
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className={viewMode === 'grid' 
                ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-6' 
                : 'space-y-4'
              }>
                {filteredBooks.map(book => 
                  viewMode === 'grid' ? renderBookGrid(book) : renderBookCard(book)
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}