Progga AI (প্রজ্ঞা AI)

An AI-powered educational web app for Bangladeshi students (Class 6–10) providing class-wise learning, AI chat assistance, MCQ generation, dictionary, calculator, and RAG-backed chapter guidance.

What's inside (Next.js)
- **Next.js 14** with App Router and global layout
- **Global Theme & Font**: Tiro Bangla applied site-wide from one location
- **Centralized Routing**: Single file (`app/app.tsx`) manages all routes
- **React 18**, TailwindCSS, Radix UI, TanStack Query
- **API Routes**: Next.js `app/api/*` structure
- **AI**: Google Gemini 2.5 Flash (replaces OpenRouter)
- **RAG**: OCR + embeddings + FAISS for textbook chapters
- **Dark Mode**: Full support across all pages

Repository structure
```
root
├─ app/
│  ├─ layout.tsx              # Global HTML head (Tiro Bangla) + Providers (theme/lang/query)
│  ├─ globals.css             # Global styles incl. Tiro Bangla classes
│  ├─ page.tsx                # Entrypoint rendering AppRouter
│  ├─ app.tsx                 # Centralized client router mapping paths → pages
│  ├─ providers.tsx           # ThemeProvider, LanguageProvider, QueryClientProvider
│  ├─ lib/
│  │  ├─ gemini.ts            # Gemini helper (uses GEMINI_API_KEY)
│  │  └─ storage.ts           # In-memory storage for sessions/messages/MCQ/progress
│  └─ api/                    # Next.js API routes
│     ├─ ai/chat/route.ts
│     ├─ ai/generate-mcq/route.ts
│     ├─ dictionary/route.ts
│     ├─ calculator/route.ts
│     ├─ chat/session/route.ts
│     ├─ chat/session/[sessionId]/route.ts
│     ├─ chat/message/route.ts
│     ├─ chat/messages/[sessionId]/route.ts
│     ├─ progress/route.ts
│     └─ progress/[userId]/route.ts
├─ client/src/                # Existing React pages/components reused by AppRouter
├─ server/seventh/science_book/
│  ├─ preprocess.ts           # Build FAISS index from `science_7.pdf`
│  ├─ rag.ts                  # RAG query pipeline
│  └─ science_7.pdf
├─ shared/
│  └─ subjectsConfig.ts       # Central subjects/chapters config for easy additions
├─ next.config.js
├─ package.json               # Next.js scripts
└─ tsconfig.json
```

Global theme & Tiro Bangla font
- The font is embedded in `app/layout.tsx` head:
```
<style>
@import url('https://fonts.googleapis.com/css2?family=Tiro+Bangla:ital@0;1&display=swap');
</style>
```
- The following CSS classes are defined in `app/globals.css`:
```
.tiro-bangla-regular {
  font-family: "Tiro Bangla", serif;
  font-weight: 400;
  font-style: normal;
}

.tiro-bangla-regular-italic {
  font-family: "Tiro Bangla", serif;
  font-weight: 400;
  font-style: italic;
}
```
- The `<html>` element applies `tiro-bangla-regular`, ensuring global font usage. Theme and language providers wrap the entire app in `app/providers.tsx`.

Environment variables
Create `.env` at the project root:
```
GEMINI_API_KEY=your_key_here
NODE_ENV=development
```

Install & run
1) Clean previous install (optional but recommended when switching tooling):
   - Windows PowerShell:
     - `Remove-Item -Recurse -Force node_modules,.next,dist`
   - Or with npx rimraf: `npx rimraf node_modules .next dist`

2) Fresh install:
```
npm install
```

3) Development server:
```
npm run dev
```
- App runs via Next.js (default http://localhost:3000).

4) Production build:
```
npm run build
npm start
```

Core features
- Home, Chat With Progga (`/chat`), Learn (`/learn`), MCQ (`/mcq`), Dictionary (`/dictionary`), Books (`/books`), plus class/subject pages.
- Centralized routing in `app/app.tsx` for a simpler mental model while still leveraging Next.js App Router and layouts.
- AI features backed by Gemini 2.5 Flash.
- RAG Science chat endpoint available at `POST /api/chat/science`.

API endpoints (Next.js)
- `POST /api/ai/chat` → `{ message, sessionId?, context? }` → Gemini reply
- `POST /api/ai/generate-mcq` → content to MCQs (JSON)
- `POST /api/dictionary` → `{ word, language }` → definition with Markdown
- `POST /api/calculator` → `{ expression, explanation }` → result/explanation
- `POST /api/chat/session` | `GET /api/chat/session/[sessionId]`
- `POST /api/chat/message` | `GET /api/chat/messages/[sessionId]`
- `POST /api/progress` | `GET /api/progress/[userId]`

Subjects/Chapters configuration
- Add or edit subjects/chapters in `shared/subjectsConfig.ts` to introduce new content without changing routing code.

RAG (experimental)
1) Convert PDF pages → PNG via `pdf2image`, OCR with `tesseract.js` (eng+ben)
2) Create embeddings (xenova all-MiniLM-L6-v2) → build FAISS index
3) Query relevant chunks and compose Gemini prompt

Security
- Keep `GEMINI_API_KEY` secret and out of version control.

## Centralized Routing & UI

### Single Route File
All client-side routes are managed in **`app/app.tsx`**. To add a new route:
1. Import your component
2. Add it to the `routeMap` object with the desired path
3. Done! No need to create files in multiple places.

### Global Font & Theme
- **Font**: Tiro Bangla is loaded in `app/layout.tsx` and applied globally
- **Theme**: Managed by ThemeProvider in `app/providers.tsx`
- **Dark Mode**: Automatic support via Tailwind classes
- All styling controlled from `app/globals.css`

### Adding New Subjects/Chapters
Edit `shared/subjectsConfig.ts` to configure subjects and chapters for each class. This makes curriculum expansion simple and maintainable.

### Complete Route List
See `ROUTING.md` for a comprehensive list of all available routes.

License
MIT


