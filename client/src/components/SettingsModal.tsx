import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSettings } from '@/hooks/useSettings';
import { useLanguage } from '@/components/LanguageProvider';
import type { Language, Theme, FontFamily } from '@/types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { settings, setLanguage, setTheme, setFontFamily } = useSettings();
  const { t } = useLanguage();

  const handleLanguageChange = (value: Language) => {
    setLanguage(value);
  };

  const handleThemeChange = (value: Theme) => {
    setTheme(value);
  };

  const handleFontChange = (value: FontFamily) => {
    setFontFamily(value);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {t('settings')}
          </DialogTitle>
          <DialogDescription>
            {settings.language === 'bn' 
              ? 'আপনার পছন্দ অনুযায়ী সেটিংস পরিবর্তন করুন।'
              : 'Customize your preferences and settings.'
            }
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Language Setting */}
          <div className="space-y-2">
            <Label htmlFor="language" className="text-sm font-medium">
              {t('language')}
            </Label>
            <Select value={settings.language} onValueChange={handleLanguageChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bn">বাংলা</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Theme Setting */}
          <div className="space-y-2">
            <Label htmlFor="theme" className="text-sm font-medium">
              {t('theme')}
            </Label>
            <Select value={settings.theme} onValueChange={handleThemeChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">
                  {t('light')}
                </SelectItem>
                <SelectItem value="dark">
                  {t('dark')}
                </SelectItem>
                <SelectItem value="system">
                  {t('system')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Font Setting */}
          <div className="space-y-2">
            <Label htmlFor="font" className="text-sm font-medium">
              {t('font')}
            </Label>
            <Select value={settings.fontFamily} onValueChange={handleFontChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hind">
                  {settings.language === 'bn' ? 'হিন্দ শিলিগুড়ি' : 'Hind Siliguri'}
                </SelectItem>
                <SelectItem value="times">
                  {settings.language === 'bn' ? 'টাইমস নিউ রোমান' : 'Times New Roman'}
                </SelectItem>
                <SelectItem value="system">
                  {settings.language === 'bn' ? 'সিস্টেম ফন্ট' : 'System Font'}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={onClose}>
            {t('close')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
