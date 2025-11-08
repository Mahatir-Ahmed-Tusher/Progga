import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const { t, language } = useLanguage();

  const quickLinks = [
    { href: '/', label: t('home') },
    { href: '/chat', label: t('chatWithProgga') },
    { href: '/learn', label: t('learnWithProgga') },
    { href: '/mcq', label: language === 'bn' ? 'MCQ জেনারেটর' : 'MCQ Generator' },
  ];

  const educationLinks = [
    { href: '/dictionary', label: language === 'bn' ? 'ডিকশনারী' : 'Dictionary' },
    { href: '/calculator', label: language === 'bn' ? 'ক্যালকুলেটর' : 'Calculator' },
    { href: '/books', label: language === 'bn' ? 'বইপত্র' : 'Books' },
    { href: '/quiz', label: language === 'bn' ? 'কুইজ' : 'Quiz' },
  ];

  const faqItems = [
    { 
      question: language === 'bn' ? 'প্রজ্ঞা AI কিভাবে কাজ করে?' : 'How does Progga AI work?',
      href: '#faq1' 
    },
    { 
      question: language === 'bn' ? 'এটি কি বিনামূল্যে?' : 'Is it free to use?',
      href: '#faq2' 
    },
    { 
      question: language === 'bn' ? 'কোন শ্রেণীর জন্য উপলব্ধ?' : 'Which classes are supported?',
      href: '#faq3' 
    },
    { 
      question: language === 'bn' ? 'ডেটা কতটা নিরাপদ?' : 'How secure is my data?',
      href: '#faq4' 
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">প্রজ্ঞা AI</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {language === 'bn' 
                ? 'বাংলাদেশের শিক্ষার্থীদের জন্য AI-চালিত শিক্ষার প্ল্যাটফর্ম। আমাদের লক্ষ্য প্রতিটি শিক্ষার্থীর কাছে গুণগত শিক্ষা পৌঁছে দেওয়া।'
                : 'AI-powered educational platform for students in Bangladesh. Our goal is to deliver quality education to every student.'
              }
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {language === 'bn' ? 'দ্রুত লিংক' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {language === 'bn' ? 'শিক্ষা সহায়তা' : 'Education Support'}
            </h4>
            <ul className="space-y-3">
              {educationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & FAQ */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {language === 'bn' ? 'যোগাযোগ ও সহায়তা' : 'Contact & Support'}
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a 
                  href="mailto:mahatirtusher@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  mahatirtusher@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+৮৮০ ১৭১২৩৪৫৬৭৮</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  {language === 'bn' ? 'ঢাকা, বাংলাদেশ' : 'Dhaka, Bangladesh'}
                </span>
              </div>
            </div>

            <div>
              <h5 className="text-sm font-semibold mb-3">
                {language === 'bn' ? 'সচরাচর জিজ্ঞাসা' : 'Frequently Asked'}
              </h5>
              <ul className="space-y-2">
                {faqItems.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      className="text-gray-400 hover:text-white transition-colors text-xs"
                    >
                      {item.question}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {language === 'bn' 
              ? '© ২০২ৄ প্রজ্ঞা AI। সকল অধিকার সংরক্ষিত।'
              : '© 2024 Progga AI. All rights reserved.'
            }
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
              {language === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
              {language === 'bn' ? 'ব্যবহারের শর্তাবলী' : 'Terms of Service'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
