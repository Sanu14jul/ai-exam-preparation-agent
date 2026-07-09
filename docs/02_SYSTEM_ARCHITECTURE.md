# System Architecture

## Overview

PrepMind AI follows a modern full-stack architecture that separates responsibilities into independent layers. The system consists of a React frontend, a FastAPI backend, AI orchestration using LangGraph, PostgreSQL for persistent storage, ChromaDB for Retrieval-Augmented Generation (RAG), and OpenAI for intelligent response generation.

---

# High-Level Architecture

```
                        +----------------------+
                        |      React UI        |
                        |  (Vite + Tailwind)   |
                        +----------+-----------+
                                   |
                                   |
                             Axios HTTP
                                   |
                                   |
                        +----------v-----------+
                        |      FastAPI API     |
                        +----------+-----------+
                                   |
                     Authentication (JWT)
                                   |
                                   |
                       +-----------v------------+
                       |     Router Agent       |
                       +-----------+------------+
                                   |
        ----------------------------------------------------
        |                     |                    |
        |                     |                    |
+-------v------+      +--------v-------+    +------v------+
| Planner Agent|      |   Quiz Agent   |    |  RAG Agent  |
+-------+------+      +--------+-------+    +------+------+
        |                      |                   |
        |                      |                   |
        ------------------------                   |
                   |                               |
                   |                               |
          +--------v---------+              +------v-------+
          |   OpenAI LLM     |              |  ChromaDB    |
          +--------+---------+              +------+-------+
                   |                               |
                   |                               |
          +--------v---------------------------------------+
          |              Generated Response                |
          +------------------------+------------------------+
                                   |
                             Save History
                                   |
                         +---------v----------+
                         |   PostgreSQL DB    |
                         +--------------------+
```

---

# Frontend Architecture

```
frontend/

src/

├── api/
├── assets/
├── components/
│
│   ├── chat/
│   ├── quiz/
│   ├── response/
│   └── common/
│
├── context/
├── layouts/
├── pages/
│
│   ├── auth/
│   ├── dashboard/
│   ├── chat/
│   ├── planner/
│   ├── quiz/
│   ├── upload/
│   ├── history/
│   └── profile/
│
├── routes/
├── services/
└── App.jsx
```

---

# Backend Architecture

```
app/

├── agents/
├── api/
│
│   └── routes/
│
├── core/
├── database/
├── models/
├── prompts/
├── schemas/
├── services/
└── utils/
```

---

# Authentication Flow

```
User

↓

Login

↓

FastAPI

↓

Verify Credentials

↓

Generate JWT

↓

Frontend stores token

↓

Protected Routes

↓

Authenticated APIs
```

---

# AI Workflow

```
User Prompt

↓

POST /chat

↓

Router Agent

↓

Determine Intent

↓

Planner

Quiz

RAG

↓

OpenAI

↓

Structured JSON

↓

Frontend Renderer
```

---

# Quiz Flow

```
User

↓

Generate Quiz

↓

Quiz Agent

↓

OpenAI

↓

Quiz JSON

↓

Frontend QuizPlayer

↓

Answer Questions

↓

Score

↓

Review Answers
```

---

# Study Plan Flow

```
User

↓

Planner Request

↓

Planner Agent

↓

OpenAI

↓

Study Plan JSON

↓

Study Plan Card
```

---

# RAG Flow

```
Upload PDF

↓

Chunk Document

↓

Generate Embeddings

↓

Store in ChromaDB

↓

User Question

↓

Similarity Search

↓

Context Retrieval

↓

OpenAI

↓

Answer
```

---

# Database Layer

Current database stores:

- Users
- Conversations
- Authentication Data

Future versions will additionally store:

- Quiz Results
- Study Plans
- Uploaded Documents
- Dashboard Analytics
- Study Progress

---

# Current Component Relationships

```
DashboardLayout

│

├── Sidebar

├── Navbar

│

└── Pages

     ├── Chat

     ├── Planner

     ├── Quiz

     ├── Upload

     ├── History

     └── Profile
```

---

# API Communication

```
React

↓

Axios

↓

FastAPI

↓

Business Logic

↓

Database / AI

↓

JSON Response

↓

React Components
```

---

# Design Principles

PrepMind AI follows these engineering principles:

- Separation of Concerns
- Modular Architecture
- Reusable Components
- Clean API Design
- Production-Ready Code
- Scalability
- Maintainability
- Security by Design

---

# Future Architecture

Future improvements include:

- Redis Caching
- Background Task Queue
- Streaming AI Responses
- WebSocket Chat
- Docker Deployment
- CI/CD Pipeline
- Cloud Storage
- Monitoring & Logging