# Backend Documentation

---

# Overview

The backend of PrepMind AI is built using **FastAPI** and follows a modular architecture.

The backend is responsible for:

- User Authentication
- AI Request Processing
- LangGraph Orchestration
- Study Plan Generation
- Quiz Generation
- Retrieval-Augmented Generation (RAG)
- File Upload
- Conversation History
- Database Management

---

# Backend Folder Structure

```
app/

├── agents/
├── api/
│   └── routes/
├── core/
├── database/
├── models/
├── prompts/
├── schemas/
├── services/
├── utils/
└── main.py
```

---

# Folder Responsibilities

## app/agents

Contains all AI agents.

Current agents:

```
BaseAgent

PlannerAgent

QuizAgent

RAGAgent

RouterAgent
```

Responsibilities:

- Generate Study Plans
- Generate Quizzes
- Answer Questions from PDFs
- Route user requests

---

## app/api/routes

Contains all FastAPI endpoints.

Current Routes

```
auth.py

me.py

agent.py

upload.py

history.py
```

---

### auth.py

Responsible for

- Register User
- Login User
- JWT Generation

Endpoints

```
POST /auth/register

POST /auth/login
```

---

### me.py

Responsible for

```
GET /auth/me
```

Returns authenticated user information.

---

### agent.py

Responsible for AI communication.

Endpoint

```
POST /chat
```

Receives

```
{
"user_id":"1",
"message":"Generate UPSC Study Plan"
}
```

Returns structured AI response.

---

### upload.py

Responsible for

```
POST /upload
```

Features

- Upload PDF
- Store document
- Generate embeddings
- Save into ChromaDB

---

### history.py

Responsible for

```
GET /history/{user_id}
```

Returns conversation history.

---

# app/prompts

Stores all AI prompts.

Current prompts

```
planner_prompt.py

quiz_prompt.py

router_prompt.py

rag_prompt.py
```

Each prompt defines:

- AI behavior
- Output format
- JSON schema
- Instructions

---

# app/models

Contains Pydantic response models.

Example

```
QuizResponse

StudyPlanResponse

RouterResponse
```

These models validate AI output.

---

# app/database

Responsible for

- SQLAlchemy
- Database connection
- CRUD Operations
- Models

Current database stores:

```
Users

Conversations
```

Future versions will additionally store

- Quiz Attempts
- Study Plans
- Dashboard Analytics

---

# app/services

Contains business logic.

Examples

```
QuizService

PlannerService

UploadService
```

Responsibilities

- AI orchestration
- Database interaction
- Validation

---

# app/core

Contains

- Configuration
- JWT
- Authentication
- Security
- Environment Variables

---

# AI Processing Flow

```
User

↓

POST /chat

↓

Router Agent

↓

Planner

Quiz

RAG

↓

OpenAI

↓

Structured JSON

↓

Return Response
```

---

# Authentication Flow

```
Register

↓

Hash Password

↓

Store User

↓

Login

↓

Verify Password

↓

Generate JWT

↓

Frontend

↓

Protected Routes
```

---

# RAG Flow

```
Upload PDF

↓

Extract Text

↓

Chunk Text

↓

Generate Embeddings

↓

Store in ChromaDB

↓

User Question

↓

Similarity Search

↓

Context

↓

OpenAI

↓

Answer
```

---

# Current API Endpoints

Authentication

```
POST /auth/register

POST /auth/login

GET /auth/me
```

AI

```
POST /chat
```

Upload

```
POST /upload
```

History

```
GET /history/{user_id}
```

---

# Error Handling

The backend returns proper HTTP status codes.

Examples

```
200 OK

201 Created

400 Bad Request

401 Unauthorized

404 Not Found

500 Internal Server Error
```

---

# Security

Current Security Features

- Password Hashing
- JWT Authentication
- Protected Routes
- Request Validation
- Environment Variables

Future Improvements

- Refresh Tokens
- Rate Limiting
- Email Verification
- Password Reset
- OAuth Login

---

# Development Principles

The backend follows:

- Clean Architecture
- Modular Design
- Reusable Services
- Type Validation
- Structured JSON Responses
- Separation of Concerns

---

# Future Improvements

- Redis Cache
- Celery Background Tasks
- Streaming Responses
- Docker
- CI/CD
- Monitoring
- Logging
- Unit Testing
- Integration Testing