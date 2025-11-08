# Progg-ai

 
*An AI-powered educational platform that turns static Bangladeshi textbooks into dynamic, conversational learning tools.*

---

## 🚀 Project Overview

**Progg-ai** is an innovative AI-driven educational platform designed specifically for students in Bangladesh (grades 6–12). It enables **real-time, textbook-grounded conversations** using **Retrieval-Augmented Generation (RAG)** with a **120-billion-parameter open-source LLM** fine-tuned on **NCTB (National Curriculum and Textbook Board)** materials in **Bangla**.

> **"Ask your textbook anything — in Bangla, get answers in Bangla."**

With over **12 million students** relying on outdated, one-way textbooks and **20% secondary dropout rates**, Progg-ai bridges the gap in **personalized, accessible learning** — especially in rural and low-income areas.

---

## 🌟 Core Features

| Feature | Description |
|-------|-----------|
| **Textbook Chat** | Ask questions directly from NCTB textbooks — get **95%+ accurate**, context-aware answers. |
| **Smart Summaries** | Auto-generated chapter summaries in Bangla & English. |
| **Adaptive Quizzes** | Personalized MCQs with instant feedback and difficulty scaling. |
| **Word & Concept Explainer** | Tap any word for definitions, examples, and pronunciation. |
| **Learning Roadmap** | AI-curated study paths based on syllabus and performance. |
| **Multilingual Support** | Seamless Bangla ↔ English switching with cultural nuance. |
| **Offline Mode (Coming Soon)** | Cache recent interactions for low-connectivity zones. |

---

## 🎯 Why Progg-ai?

### The Problem
- **70% average exam pass rate** in SSC/HSC.
- **20% dropout rate** in secondary education.
- **Rural students lack tutors** — only 15% access quality guidance.
- Generic AI tools **hallucinate** or lack **cultural & curriculum relevance**.

### The Solution
| Metric | Progg-ai Advantage |
|-------|-------------------|
| **Accuracy** | 95%+ via RAG + textbook grounding |
| **Latency** | <2 seconds on 3G |
| **Language** | Native Bangla NLP + idioms |
| **Cost** | Freemium — free core, premium personalization |
| **Accessibility** | Works on 70%+ smartphone households |

> **80% fewer errors** than video-based or generic AI platforms.

---

## 👥 Team Khoj

We are **Team Khoj** — a multidisciplinary team of developers, researchers, and designers committed to democratizing education in Bangladesh.

| Name | Role | Institution | Portfolio | Proof |
|------|------|-------------|---------|-------|
| **Mahatir Ahmed Tusher** | Backend Developer – Core Architecture | Vellore Institute of Technology<br>B.Tech CSE (ongoing) | [GitHub](https://github.com/Mahatir-Ahmed-Tusher) | [Student ID](https://drive.google.com/file/d/1TilRjpDbHUSUWCkn3EwMxXJm4URQVpdB/view?usp=sharing) |
| **Mosammat Halima Khanam** | Researcher – Data, Accuracy, Coordination | Shahjalal University of Science and Technology<br>B.Sc Biochemistry (completed) | [Website](https://shoshisworld.vercel.app/) | [Certificate](https://drive.google.com/file/d/1FgcPmmHOPi64Fo0n2jHucoAz_PkZkkLG/view?usp=sharing) |
| **Sagar Chandra Dey** | Frontend, UI/UX, Database Engineer | University of Frontier Technology, Bangladesh<br>B.Tech CSE | [GitHub](https://github.com/z-scd) | [Student ID](https://drive.google.com/file/d/1B-37KqVIdR5HBaZmsihsIcoBNNtcknZT/view?usp=sharing) |
| **Joyant Sheikhar Gupta Joy** | Full-stack Integration | Atish Dipankar University of Science and Technology<br>B.Sc CSE | [Website](https://joyant.me/) | [Student ID](https://drive.google.com/file/d/1PLKu19dV2OWR5CUXxhrHUPGqVgCHZVKT/view?usp=sharing) |

---

## ⚡ Technology Stack

```mermaid
graph TD
    A[Frontend] --> B[Next.js]
    C[Backend] --> D[Python + FastAPI]
    E[AI Engine] --> F[120B LLM + LoRA Fine-tuning]
    G[Vector DB] --> H[Pinecone]
    I[Auth] --> J[Clerk]
    K[Data] --> L[Convex]
    M[Deployment] --> N[AWS / GCP]
