import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const chatSessions = pgTable("chat_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  sessionId: text("session_id").notNull(),
  type: text("type").notNull(), // 'general', 'subject', 'mcq'
  classLevel: text("class_level"), // '6', '7', '8', '9', '10'
  subject: text("subject"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").notNull().references(() => chatSessions.id),
  role: text("role").notNull(), // 'user', 'assistant'
  content: text("content").notNull(),
  metadata: jsonb("metadata"), // For storing additional data like image urls, etc.
  createdAt: timestamp("created_at").defaultNow(),
});

export const mcqQuestions = pgTable("mcq_questions", {
  id: serial("id").primaryKey(),
  sessionId: integer("session_id").references(() => chatSessions.id),
  question: text("question").notNull(),
  options: jsonb("options").notNull(), // Array of strings
  correctAnswer: integer("correct_answer").notNull(),
  explanation: text("explanation"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  classLevel: text("class_level").notNull(),
  subject: text("subject").notNull(),
  questionsAnswered: integer("questions_answered").default(0),
  correctAnswers: integer("correct_answers").default(0),
  lastAccessed: timestamp("last_accessed").defaultNow(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertChatSessionSchema = createInsertSchema(chatSessions).omit({
  id: true,
  createdAt: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).omit({
  id: true,
  createdAt: true,
});

export const insertMcqQuestionSchema = createInsertSchema(mcqQuestions).omit({
  id: true,
  createdAt: true,
});

export const insertUserProgressSchema = createInsertSchema(userProgress).omit({
  id: true,
  lastAccessed: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type ChatSession = typeof chatSessions.$inferSelect;
export type InsertChatSession = z.infer<typeof insertChatSessionSchema>;

export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;

export type McqQuestion = typeof mcqQuestions.$inferSelect;
export type InsertMcqQuestion = z.infer<typeof insertMcqQuestionSchema>;

export type UserProgress = typeof userProgress.$inferSelect;
export type InsertUserProgress = z.infer<typeof insertUserProgressSchema>;

// Additional types for the application
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

export const SUBJECTS_BY_CLASS: Record<ClassLevel, Subject[]> = {
  '6': ['bangla_1st', 'bangla_2nd', 'english_1st', 'english_2nd', 'science', 'math', 'bangladesh_studies'],
  '7': ['bangla_1st', 'bangla_2nd', 'english_1st', 'english_2nd', 'science', 'math', 'bangladesh_studies'],
  '8': ['bangla_1st', 'bangla_2nd', 'english_1st', 'english_2nd', 'science', 'math', 'bangladesh_studies'],
  '9': ['bangla_1st', 'bangla_2nd', 'english_1st', 'english_2nd', 'general_math', 'higher_math', 'physics', 'chemistry', 'biology', 'bangladesh_studies'],
  '10': ['bangla_1st', 'bangla_2nd', 'english_1st', 'english_2nd', 'general_math', 'higher_math', 'physics', 'chemistry', 'biology', 'bangladesh_studies'],
};

export const SUBJECT_NAMES = {
  bangla_1st: 'বাংলা ১ম পত্র',
  bangla_2nd: 'বাংলা ২য় পত্র',
  english_1st: 'ইংরেজি ১ম পত্র',
  english_2nd: 'ইংরেজি ২য় পত্র',
  science: 'বিজ্ঞান',
  math: 'গণিত',
  bangladesh_studies: 'বাংলাদেশ ও বিশ্বপরিচয়',
  general_math: 'সাধারণ গণিত',
  higher_math: 'উচ্চতর গণিত',
  physics: 'পদার্থবিজ্ঞান',
  chemistry: 'রসায়ন',
  biology: 'জীববিজ্ঞান',
};
