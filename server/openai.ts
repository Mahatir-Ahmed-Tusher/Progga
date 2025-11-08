import * as dotenv from 'dotenv';
dotenv.config(); // Load .env file

export async function generateChatResponse(message: string, context?: string): Promise<string> {
  try {
    console.log('OPENROUTER_API_KEY:', process.env.OPENROUTER_API_KEY);

    const systemPrompt = `You are Progga AI (প্রজ্ঞা AI), an educational AI assistant specifically designed for Bangladeshi students from classes 6 to 10. You should:

1. Respond in Bengali (বাংলা) by default, but can switch to English if requested
2. Follow the Bangladesh National Curriculum and Textbook Board (NCTB) guidelines
3. Provide accurate, age-appropriate educational content
4. Be encouraging and supportive in your responses
5. When explaining concepts, use simple language and provide examples relevant to Bangladeshi context
6. For mathematical problems, show step-by-step solutions
7. For science topics, relate to everyday life examples familiar to Bangladeshi students
8. Always maintain a respectful, educational tone
9. Use Markdown formatting strictly and consistently: **text** for bold, *text* for italic, and # text for headings. Apply these to all key points, headings, and emphasized terms without fail. Every response must include at least one heading (#), one bold (**), and one italic (*).

Context: ${context || 'General educational assistance'}`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://progga-ai.com",
        "X-Title": "Progga AI - Educational Assistant",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "deepseek/deepseek-r1-0528:free",
        "messages": [
          { "role": "system", "content": systemPrompt },
          { "role": "user", "content": message }
        ],
        "max_tokens": 1500,
        "temperature": 0.7
      })
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Authentication failed: Invalid or expired OpenRouter API key");
      }
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    let content = data.choices[0].message.content || "দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না। আবার চেষ্টা করুন।";

    // Ensure proper markdown syntax if missing
    if (!content.match(/#\s/)) {
      content = `# উত্তর\n${content}`;
    }
    if (!content.includes('**')) {
      content = content.replace(/(\w+)/, '**$1**');
    }
    if (!content.includes('*')) {
      content = content.replace(/(\w+)/, '*$1*');
    }

    return content;
  } catch (error) {
    console.error('DeepSeek chat error:', error);
    throw new Error('Failed to generate chat response');
  }
}

// Other functions remain unchanged
export async function analyzeImage(base64Image: string): Promise<string> {
  try {
    return "দুঃখিত, বর্তমানে ছবি বিশ্লেষণ সুবিধা উপলব্ধ নেই। আপনি যদি কোনো সমস্যার সমাধান চান, তাহলে সমস্যাটি টাইপ করে পাঠান।";
  } catch (error) {
    console.error('Image analysis error:', error);
    throw new Error('Failed to analyze image');
  }
}

export async function generateMCQFromContent(content: string): Promise<{
  questions: Array<{
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
  }>;
  topic?: string;
}> {
  try {
    console.log('OPENROUTER_API_KEY:', process.env.OPENROUTER_API_KEY);

    const systemPrompt = `You are an educational content creator for Bangladeshi students (classes 6-10). Create multiple choice questions (MCQ) from the given content. Follow these guidelines:

1. Generate 3-5 questions based on the content
2. Each question should have 4 options (A, B, C, D)
3. Questions should be in Bengali unless the content is specifically in English
4. Make questions age-appropriate for the target grade level
5. Include explanations for correct answers
6. Follow NCTB curriculum standards
7. Ensure questions test understanding, not just memorization
8. Use Markdown formatting strictly: **text** for bold, *text* for italic, and # text for headings. Apply these to all key points, headings, and emphasized terms without fail.

Respond with JSON in this exact format:
{
  "topic": "Topic name in Bengali",
  "questions": [
    {
      "question": "Question text in Bengali",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Explanation in Bengali"
    }
  ]
}`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://progga-ai.com",
        "X-Title": "Progga AI - Educational Assistant",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "deepseek/deepseek-r1-0528:free",
        "messages": [
          { "role": "system", "content": systemPrompt },
          { "role": "user", "content": `এই বিষয়বস্তু থেকে MCQ প্রশ্ন তৈরি করুন:\n\n${content}` }
        ],
        "temperature": 0.3
      })
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Authentication failed: Invalid or expired OpenRouter API key");
      }
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    let result;

    try {
      result = JSON.parse(data.choices[0].message.content || '{}');
    } catch (parseError) {
      result = {
        topic: "সাধারণ প্রশ্ন",
        questions: [{
          question: "দুঃখিত, এই মুহূর্তে MCQ প্রশ্ন তৈরি করতে সমস্যা হচ্ছে।",
          options: ["পরে চেষ্টা করুন", "বিষয়বস্তু পরিবর্তন করুন", "সহায়তা নিন", "অন্য উপায় খুঁজুন"],
          correctAnswer: 0,
          explanation: "সিস্টেমে সাময়িক সমস্যা রয়েছে।"
        }]
      };
    }

    if (result.questions) {
      result.questions = result.questions.map((q: any, index: number) => ({
        ...q,
        id: `mcq_${Date.now()}_${index}`
      }));
    }

    return result;
  } catch (error) {
    console.error('DeepSeek MCQ generation error:', error);
    throw new Error('Failed to generate MCQ questions');
  }
}

export async function generateQuizQuestions(
  subject: string,
  classLevel: string,
  count: number = 5
): Promise<{
  questions: Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    difficulty: 'easy' | 'medium' | 'hard';
  }>;
  subject: string;
  class: string;
}> {
  try {
    console.log('OPENROUTER_API_KEY:', process.env.OPENROUTER_API_KEY);

    const systemPrompt = `You are creating quiz questions for Bangladeshi students. Create ${count} multiple choice questions for ${subject} subject, class ${classLevel}. Follow NCTB curriculum. Mix difficulty levels (easy, medium, hard).

Respond with JSON in this exact format:
{
  "subject": "${subject}",
  "class": "${classLevel}",
  "questions": [
    {
      "question": "Question in Bengali",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0,
      "explanation": "Detailed explanation in Bengali",
      "difficulty": "easy"
    }
  ]
}`;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://progga-ai.com",
        "X-Title": "Progga AI - Educational Assistant",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "model": "deepseek/deepseek-r1-0528:free",
        "messages": [
          { "role": "system", "content": systemPrompt },
          { "role": "user", "content": `${classLevel} শ্রেণীর ${subject} বিষয়ের জন্য ${count}টি কুইজ প্রশ্ন তৈরি করুন।` }
        ],
        "temperature": 0.4
      })
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error("Authentication failed: Invalid or expired OpenRouter API key");
      }
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    let result;

    try {
      result = JSON.parse(data.choices[0].message.content || '{}');
    } catch (parseError) {
      result = {
        subject: subject,
        class: classLevel,
        questions: [{
          question: "দুঃখিত, এই মুহূর্তে কুইজ প্রশ্ন তৈরি করতে সমস্যা হচ্ছে।",
          options: ["পরে চেষ্টা করুন", "বিষয় পরিবর্তন করুন", "সহায়তা নিন", "অন্য উপায় খুঁজুন"],
          correctAnswer: 0,
          explanation: "সিস্টেমে সাময়িক সমস্যা রয়েছে।",
          difficulty: "easy"
        }]
      };
    }

    if (result.questions) {
      result.questions = result.questions.map((q: any, index: number) => ({
        ...q,
        id: `quiz_${Date.now()}_${index}`
      }));
    }

    return result;
  } catch (error) {
    console.error('DeepSeek quiz generation error:', error);
    throw new Error('Failed to generate quiz questions');
  }
}