import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/components/LanguageProvider';
import { api } from '@/lib/api';
import { 
  Calculator as CalculatorIcon, 
  Equal, 
  Loader2, 
  History,
  Parentheses,
  Pi,
  Zap,
  BookOpen
} from 'lucide-react';

interface CalculationResult {
  expression: string;
  result: string;
  timestamp: Date;
  withExplanation: boolean;
}

export default function Calculator() {
  const { language } = useLanguage();
  const { toast } = useToast();
  
  const [expression, setExpression] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentResult, setCurrentResult] = useState<CalculationResult | null>(null);
  const [history, setHistory] = useState<CalculationResult[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleCalculate = async (withExplanation: boolean = false) => {
    if (!expression.trim()) {
      toast({
        title: language === 'bn' ? "গাণিতিক রাশি প্রয়োজন" : "Expression Required",
        description: language === 'bn' 
          ? "দয়া করে একটি গাণিতিক রাশি লিখুন।"
          : "Please enter a mathematical expression.",
        variant: "destructive"
      });
      return;
    }

    setIsCalculating(true);
    try {
      const response = await api.calculate(expression.trim(), withExplanation);
      
      const result: CalculationResult = {
        expression: expression.trim(),
        result: response.result,
        timestamp: new Date(),
        withExplanation
      };
      
      setCurrentResult(result);
      
      // Add to history (keep last 10 calculations)
      setHistory(prev => [result, ...prev.slice(0, 9)]);
      
      toast({
        title: language === 'bn' ? "গণনা সম্পূর্ণ!" : "Calculation Complete!",
        description: language === 'bn' 
          ? "ফলাফল প্রস্তুত।"
          : "Result is ready.",
      });
    } catch (error) {
      console.error('Failed to calculate:', error);
      toast({
        title: language === 'bn' ? "ত্রুটি" : "Error",
        description: language === 'bn' 
          ? "গণনা করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।"
          : "Failed to calculate. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsCalculating(false);
    }
  };

  const clearCalculator = () => {
    setExpression('');
    setCurrentResult(null);
  };

  const clearHistory = () => {
    setHistory([]);
    toast({
      title: language === 'bn' ? "ইতিহাস মুছে দেওয়া হয়েছে" : "History Cleared",
      description: language === 'bn' 
        ? "গণনার ইতিহাস মুছে দেওয়া হয়েছে।"
        : "Calculation history has been cleared."
    });
  };

  const insertFunction = (func: string) => {
    setExpression(prev => prev + func);
  };

  const quickFunctions = [
    { label: 'sin(', func: 'sin(' },
    { label: 'cos(', func: 'cos(' },
    { label: 'tan(', func: 'tan(' },
    { label: 'log(', func: 'log(' },
    { label: 'ln(', func: 'ln(' },
    { label: 'sqrt(', func: 'sqrt(' },
    { label: 'π', func: 'π' },
    { label: 'e', func: 'e' },
    { label: '^', func: '^' },
    { label: '!', func: '!' },
    { label: '(', func: '(' },
    { label: ')', func: ')' }
  ];

  const examples = [
    {
      category: language === 'bn' ? 'মৌলিক গণিত' : 'Basic Math',
      expressions: ['2 + 3 * 4', '(15 + 5) / 4', '25 - 8 + 12']
    },
    {
      category: language === 'bn' ? 'বীজগণিত' : 'Algebra',
      expressions: ['x^2 + 3x - 4 where x=2', '2x + 5 = 15', 'sqrt(16) + 3^2']
    },
    {
      category: language === 'bn' ? 'ত্রিকোণমিতি' : 'Trigonometry',
      expressions: ['sin(30°)', 'cos(π/4)', 'tan(45°)']
    },
    {
      category: language === 'bn' ? 'লগারিদম' : 'Logarithm',
      expressions: ['log(100)', 'ln(e^2)', 'log₂(8)']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
              <CalculatorIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {language === 'bn' ? 'বৈজ্ঞানিক ক্যালকুলেটর' : 'Scientific Calculator'}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {language === 'bn' 
                  ? 'গণিত ও বিজ্ঞানের জটিল হিসাব-নিকাশের জন্য উন্নত ক্যালকুলেটর'
                  : 'Advanced calculator for complex mathematical and scientific calculations'
                }
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Calculator */}
          <div className="lg:col-span-2 space-y-6">
            {/* Calculator Interface */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalculatorIcon className="h-5 w-5" />
                  <span>{language === 'bn' ? 'গণনা করুন' : 'Calculate'}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Expression Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {language === 'bn' ? 'গাণিতিক রাশি' : 'Mathematical Expression'}
                    </label>
                    <Textarea
                      value={expression}
                      onChange={(e) => setExpression(e.target.value)}
                      placeholder={language === 'bn' 
                        ? "উদাহরণ: 2 + 3 * sin(30°) বা sqrt(25) + log(100)"
                        : "Example: 2 + 3 * sin(30°) or sqrt(25) + log(100)"
                      }
                      className="min-h-[100px] font-mono text-lg"
                      disabled={isCalculating}
                    />
                  </div>

                  {/* Parentheses Buttons */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {language === 'bn' ? 'দ্রুত ফাংশন' : 'Quick Functions'}
                    </label>
                    <div className="grid grid-cols-6 gap-2">
                      {quickFunctions.map((func) => (
                        <Button
                          key={func.func}
                          variant="outline"
                          size="sm"
                          onClick={() => insertFunction(func.func)}
                          disabled={isCalculating}
                          className="font-mono"
                        >
                          {func.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Calculation Buttons */}
                  <div className="flex space-x-3">
                    <Button
                      onClick={() => handleCalculate(false)}
                      disabled={isCalculating || !expression.trim()}
                      className="flex-1"
                      size="lg"
                    >
                      {isCalculating ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Equal className="mr-2 h-4 w-4" />
                      )}
                      {language === 'bn' ? 'গণনা করুন' : 'Calculate'}
                    </Button>
                    
                    <Button
                      onClick={() => handleCalculate(true)}
                      disabled={isCalculating || !expression.trim()}
                      variant="outline"
                      size="lg"
                    >
                      {isCalculating ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <BookOpen className="mr-2 h-4 w-4" />
                      )}
                      {language === 'bn' ? 'ব্যাখ্যা সহ' : 'With Explanation'}
                    </Button>
                    
                    <Button
                      onClick={clearCalculator}
                      variant="outline"
                      size="lg"
                      disabled={isCalculating}
                    >
                      {language === 'bn' ? 'মুছুন' : 'Clear'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Result Display */}
            {currentResult && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{language === 'bn' ? 'ফলাফল' : 'Result'}</CardTitle>
                  <Badge variant={currentResult.withExplanation ? 'default' : 'secondary'}>
                    {currentResult.withExplanation 
                      ? (language === 'bn' ? 'ব্যাখ্যা সহ' : 'With Explanation')
                      : (language === 'bn' ? 'সংক্ষিপ্ত' : 'Quick')
                    }
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {language === 'bn' ? 'প্রদত্ত রাশি:' : 'Expression:'}
                      </div>
                      <div className="font-mono text-lg text-gray-900 dark:text-white">
                        {currentResult.expression}
                      </div>
                    </div>
                    
                    <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                      <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                        {language === 'bn' ? 'ফলাফল:' : 'Result:'}
                      </div>
                      <div className="prose dark:prose-invert max-w-none">
                        <div 
                          className="text-blue-900 dark:text-blue-100 leading-relaxed whitespace-pre-wrap"
                          dangerouslySetInnerHTML={{ __html: currentResult.result }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Examples */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Parentheses className="h-5 w-5" />
                  <span>{language === 'bn' ? 'উদাহরণ' : 'Examples'}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="basic" className="text-xs">
                      {language === 'bn' ? 'মৌলিক' : 'Basic'}
                    </TabsTrigger>
                    <TabsTrigger value="advanced" className="text-xs">
                      {language === 'bn' ? 'উন্নত' : 'Advanced'}
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="basic" className="space-y-3">
                    {examples.slice(0, 2).map((category, index) => (
                      <div key={index}>
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {category.category}
                        </h4>
                        <div className="space-y-1">
                          {category.expressions.map((expr, exprIndex) => (
                            <Badge
                              key={exprIndex}
                              variant="outline"
                              className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900 text-xs block w-full text-left"
                              onClick={() => setExpression(expr)}
                            >
                              {expr}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="advanced" className="space-y-3">
                    {examples.slice(2).map((category, index) => (
                      <div key={index}>
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {category.category}
                        </h4>
                        <div className="space-y-1">
                          {category.expressions.map((expr, exprIndex) => (
                            <Badge
                              key={exprIndex}
                              variant="outline"
                              className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900 text-xs block w-full text-left"
                              onClick={() => setExpression(expr)}
                            >
                              {expr}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Calculation History */}
            {history.length > 0 && (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <History className="h-5 w-5" />
                    <span>{language === 'bn' ? 'ইতিহাস' : 'History'}</span>
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={clearHistory}>
                    {language === 'bn' ? 'মুছুন' : 'Clear'}
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {history.map((item, index) => (
                      <div
                        key={index}
                        className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
                        onClick={() => {
                          setExpression(item.expression);
                          setCurrentResult(item);
                        }}
                      >
                        <div className="text-sm font-mono text-gray-900 dark:text-white truncate">
                          {item.expression}
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-gray-500">
                            {item.timestamp.toLocaleTimeString(language === 'bn' ? 'bn-BD' : 'en-US', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                          {item.withExplanation && (
                            <Badge variant="outline" className="text-xs">
                              <BookOpen className="h-3 w-3 mr-1" />
                              {language === 'bn' ? 'ব্যাখ্যা' : 'Explained'}
                            </Badge>
                          )}
                        </div>
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
                  <Zap className="h-4 w-4 mt-0.5 text-blue-500" />
                  <p>
                    {language === 'bn' 
                      ? 'উন্নত গাণিতিক ফাংশন সাপোর্ট'
                      : 'Advanced mathematical function support'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <BookOpen className="h-4 w-4 mt-0.5 text-blue-500" />
                  <p>
                    {language === 'bn' 
                      ? 'ধাপে ধাপে সমাধানের ব্যাখ্যা'
                      : 'Step-by-step solution explanations'
                    }
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <History className="h-4 w-4 mt-0.5 text-blue-500" />
                  <p>
                    {language === 'bn' 
                      ? 'গণনার ইতিহাস সংরক্ষণ'
                      : 'Calculation history preservation'
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
