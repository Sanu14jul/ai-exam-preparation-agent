# ChatGPT Context

> This document provides persistent project context for future ChatGPT conversations. It summarizes the current architecture, completed work, coding standards, development workflow, and next priorities.

---

# Project Name

PrepMind AI

---

# Project Goal

PrepMind AI is an AI-powered learning platform for competitive examination preparation.

The goal is to provide students with a single platform where they can:

- Generate Study Plans
- Generate Quizzes
- Upload PDFs
- Ask AI Questions
- Track Progress
- Review Learning
- Prepare efficiently for exams

Target Exams

- UPSC
- SSC
- Railway
- Banking
- BPSC
- CAT
- GATE
- Other Competitive Exams

---

# Current Technology Stack

Backend

- Python
- FastAPI
- PostgreSQL
- SQLAlchemy
- JWT Authentication
- LangGraph
- LangChain
- ChromaDB
- OpenAI API

Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios

Development

- Git
- GitHub
- VS Code

---

# Backend Status

Completed

- Authentication
- JWT
- User Registration
- Login
- Protected APIs
- Planner Agent
- Quiz Agent
- Router Agent
- RAG Agent
- Upload API
- History API
- OpenAI Integration
- JSON Validation

---

# Frontend Status

Completed

Authentication

- Login
- Register

Dashboard

- Sidebar
- Navbar

AI Chat

- Chat Interface
- Typing Indicator
- Markdown Rendering
- Copy Button
- AI Response Rendering

Quiz

- Interactive Questions
- Previous / Next
- Progress Bar
- Score Calculation
- Restart Quiz
- Review Screen (basic)

---

# Current Sprint

Sprint 8.5

Current Focus

- Improve Quiz Review
- Explanation Display
- Dashboard Analytics
- Upload UI
- History Timeline

---

# Completed Features

Authentication

- Register
- Login
- JWT

AI

- Study Planner
- Quiz Generator
- RAG

Dashboard

- Sidebar
- Navbar

Chat

- Response Renderer
- Study Plan Card
- Quiz Card
- RAG Card

Quiz

- Interactive Navigation
- Result Screen
- Review Mode

---

# Pending Features

High Priority

- Upload UI
- History Page
- Dashboard Analytics
- JWT-based History
- Planner Page

Medium Priority

- Profile Page
- Flashcards
- Notes Generator
- Study Calendar

Future

- Mobile App
- Voice AI
- Leaderboard
- Email Notifications

---

# Folder Structure

```
ai-exam-preparation-agent/

app/

frontend/

docs/

uploads/

tests/
```

---

# Coding Standards

Backend

- Modular Services
- Pydantic Validation
- Structured JSON
- Type Hints
- Async APIs

Frontend

- Functional Components
- Tailwind CSS
- Component Isolation
- Reusable Components
- Service Layer

---

# Git Workflow

Development Branch

```
adding_frontend
```

Workflow

Feature

↓

Test

↓

Commit

↓

Push

↓

Merge into Main

---

# Development Philosophy

Never rewrite working code.

Always build incrementally.

Test every feature before moving to the next.

Prefer reusable components.

Document major architectural decisions.

Keep backend and frontend loosely coupled.

---

# Collaboration Style

This project has been developed through sprint-based collaboration.

Preferred workflow:

1. Build one feature.
2. Test it.
3. Fix issues.
4. Commit to Git.
5. Continue.

Avoid making large untested changes.

---

# Known Improvements

Backend

- Remove user_id from chat request.
- Use JWT identity everywhere.
- Save complete conversations.
- Improve quiz explanations.

Frontend

- Better Quiz Review
- Better Dashboard
- Responsive Design
- Upload Progress
- History Timeline

---

# Immediate Next Tasks

1. Complete Quiz Review
2. Build Upload Module
3. Build History Module
4. Dashboard Analytics
5. Planner Page
6. Profile Page
7. Deployment

---

# Long-Term Vision

PrepMind AI should become a production-ready AI-powered education platform.

The codebase should remain modular, documented, scalable, and suitable for deployment on cloud infrastructure.

---

# Important Notes for Future ChatGPT Conversations

When continuing this project:

- Assume the project already contains authentication, AI chat, planner, quiz, RAG, upload API, history API, dashboard, and documentation.
- Do not rebuild existing functionality.
- Continue from the latest completed sprint.
- Follow the existing folder structure and coding style.
- Prefer improving existing components over replacing them.
- Maintain backward compatibility whenever possible.

The primary objective is to evolve PrepMind AI into a deployable, production-quality AI learning platform.