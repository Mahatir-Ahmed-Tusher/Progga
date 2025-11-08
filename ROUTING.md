# Progga AI - Complete Routing Guide

## All Available Routes (Centralized in app/app.tsx)

### Main Features
- `/` - Home page
- `/chat` - Chat with Progga AI
- `/learn` - Class selection page
- `/mcq` - MCQ Generator
- `/dictionary` - Smart Dictionary
- `/books` - Books & Resources
- `/quiz` - Interactive Quiz
- `/calculator` - Scientific Calculator

### Class Selection
- `/learn/class-6` - Class 6 subjects
- `/learn/class-7` - Class 7 subjects
- `/learn/class-8` - Class 8 subjects
- `/learn/class-9` - Class 9 subjects
- `/learn/class-10` - Class 10 subjects

### Class 7 - Science (বিজ্ঞান)
- `/seventh/science` - Chapter list
- `/seventh/science/chapterlist` - Alternative chapter list route
- `/seventh/science/chapter1` - নিম্নশ্রেণির জীব (Lower class organisms)
- `/seventh/science/chapter2` - উদ্ভিদ ও প্রাণীর কোষীয় সংগঠন (Plant & animal cell organization)

### Class 7 - Mathematics (গণিত)
- `/seventh/math` - Chapter list
- `/seventh/math/chapter1` - মূলদ ও অমূলদ সংখ্যা (Rational & irrational numbers)

### Class 7 - Bangla First Paper (বাংলা ১ম পত্র)
- `/seventh/bangla1/bangla_first` - Chapter list
- `/seventh/bangla1/chapter1` - কাবুলিওয়ালা (Kabuliwala)

### Class 7 - Bangladesh & Global Studies (বাংলাদেশ ও বিশ্বপরিচয়)
- `/seventh/shomaj` - Chapter list

### Class 9/10 - Physics (পদার্থবিজ্ঞান)
- `/secondary/physics` - Chapter list
- `/secondary/physics/chapter2` - গতি (Motion)
- `/physics/chapter2` - Alternative route to Motion chapter
- `/learn/class-9/physics` - Alternative route to physics chapters

## Global UI Features

### Centralized Theme & Font
- **Font**: Tiro Bangla (applied globally via app/layout.tsx and app/globals.css)
- **Theme**: Light/Dark mode support across all pages
- **Navigation**: Consistent header with logo, menu, language toggle, theme toggle
- **Footer**: Consistent footer with links and information

### Design System
- All pages use standardized:
  - Gray backgrounds (light/dark mode)
  - Card components from Radix UI
  - Consistent button styling
  - Badge components for metadata
  - Proper spacing and typography

## How to Add New Routes

### 1. Create your page component in `client/src/pages/`
### 2. Add the import to `app/app.tsx`
### 3. Add the route to the `routeMap` object

Example:
```typescript
// In app/app.tsx
import MyNewPage from "@/pages/MyNewPage";

const routeMap: Record<string, React.ReactNode> = {
  // ... existing routes
  "/my-new-page": <MyNewPage />,
};
```

## Adding Subjects/Chapters

Edit `shared/subjectsConfig.ts` to add new subjects or chapters. This central config makes it easy to maintain and expand the curriculum.

## Notes
- All routing is managed in ONE file: `app/app.tsx`
- All pages inherit global font (Tiro Bangla) and theme
- No need to add font imports in individual pages
- Dark mode classes are applied automatically via Tailwind

