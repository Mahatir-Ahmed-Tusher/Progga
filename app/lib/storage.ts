export type ClassLevel = '6' | '7' | '8' | '9' | '10';
export type Subject = string;

export interface ChatSession { id: number; sessionId: string; type?: string; userId?: number; createdAt?: Date }
export interface ChatMessage { id: number; sessionId: number; role: 'user' | 'assistant'; content: string; createdAt?: Date }
export interface McqQuestion { id: number; sessionId: number; question: string; options: string[]; correctAnswer: number; explanation?: string; createdAt?: Date }
export interface UserProgress { id: number; userId: number; classLevel: ClassLevel; subject: Subject; progress: number; lastAccessed?: Date }

export interface InsertChatSession { sessionId: string; type?: string; userId?: number }
export interface InsertChatMessage { sessionId: number; role: 'user' | 'assistant'; content: string }
export interface InsertMcqQuestion { sessionId: number; question: string; options: string[]; correctAnswer: number; explanation?: string }
export interface InsertUserProgress { userId: number; classLevel: ClassLevel; subject: Subject; progress: number }

class MemStorage {
  private currentId = 1;
  private sessions = new Map<number, ChatSession>();
  private messages = new Map<number, ChatMessage>();
  private mcqs = new Map<number, McqQuestion>();
  private progress = new Map<string, UserProgress>();

  async createChatSession(insert: InsertChatSession): Promise<ChatSession> {
    const id = this.currentId++;
    const session: ChatSession = { id, createdAt: new Date(), ...insert };
    this.sessions.set(id, session);
    return session;
  }
  async getChatSessionBySessionId(sessionId: string) {
    return Array.from(this.sessions.values()).find(s => s.sessionId === sessionId);
  }
  async getChatMessages(sessionId: number) {
    return Array.from(this.messages.values()).filter(m => m.sessionId === sessionId).sort((a,b)=> (a.createdAt?.getTime()||0)-(b.createdAt?.getTime()||0));
  }
  async createChatMessage(insert: InsertChatMessage) {
    const id = this.currentId++;
    const msg: ChatMessage = { id, createdAt: new Date(), ...insert };
    this.messages.set(id, msg);
    return msg;
  }
  async createMcqQuestion(insert: InsertMcqQuestion) {
    const id = this.currentId++;
    const q: McqQuestion = { id, createdAt: new Date(), ...insert };
    this.mcqs.set(id, q);
    return q;
  }
  async getAllUserProgress(userId: number) {
    return Array.from(this.progress.values()).filter(p => p.userId === userId);
  }
  async updateUserProgress(insert: InsertUserProgress) {
    const key = `${insert.userId}-${insert.classLevel}-${insert.subject}`;
    const existing = this.progress.get(key);
    const row: UserProgress = { id: existing?.id || this.currentId++, lastAccessed: new Date(), ...insert };
    this.progress.set(key, row);
    return row;
  }
}

export const storage = new MemStorage();


