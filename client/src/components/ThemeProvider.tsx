import React, { createContext, useContext, ReactNode } from 'react';
import { useSettings } from '@/hooks/useSettings';
import type { Settings, Theme } from '@/types';

interface ThemeContextType {
  settings: Settings;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { settings, setTheme, toggleTheme } = useSettings();

  return (
    <ThemeContext.Provider value={{ settings, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
