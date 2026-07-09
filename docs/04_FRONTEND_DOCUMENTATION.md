# Frontend Documentation

---

# Overview

The PrepMind AI frontend is built using **React**, **Vite**, and **Tailwind CSS**.

The frontend provides a responsive, modern, and modular user interface for interacting with the AI-powered backend.

The application follows a component-based architecture where every UI element is reusable and easy to maintain.

---

# Technology Stack

## Core

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios

---

# Frontend Folder Structure

```
frontend/

src/

├── api/
├── assets/
├── components/
│
│   ├── chat/
│   ├── common/
│   ├── quiz/
│   └── response/
│
├── context/
├── layouts/
├── pages/
│
│   ├── auth/
│   ├── chat/
│   ├── dashboard/
│   ├── planner/
│   ├── quiz/
│   ├── upload/
│   ├── history/
│   └── profile/
│
├── routes/
├── services/
├── App.jsx
└── main.jsx
```

---

# Folder Responsibilities

## api/

Contains Axios configuration.

Responsibilities:

- Base URL
- JWT Token
- Request Interceptors
- Response Interceptors

---

## assets/

Stores:

- Images
- Logos
- Icons
- Static Files

---

## components/

Reusable UI components.

Structure

```
components/

chat/

common/

quiz/

response/
```

---

# Common Components

Reusable UI elements.

Examples

```
Button

Input

Card

Navbar

Sidebar

Loader
```

These components are used across multiple pages.

---

# Chat Components

Responsible for AI chat.

Current Components

```
ChatInput

ChatMessage

TypingIndicator
```

Responsibilities

- Send user message
- Display AI response
- Show loading animation

---

# Quiz Components

Current Components

```
QuizPlayer

QuizResult

QuizReview

ProgressBar
```

Responsibilities

- Display quiz
- Navigate questions
- Calculate score
- Review answers

---

# Response Components

Responsible for rendering AI responses.

Current Components

```
ResponseRenderer

StudyPlanCard

QuizCard

RAGCard
```

These components automatically render different AI outputs.

---

# Layouts

Current Layouts

```
AuthLayout

DashboardLayout
```

Responsibilities

AuthLayout

- Login
- Register

DashboardLayout

- Sidebar
- Navbar
- Protected Pages

---

# Pages

Current Pages

```
Login

Register

Dashboard

Chat

Planner

Quiz

Upload

History

Profile
```

Current Status

Login ✅

Register ✅

Dashboard ✅

Chat ✅

Planner (In Progress)

Quiz ✅

Upload (Pending)

History (Pending)

Profile (Pending)

---

# Routing

React Router is used.

Example

```
/

↓

Login

↓

Dashboard

↓

Chat

↓

Planner

↓

Quiz

↓

Upload

↓

History

↓

Profile
```

Protected routes require authentication.

---

# Authentication Flow

```
Login

↓

POST /auth/login

↓

JWT Token

↓

Local Storage

↓

Axios

↓

Protected Routes
```

---

# AI Chat Flow

```
User

↓

ChatInput

↓

chatService

↓

Axios

↓

POST /chat

↓

FastAPI

↓

ResponseRenderer

↓

StudyPlan

Quiz

RAG
```

---

# Quiz Flow

```
Generate Quiz

↓

QuizPlayer

↓

Answer Questions

↓

Submit

↓

QuizResult

↓

QuizReview
```

---

# State Management

Current state uses React Hooks.

Examples

```
useState

useEffect

useRef
```

Future improvements may include

- Context API
- Zustand
- Redux Toolkit

---

# Service Layer

Current services

```
authService

chatService
```

Responsibilities

- API communication
- Authentication
- AI Requests

Future services

```
plannerService

quizService

historyService

uploadService
```

---

# UI Design Principles

The frontend follows:

- Dark Theme
- Modern Design
- Responsive Layout
- Reusable Components
- Component Isolation
- Consistent Spacing
- Accessibility
- Clean Typography

---

# Current Completed Features

Authentication

- Login
- Register

Dashboard

- Sidebar
- Navbar

AI Chat

- Chat Interface
- AI Responses
- Study Plan Renderer
- Quiz Renderer
- RAG Renderer

Quiz

- Question Navigation
- Progress Tracking
- Score Calculation
- Review Mode

---

# Future Frontend Features

- Dashboard Analytics
- Drag & Drop PDF Upload
- History Timeline
- User Profile
- Study Calendar
- Notes Generator
- Flashcards
- Leaderboard
- Mobile Responsive Improvements
- Dark / Light Theme Toggle

---

# Development Guidelines

Frontend development follows these principles:

- Build reusable components.
- Keep components small and focused.
- Separate UI from business logic.
- Use service files for API communication.
- Maintain consistent naming conventions.
- Prefer composition over duplication.
- Test each feature before committing.