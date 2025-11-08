import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ChatWithProgga from "@/pages/ChatWithProgga";
import LearnWithProgga from "@/pages/LearnWithProgga";
import SubjectChat from "@/pages/SubjectChat";
import MCQGenerator from "@/pages/MCQGenerator";
import Dictionary from "@/pages/Dictionary";
import Calculator from "@/pages/Calculator";
import Books from "@/pages/Books";
import Quiz from "@/pages/Quiz";
import SixthSub from "@/pages/SixthSub";
import SeventhSub from "@/pages/SeventhSub";
import EighthSub from "@/pages/EighthSub";
import NinthSub from "@/pages/NinthSub";
import TenthSub from "@/pages/TenthSub";
import ChapterList from "@/pages/seventh/science/ChapterList";
import PhysicsChapterList from "@/pages/secondary/physics/PhysicsChapterList";
import BanglaChapterList from "@/pages/seventh/bangla1/BanglaChapterList";
import PhysicsChapter2 from "@/pages/secondary/physics/PhysicsChapter2";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/chat" component={ChatWithProgga} />
            <Route path="/learn" component={LearnWithProgga} />
            <Route path="/learn/class-6" component={SixthSub} />
            <Route path="/learn/class-7" component={SeventhSub} />
            <Route path="/learn/class-8" component={EighthSub} />
            <Route path="/learn/class-9" component={NinthSub} />
            <Route path="/learn/class-10" component={TenthSub} />
            <Route path="/learn/class-:classLevel/:subject" component={SubjectChat} />
            <Route path="/mcq" component={MCQGenerator} />
            <Route path="/dictionary" component={Dictionary} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/books" component={Books} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/quiz/:classLevel/:subject" component={Quiz} />
            {/* RAG for seventh class science */}
            <Route path="/seventh/science" component={ChapterList} />
            <Route path="/seventh/science/chapter1" component={lazy(() => import('@/pages/seventh/science/Chapter1'))} />
            <Route path="/seventh/science/chapter2" component={lazy(() => import('@/pages/seventh/science/Chapter2'))} />
            <Route path="/seventh/science/chapterlist" component={ChapterList} />
            {/* RAG for seventh class math */}
            <Route path="/seventh/math" component={lazy(() => import('@/pages/seventh/math/MathChapterList'))} />
            <Route path="/seventh/math/chapter1" component={lazy(() => import('@/pages/seventh/math/MathChapter1'))} />
            {/* RAG for seventh class shomaj boi */}
            <Route path="/seventh/shomaj" component={lazy(() => import('@/pages/seventh/shomaj/ShomajChapterList'))} />
            {/* RAG for secondary physics */}
            <Route path="/secondary/physics" component={PhysicsChapterList} />
            <Route path="/secondary/physics/chapter2" component={PhysicsChapter2} />
            {/* New route for /physics/chapter2 */}
            <Route path="/physics/chapter2" component={PhysicsChapter2} />
            {/* RAG for bangla first paper of class 7 */}
            <Route path="/seventh/bangla1/bangla_first" component={BanglaChapterList} />
            <Route path="/seventh/bangla1/chapter1" component={lazy(() => import('@/pages/seventh/bangla1/Kabuliwala1Bangla1'))} />
            {/* New route for class-9 physics */}
            <Route path="/learn/class-9/physics" component={PhysicsChapterList} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;