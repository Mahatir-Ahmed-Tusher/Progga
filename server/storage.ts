import { 
  users, 
  chatSessions, 
  chatMessages, 
  mcqQuestions, 
  userProgress,
  type User, 
  type InsertUser,
  type ChatSession,
  type InsertChatSession,
  type ChatMessage,
  type InsertChatMessage,
  type McqQuestion,
  type InsertMcqQuestion,
  type UserProgress,
  type InsertUserProgress,
  type ClassLevel,
  type Subject
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Chat session methods
  createChatSession(session: InsertChatSession): Promise<ChatSession>;
  getChatSession(id: number): Promise<ChatSession | undefined>;
  getChatSessionBySessionId(sessionId: string): Promise<ChatSession | undefined>;
  getUserChatSessions(userId?: number, type?: string): Promise<ChatSession[]>;

  // Chat message methods
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatMessages(sessionId: number): Promise<ChatMessage[]>;

  // MCQ methods
  createMcqQuestion(question: InsertMcqQuestion): Promise<McqQuestion>;
  getMcqQuestions(sessionId: number): Promise<McqQuestion[]>;

  // User progress methods
  getUserProgress(userId: number, classLevel: ClassLevel, subject: Subject): Promise<UserProgress | undefined>;
  updateUserProgress(progress: InsertUserProgress): Promise<UserProgress>;
  getAllUserProgress(userId: number): Promise<UserProgress[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private chatSessions: Map<number, ChatSession>;
  private chatMessages: Map<number, ChatMessage>;
  private mcqQuestions: Map<number, McqQuestion>;
  private userProgress: Map<string, UserProgress>; // key: userId-classLevel-subject
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.chatSessions = new Map();
    this.chatMessages = new Map();
    this.mcqQuestions = new Map();
    this.userProgress = new Map();
    this.currentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { 
      ...insertUser, 
      id, 
      createdAt: new Date() 
    };
    this.users.set(id, user);
    return user;
  }

  // Chat session methods
  async createChatSession(insertSession: InsertChatSession): Promise<ChatSession> {
    const id = this.currentId++;
    const session: ChatSession = {
      ...insertSession,
      id,
      createdAt: new Date()
    };
    this.chatSessions.set(id, session);
    return session;
  }

  async getChatSession(id: number): Promise<ChatSession | undefined> {
    return this.chatSessions.get(id);
  }

  async getChatSessionBySessionId(sessionId: string): Promise<ChatSession | undefined> {
    return Array.from(this.chatSessions.values()).find(
      (session) => session.sessionId === sessionId
    );
  }

  async getUserChatSessions(userId?: number, type?: string): Promise<ChatSession[]> {
    return Array.from(this.chatSessions.values()).filter(session => {
      if (userId && session.userId !== userId) return false;
      if (type && session.type !== type) return false;
      return true;
    });
  }

  // Chat message methods
  async createChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = this.currentId++;
    const message: ChatMessage = {
      ...insertMessage,
      id,
      createdAt: new Date()
    };
    this.chatMessages.set(id, message);
    return message;
  }

  async getChatMessages(sessionId: number): Promise<ChatMessage[]> {
    return Array.from(this.chatMessages.values())
      .filter(message => message.sessionId === sessionId)
      .sort((a, b) => a.createdAt!.getTime() - b.createdAt!.getTime());
  }

  // MCQ methods
  async createMcqQuestion(insertQuestion: InsertMcqQuestion): Promise<McqQuestion> {
    const id = this.currentId++;
    const question: McqQuestion = {
      ...insertQuestion,
      id,
      createdAt: new Date()
    };
    this.mcqQuestions.set(id, question);
    return question;
  }

  async getMcqQuestions(sessionId: number): Promise<McqQuestion[]> {
    return Array.from(this.mcqQuestions.values())
      .filter(question => question.sessionId === sessionId)
      .sort((a, b) => a.createdAt!.getTime() - b.createdAt!.getTime());
  }

  // User progress methods
  async getUserProgress(userId: number, classLevel: ClassLevel, subject: Subject): Promise<UserProgress | undefined> {
    const key = `${userId}-${classLevel}-${subject}`;
    return this.userProgress.get(key);
  }

  async updateUserProgress(insertProgress: InsertUserProgress): Promise<UserProgress> {
    const key = `${insertProgress.userId}-${insertProgress.classLevel}-${insertProgress.subject}`;
    const existing = this.userProgress.get(key);
    
    const progress: UserProgress = {
      id: existing?.id || this.currentId++,
      ...insertProgress,
      lastAccessed: new Date()
    };
    
    this.userProgress.set(key, progress);
    return progress;
  }

  async getAllUserProgress(userId: number): Promise<UserProgress[]> {
    return Array.from(this.userProgress.values())
      .filter(progress => progress.userId === userId);
  }
}

export const storage = new MemStorage();
