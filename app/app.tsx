"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import ChatWithProgga from "@/pages/ChatWithProgga";
import LearnWithProgga from "@/pages/LearnWithProgga";
import MCQGenerator from "@/pages/MCQGenerator";
import Dictionary from "@/pages/Dictionary";
import Books from "@/pages/Books";
import Quiz from "@/pages/Quiz";
import Calculator from "@/pages/Calculator";
import SubjectChat from "@/pages/SubjectChat";
import NotFound from "@/pages/not-found";
import SixthSub from "@/pages/SixthSub";
import SeventhSub from "@/pages/SeventhSub";
import EighthSub from "@/pages/EighthSub";
import NinthSub from "@/pages/NinthSub";
import TenthSub from "@/pages/TenthSub";
// Science 7th
import ScienceChapterList from "@/pages/seventh/science/ChapterList";
import ScienceChapter1 from "@/pages/seventh/science/Chapter1";
import ScienceChapter2 from "@/pages/seventh/science/Chapter2";
// Math 7th
import MathChapterList from "@/pages/seventh/math/MathChapterList";
import MathChapter1 from "@/pages/seventh/math/MathChapter1";
// Bangla 7th
import BanglaChapterList from "@/pages/seventh/bangla1/BanglaChapterList";
import Kabuliwala1Bangla1 from "@/pages/seventh/bangla1/Kabuliwala1Bangla1";
// Shomaj 7th
import ShomajChapterList from "@/pages/seventh/shomaj/ShomajChapterList";
// Physics Secondary
import PhysicsChapterList from "@/pages/secondary/physics/PhysicsChapterList";
import PhysicsChapter2 from "@/pages/secondary/physics/PhysicsChapter2";

const routeMap: Record<string, React.ReactNode> = {
  // Main Pages
  "/": <Home />,
  "/chat": <ChatWithProgga />,
  "/learn": <LearnWithProgga />,
  "/mcq": <MCQGenerator />,
  "/dictionary": <Dictionary />,
  "/books": <Books />,
  "/quiz": <Quiz />,
  "/calculator": <Calculator />,
  
  // Class Selection Pages
  "/learn/class-6": <SixthSub />,
  "/learn/class-7": <SeventhSub />,
  "/learn/class-8": <EighthSub />,
  "/learn/class-9": <NinthSub />,
  "/learn/class-10": <TenthSub />,
  
  // Class 7 - Science
  "/seventh/science": <ScienceChapterList />,
  "/seventh/science/chapter1": <ScienceChapter1 />,
  "/seventh/science/chapter2": <ScienceChapter2 />,
  "/seventh/science/chapterlist": <ScienceChapterList />,
  
  // Class 7 - Math
  "/seventh/math": <MathChapterList />,
  "/seventh/math/chapter1": <MathChapter1 />,
  
  // Class 7 - Bangla
  "/seventh/bangla1/bangla_first": <BanglaChapterList />,
  "/seventh/bangla1/chapter1": <Kabuliwala1Bangla1 />,
  
  // Class 7 - Shomaj
  "/seventh/shomaj": <ShomajChapterList />,
  
  // Class 9/10 - Physics (Secondary)
  "/secondary/physics": <PhysicsChapterList />,
  "/secondary/physics/chapter2": <PhysicsChapter2 />,
  "/physics/chapter2": <PhysicsChapter2 />,
  "/learn/class-9/physics": <PhysicsChapterList />,
};

export default function AppRouter() {
  const pathname = usePathname() || "/";
  const content = routeMap[pathname] ?? <NotFound />;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {content}
      </main>
      <Footer />
    </div>
  );
}


