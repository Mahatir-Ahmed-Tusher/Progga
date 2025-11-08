// This file provides client-side utilities for OpenAI integration
// The actual API calls are made through the backend endpoints

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface MCQQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface QuizResult {
  questions: MCQQuestion[];
  subject: string;
  class: string;
}

// Utility functions for handling OpenAI responses on the client side
export class OpenAIHelper {
  static formatChatMessage(content: string, role: 'user' | 'assistant'): ChatMessage {
    return {
      role,
      content,
      timestamp: new Date()
    };
  }

  static validateMCQResponse(response: any): boolean {
    return (
      response &&
      Array.isArray(response.questions) &&
      response.questions.every((q: any) => 
        q.question &&
        Array.isArray(q.options) &&
        q.options.length === 4 &&
        typeof q.correctAnswer === 'number' &&
        q.correctAnswer >= 0 &&
        q.correctAnswer < 4
      )
    );
  }

  static formatQuizScore(correctAnswers: number, totalQuestions: number): {
    percentage: number;
    grade: string;
    message: string;
  } {
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    let grade = 'F';
    let message = 'আরো অনুশীলন করুন';

    if (percentage >= 90) {
      grade = 'A+';
      message = 'অসাধারণ! চমৎকার ফলাফল!';
    } else if (percentage >= 80) {
      grade = 'A';
      message = 'খুবই ভালো! উৎকৃষ্ট কাজ!';
    } else if (percentage >= 70) {
      grade = 'B';
      message = 'ভালো কাজ! আরো উন্নতি সম্ভব।';
    } else if (percentage >= 60) {
      grade = 'C';
      message = 'মোটামুটি ভালো। আরো অধ্যয়ন করুন।';
    } else if (percentage >= 50) {
      grade = 'D';
      message = 'পাস! কিন্তু আরো পড়াশোনা প্রয়োজন।';
    }

    return { percentage, grade, message };
  }

  static getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case 'easy':
        return 'text-green-600 bg-green-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'hard':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  }

  static getDifficultyLabel(difficulty: string, language: 'bn' | 'en'): string {
    const labels = {
      easy: { bn: 'সহজ', en: 'Easy' },
      medium: { bn: 'মাঝারি', en: 'Medium' },
      hard: { bn: 'কঠিন', en: 'Hard' }
    };

    return labels[difficulty as keyof typeof labels]?.[language] || difficulty;
  }

  static generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  static formatBengaliNumber(num: number): string {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(digit => bengaliDigits[parseInt(digit)] || digit).join('');
  }

  static formatTimeAgo(timestamp: Date, language: 'bn' | 'en'): string {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (language === 'bn') {
      if (diffMins < 1) return 'এখনই';
      if (diffMins < 60) return `${this.formatBengaliNumber(diffMins)} মিনিট আগে`;
      if (diffHours < 24) return `${this.formatBengaliNumber(diffHours)} ঘন্টা আগে`;
      return `${this.formatBengaliNumber(diffDays)} দিন আগে`;
    } else {
      if (diffMins < 1) return 'just now';
      if (diffMins < 60) return `${diffMins} minutes ago`;
      if (diffHours < 24) return `${diffHours} hours ago`;
      return `${diffDays} days ago`;
    }
  }
}

export default OpenAIHelper;
