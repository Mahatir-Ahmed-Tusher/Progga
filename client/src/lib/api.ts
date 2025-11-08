import { apiRequest } from "./queryClient";

export interface ChatResponse {
  response: string;
}

export interface MCQResponse {
  questions: Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
  }>;
  topic?: string;
}

export interface AnalysisResponse {
  analysis: string;
}

export interface DictionaryResponse {
  definition: string;
}

export interface CalculatorResponse {
  result: string;
}

export const api = {
  // Chat endpoints
  async sendChatMessage(message: string, sessionId?: string, context?: string): Promise<ChatResponse> {
    const response = await apiRequest('POST', '/api/ai/chat', {
      message,
      sessionId,
      context
    });
    return response.json();
  },

  async analyzeImage(imageFile: File): Promise<AnalysisResponse> {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch('/api/ai/analyze-image', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  async generateMCQ(content?: string, imageFile?: File, sessionId?: string): Promise<MCQResponse> {
    const formData = new FormData();
    
    if (content) {
      formData.append('content', content);
    }
    
    if (imageFile) {
      formData.append('image', imageFile);
    }
    
    if (sessionId) {
      formData.append('sessionId', sessionId);
    }

    const response = await fetch('/api/ai/generate-mcq', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  async lookupWord(word: string, language: 'bn' | 'en'): Promise<DictionaryResponse> {
    const response = await apiRequest('POST', '/api/dictionary', {
      word,
      language
    });
    return response.json();
  },

  async calculate(expression: string, explanation = false): Promise<CalculatorResponse> {
    const response = await apiRequest('POST', '/api/calculator', {
      expression,
      explanation
    });
    return response.json();
  },

  // Session management
  async createChatSession(type: string, classLevel?: string, subject?: string, userId?: number) {
    const sessionId = crypto.randomUUID();
    const response = await apiRequest('POST', '/api/chat/session', {
      sessionId,
      type,
      classLevel,
      subject,
      userId
    });
    return response.json();
  },

  async getChatMessages(sessionId: number) {
    const response = await apiRequest('GET', `/api/chat/messages/${sessionId}`);
    return response.json();
  },

  async saveChatMessage(sessionId: number, role: 'user' | 'assistant', content: string, metadata?: any) {
    const response = await apiRequest('POST', '/api/chat/message', {
      sessionId,
      role,
      content,
      metadata
    });
    return response.json();
  }
};
