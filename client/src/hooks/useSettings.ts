import { useState, useEffect } from 'react';
import type { Settings, Language, Theme, FontFamily } from '@/types';

const DEFAULT_SETTINGS: Settings = {
  language: 'bn',
  theme: 'light',
  fontFamily: 'hind'
};

export function useSettings() {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('progga-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...DEFAULT_SETTINGS, ...parsed });
      } catch (error) {
        console.error('Failed to parse saved settings:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Apply theme
    const root = document.documentElement;
    if (settings.theme === 'dark') {
      root.classList.add('dark');
    } else if (settings.theme === 'light') {
      root.classList.remove('dark');
    } else {
      // System theme
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery.matches) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }

    // Apply font family
    document.body.className = document.body.className.replace(/font-\w+/g, '');
    switch (settings.fontFamily) {
      case 'hind':
        document.body.classList.add('font-bengali');
        break;
      case 'times':
        document.body.classList.add('font-english');
        break;
      default:
        document.body.classList.add('font-sans');
    }

    // Save to localStorage
    localStorage.setItem('progga-settings', JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const setLanguage = (language: Language) => {
    updateSettings({ language });
  };

  const setTheme = (theme: Theme) => {
    updateSettings({ theme });
  };

  const setFontFamily = (fontFamily: FontFamily) => {
    updateSettings({ fontFamily });
  };

  const toggleTheme = () => {
    setTheme(settings.theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    setLanguage(settings.language === 'bn' ? 'en' : 'bn');
  };

  return {
    settings,
    updateSettings,
    setLanguage,
    setTheme,
    setFontFamily,
    toggleTheme,
    toggleLanguage
  };
}
