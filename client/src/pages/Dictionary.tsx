import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/components/LanguageProvider';
import { api } from '@/lib/api';
import { 
  BookOpen, 
  Search, 
  Loader2, 
  Volume2,
  Star,
  Clock,
  Languages
} from 'lucide-react';

interface SearchResult {
  word: string;
  definition: string;
  language: 'bn' | 'en';
  timestamp: Date;
}

export default function Dictionary() {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  
  const [searchWord, setSearchWord] = useState('');
  const [searchLanguage, setSearchLanguage] = useState<'bn' | 'en'>('bn');
  const [isSearching, setIsSearching] = useState(false);
  const [currentResult, setCurrentResult] = useState<SearchResult | null>(null);
  const [searchHistory, setSearchHistory] = useState<SearchResult[]>([]);

  const popularWords = {
    bn: [
      'অভিধান', 'শিক্ষা', 'বিজ্ঞান', 'গণিত', 'ইতিহাস', 
      'সাহিত্য', 'ভূগোল', 'রসায়ন', 'পদার্থবিজ্ঞান', 'জীববিজ্ঞান'
    ],
    en: [
      'education', 'science', 'mathematics', 'history', 'literature',
      'geography', 'chemistry', 'physics', 'biology', 'knowledge'
    ]
  };

  const handleSearch = async () => {
    if (!searchWord.trim()) {
      toast({
        title: language === 'bn' ? "শব্দ প্রয়োজন" : "Word Required",
        description: language === 'bn' 
          ? "দয়া করে একটি শব্দ লিখুন।"
          : "Please enter a word to search.",
        variant: "destructive"
      });
      return;
    }

    setIsSearching(true);
    try {
      const response = await api.lookupWord(searchWord.trim(), searchLanguage);
      
      const result: SearchResult = {
        word: searchWord.trim(),
        definition: response.definition,
        language: searchLanguage,
        timestamp: new Date()
      };
      
      setCurrentResult(result);
      
      // Add to history (keep last 10 searches)
      setSearchHistory(prev => [result, ...prev.slice(0, 9)]);
      
      toast({
        title: language === 'bn' ? "খুঁজে পাওয়া গেছে!" : "Found!",
        description: language === 'bn' 
          ? "শব্দের অর্থ পাওয়া গেছে।"
          : "Word definition found.",
      });
    } catch (error) {
      console.error('Failed to search word:', error);
      toast({
        title: language === 'bn' ? "ত্রুটি" : "Error",
        description: language === 'bn' 
          ? "শব্দ খুঁজতে সমস্যা হয়েছে। আবার চেষ্টা করুন।"
          : "Failed to search word. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const searchPopularWord = (word: string) => {
    setSearchWord(word);
    setSearchLanguage(language);
  };

  const clearHistory = () => {
    setSearchHistory([]);
    toast({
      title: language === 'bn' ? "ইতিহাস মুছে দেওয়া হয়েছে" : "History Cleared",
      description: language === 'bn' 
        ? "সার্চ ইতিহাস মুছে দেওয়া হয়েছে।"
        : "Search history has been cleared."
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {language === 'bn' ? 'স্মার্ট ডিকশনারী' : 'Smart Dictionary'}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {language === 'bn' 
                  ? 'বাংলা ও ইংরেজি শব্দের অর্থ, ব্যবহার এবং ব্যাখ্যা'
                  : 'Meanings, usage and explanations of Bengali and English words'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Search Interface */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Search className="h-5 w-5" />
              <span>{language === 'bn' ? 'শব্দ খুঁজুন' : 'Search Word'}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Language Selection */}
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {language === 'bn' ? 'ভাষা:' : 'Language:'}
                </span>
                <div className="flex space-x-2">
                  <Button
                    variant={searchLanguage === 'bn' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSearchLanguage('bn')}
                  >
                    বাংলা
                  </Button>
                  <Button
                    variant={searchLanguage === 'en' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSearchLanguage('en')}
                  >
                    English
                  </Button>
                </div>
              </div>

              {/* Search Input */}
              <div className="flex space-x-3">
                <Input
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={language === 'bn' 
                    ? "শব্দটি লিখুন..."
                    : "Enter word to search..."
                  }
                  className="flex-1"
                  disabled={isSearching}
                />
                <Button
                  onClick={handleSearch}
                  disabled={isSearching || !searchWord.trim()}
                  size="lg"
                >
                  {isSearching ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Search className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search Result */}
            {currentResult && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">
                      {currentResult.word}
                    </CardTitle>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge variant="outline">
                        {currentResult.language === 'bn' ? 'বাংলা' : 'English'}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Volume2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Star className="h-4 w-4 mr-1" />
                    {language === 'bn' ? 'সেভ করুন' : 'Save'}
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <div 
                      className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap"
                      dangerouslySetInnerHTML={{ __html: currentResult.definition }}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* No Result State */}
            {!currentResult && !isSearching && (
              <Card>
                <CardContent className="text-center py-12">
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {language === 'bn' ? 'শব্দ খুঁজুন' : 'Search for Words'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === 'bn' 
                      ? 'উপরের সার্চ বক্সে যেকোনো বাংলা বা ইংরেজি শব্দ লিখুন'
                      : 'Enter any Bengali or English word in the search box above'
                    }
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Words */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>
                    {language === 'bn' ? 'জনপ্রিয় শব্দ' : 'Popular Words'}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {language === 'bn' ? 'বাংলা শব্দ' : 'Bengali Words'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {popularWords.bn.map((word) => (
                        <Badge
                          key={word}
                          variant="secondary"
                          className="cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900"
                          onClick={() => searchPopularWord(word)}
                        >
                          {word}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {language === 'bn' ? 'ইংরেজি শব্দ' : 'English Words'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {popularWords.en.map((word) => (
                        <Badge
                          key={word}
                          variant="secondary"
                          className="cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900"
                          onClick={() => searchPopularWord(word)}
                        >
                          {word}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Search History */}
            {searchHistory.length > 0 && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>
                      {language === 'bn' ? 'সার্চ ইতিহাস' : 'Search History'}
                    </span>
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={clearHistory}>
                    {language === 'bn' ? 'মুছুন' : 'Clear'}
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {searchHistory.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg cursor-pointer"
                        onClick={() => {
                          setSearchWord(item.word);
                          setSearchLanguage(item.language);
                          setCurrentResult(item);
                        }}
                      >
                        <div>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {item.word}
                          </span>
                          <Badge variant="outline" className="ml-2 text-xs">
                            {item.language === 'bn' ? 'বাং' : 'EN'}
                          </Badge>
                        </div>
                        <span className="text-xs text-gray-500">
                          {item.timestamp.toLocaleTimeString(language === 'bn' ? 'bn-BD' : 'en-US', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>
                  {language === 'bn' ? 'বৈশিষ্ট্যসমূহ' : 'Features'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start space-x-2">
                  <Languages className="h-4 w-4 mt-0.5 text-blue-500" />
                  <p>
                    {language === 'bn' 
                      ? 'বাংলা ও ইংরেজি উভয় ভাষায় সাপোর্ট'
                      : 'Support for both Bengali and English'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <BookOpen className="h-4 w-4 mt-0.5 text-blue-500" />
                  <p>
                    {language === 'bn' 
                      ? 'বিস্তারিত শব্দের অর্থ ও ব্যাখ্যা'
                      : 'Detailed word meanings and explanations'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <Clock className="h-4 w-4 mt-0.5 text-blue-500" />
                  <p>
                    {language === 'bn' 
                      ? 'সার্চ ইতিহাস সংরক্ষণ'
                      : 'Search history preservation'
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
