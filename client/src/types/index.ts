export type Language = 'bn' | 'en';
export type Theme = 'light' | 'dark' | 'system';
export type FontFamily = 'hind' | 'times' | 'system';

export interface Settings {
  language: Language;
  theme: Theme;
  fontFamily: FontFamily;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  metadata?: any;
}

export interface MCQQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface MCQResponse {
  questions: MCQQuestion[];
  topic?: string;
}

export type ClassLevel = '6' | '7' | '8' | '9' | '10';
export type Subject = 
  | 'bangla_1st'
  | 'bangla_2nd' 
  | 'english_1st'
  | 'english_2nd'
  | 'science'
  | 'math'
  | 'bangladesh_studies'
  | 'general_math'
  | 'higher_math'
  | 'physics'
  | 'chemistry'
  | 'biology';
