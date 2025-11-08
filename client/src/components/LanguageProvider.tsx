import React, { createContext, useContext, ReactNode } from 'react';
import { useSettings } from '@/hooks/useSettings';
import type { Language } from '@/types';

interface Translations {
  [key: string]: {
    bn: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { bn: 'হোম', en: 'Home' },
  features: { bn: 'ফিচার', en: 'Features' },
  about: { bn: 'আমাদের সম্পর্কে', en: 'About Us' },
  contact: { bn: 'যোগাযোগ', en: 'Contact' },
  
  // Main actions
  chatWithProgga: { bn: 'কথা বলো প্রজ্ঞার সাথে', en: 'Chat with Progga' },
  learnWithProgga: { bn: 'শেখো প্রজ্ঞার সাথে', en: 'Learn with Progga' },
  
  // Classes
  class6: { bn: 'ষষ্ঠ শ্রেণী', en: 'Class 6' },
  class7: { bn: 'সপ্তম শ্রেণী', en: 'Class 7' },
  class8: { bn: 'অষ্টম শ্রেণী', en: 'Class 8' },
  class9: { bn: 'নবম শ্রেণী', en: 'Class 9' },
  class10: { bn: 'দশম শ্রেণী', en: 'Class 10' },
  
  // Subjects
  bangla1st: { bn: 'বাংলা ১ম পত্র', en: 'Bengali 1st Paper' },
  bangla2nd: { bn: 'বাংলা ২য় পত্র', en: 'Bengali 2nd Paper' },
  english1st: { bn: 'ইংরেজি ১ম পত্র', en: 'English 1st Paper' },
  english2nd: { bn: 'ইংরেজি ২য় পত্র', en: 'English 2nd Paper' },
  science: { bn: 'বিজ্ঞান', en: 'Science' },
  math: { bn: 'গণিত', en: 'Mathematics' },
  bangladeshStudies: { bn: 'বাংলাদেশ ও বিশ্বপরিচয়', en: 'Bangladesh & Global Studies' },
  generalMath: { bn: 'সাধারণ গণিত', en: 'General Mathematics' },
  higherMath: { bn: 'উচ্চতর গণিত', en: 'Higher Mathematics' },
  physics: { bn: 'পদার্থবিজ্ঞান', en: 'Physics' },
  chemistry: { bn: 'রসায়ন', en: 'Chemistry' },
  biology: { bn: 'জীববিজ্ঞান', en: 'Biology' },
  
  // Common words
  use: { bn: 'ব্যবহার করুন', en: 'Use' },
  start: { bn: 'শুরু করুন', en: 'Start' },
  send: { bn: 'পাঠান', en: 'Send' },
  cancel: { bn: 'বাতিল', en: 'Cancel' },
  save: { bn: 'সংরক্ষণ', en: 'Save' },
  close: { bn: 'বন্ধ', en: 'Close' },
  back: { bn: 'পূর্ববর্তী', en: 'Back' },
  next: { bn: 'পরবর্তী', en: 'Next' },
  
  // Settings
  settings: { bn: 'সেটিংস', en: 'Settings' },
  language: { bn: 'ভাষা', en: 'Language' },
  theme: { bn: 'থিম', en: 'Theme' },
  font: { bn: 'ফন্ট', en: 'Font' },
  light: { bn: 'হালকা', en: 'Light' },
  dark: { bn: 'গাঢ়', en: 'Dark' },
  system: { bn: 'সিস্টেম', en: 'System' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { settings, setLanguage, toggleLanguage } = useSettings();

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[settings.language] || translation.bn || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      language: settings.language, 
      setLanguage, 
      toggleLanguage, 
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
