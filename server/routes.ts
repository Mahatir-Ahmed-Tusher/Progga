import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { storage } from "./storage";
import { analyzeImage, generateChatResponse, generateMCQFromContent } from "./openai";
import { 
  insertChatSessionSchema, 
  insertChatMessageSchema, 
  insertMcqQuestionSchema,
  insertUserProgressSchema
} from "@shared/schema";
import { z } from "zod";
import { getChatResponse } from "./seventh/science_book/rag"; // Corrected import path

// Configure multer for image uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Chat session routes
  app.post("/api/chat/session", async (req, res) => {
    try {
      const sessionData = insertChatSessionSchema.parse(req.body);
      const session = await storage.createChatSession(sessionData);
      res.json(session);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/chat/session/:sessionId", async (req, res) => {
    try {
      const session = await storage.getChatSessionBySessionId(req.params.sessionId);
      if (!session) {
        return res.status(404).json({ error: "Session not found" });
      }
      res.json(session);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Chat message routes
  app.post("/api/chat/message", async (req, res) => {
    try {
      const messageData = insertChatMessageSchema.parse(req.body);
      const message = await storage.createChatMessage(messageData);
      res.json(message);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/chat/messages/:sessionId", async (req, res) => {
    try {
      const sessionId = parseInt(req.params.sessionId);
      const messages = await storage.getChatMessages(sessionId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // AI Chat endpoint
  app.post("/api/ai/chat", async (req, res) => {
    try {
      const { message, sessionId, context } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Get session context if sessionId provided
      let sessionContext = "";
      if (sessionId) {
        const session = await storage.getChatSessionBySessionId(sessionId);
        if (session) {
          const messages = await storage.getChatMessages(session.id);
          sessionContext = messages.map(m => `${m.role}: ${m.content}`).join('\n');
        }
      }

      const response = await generateChatResponse(message, context || sessionContext);
      res.json({ response });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Image analysis endpoint
  app.post("/api/ai/analyze-image", upload.single('image'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "Image file is required" });
      }

      const base64Image = req.file.buffer.toString('base64');
      const analysis = await analyzeImage(base64Image);
      res.json({ analysis });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // MCQ generation endpoint
  app.post("/api/ai/generate-mcq", upload.single('image'), async (req, res) => {
    try {
      const { content, sessionId } = req.body;
      let inputContent = content;

      // If image is provided, analyze it first
      if (req.file) {
        const base64Image = req.file.buffer.toString('base64');
        inputContent = await analyzeImage(base64Image);
      }

      if (!inputContent) {
        return res.status(400).json({ error: "Content or image is required" });
      }

      const mcqData = await generateMCQFromContent(inputContent);
      
      // Save MCQ questions if sessionId provided
      if (sessionId) {
        const session = await storage.getChatSessionBySessionId(sessionId);
        if (session) {
          for (const mcq of mcqData.questions) {
            await storage.createMcqQuestion({
              sessionId: session.id,
              question: mcq.question,
              options: mcq.options,
              correctAnswer: mcq.correctAnswer,
              explanation: mcq.explanation
            });
          }
        }
      }

      res.json(mcqData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // User progress routes
  app.get("/api/progress/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const progress = await storage.getAllUserProgress(userId);
      res.json(progress);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/progress", async (req, res) => {
    try {
      const progressData = insertUserProgressSchema.parse(req.body);
      const progress = await storage.updateUserProgress(progressData);
      res.json(progress);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  // Dictionary endpoint
  app.post("/api/dictionary", async (req, res) => {
    try {
      const { word, language } = req.body;
      
      if (!word) {
        return res.status(400).json({ error: "Word is required" });
      }

      const prompt = language === 'bn' 
        ? `"${word}" শব্দের অর্থ, ব্যাকরণগত তথ্য এবং ব্যবহারের উদাহরণ দিন।`
        : `Provide the meaning, grammatical information, and usage examples for the word "${word}".`;

      const response = await generateChatResponse(prompt);
      res.json({ definition: response });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Calculator endpoint (for complex mathematical expressions)
  app.post("/api/calculator", async (req, res) => {
    try {
      const { expression, explanation } = req.body;
      
      if (!expression) {
        return res.status(400).json({ error: "Expression is required" });
      }

      const prompt = explanation 
        ? `গণিতের এই সমস্যাটি সমাধান করুন এবং ধাপে ধাপে ব্যাখ্যা দিন: ${expression}`
        : `Calculate: ${expression}`;

      const response = await generateChatResponse(prompt);
      res.json({ result: response });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // New Science Chat endpoint for RAG
  app.post("/api/chat/science", async (req, res) => {
    try {
      const { chapter, message } = req.body;
      
      if (!chapter || !message) {
        return res.status(400).json({ error: "Chapter and message are required" });
      }

      const response = await getChatResponse(chapter, message);
      res.json({ response });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}