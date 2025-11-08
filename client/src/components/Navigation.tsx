import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/LanguageProvider';
import { useTheme } from '@/components/ThemeProvider';
import { SettingsModal } from '@/components/SettingsModal';
import { 
  Brain, 
  Sun, 
  Moon, 
  Settings, 
  Languages, 
  Menu, 
  X 
} from 'lucide-react';

export function Navigation() {
  const location = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();
  const { toggleTheme, settings } = useTheme();

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/chat', label: t('chatWithProgga') },
    { href: '/learn', label: t('learnWithProgga') },
  ];

  return (
    <>
      <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer">
              <img 
                src="https://i.postimg.cc/YqNZVtQc/fb0d8418-075d-4bdf-9817-67547df51039-removalai-preview.png"
                alt="Progga AI Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    প্রজ্ঞা AI
                  </h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    শিক্ষার নতুন দিগন্ত
                  </p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className={`text-sm font-medium transition-colors ${
                    location === item.href
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}>
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              {/* Language Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="hidden sm:flex items-center space-x-1"
              >
                <Languages className="h-4 w-4" />
                <span className="text-xs">
                  {language === 'bn' ? 'বাং' : 'EN'}
                </span>
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
              >
                {settings.theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              {/* Settings */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsSettingsOpen(true)}
              >
                <Settings className="h-4 w-4" />
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="outline"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <span 
                      className={`block text-sm font-medium transition-colors ${
                        location === item.href
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 w-fit"
                >
                  <Languages className="h-4 w-4" />
                  <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </>
  );
}
