# AI Workflow Documentation

---

# Overview

PrepMind AI is built around an AI-driven architecture that intelligently routes user requests to specialized AI agents. Instead of using a single prompt for every request, the application first determines the user's intent and then delegates the task to the most appropriate AI agent.

This modular approach makes the system scalable, maintainable, and easier to extend with new AI capabilities.

---

# AI Architecture

```
                        User
                          │
                          ▼
                POST /chat Request
                          │
                          ▼
                 Router Agent (LangGraph)
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
 Planner Agent      Quiz Agent        RAG Agent
        │                 │                 │
        └──────────────┬──┴─────────────────┘
                       ▼
                 OpenAI GPT Model
                       │
                       ▼
              Structured JSON Response
                       │
                       ▼
             Response Validation
                       │
                       ▼
               FastAPI Response
                       │
                       ▼
                 React Frontend
```

---

# Router Agent

## Responsibility

The Router Agent is responsible for determining the user's intent.

Instead of asking every AI model to solve every problem, the Router Agent first classifies the request.

Examples:

| User Prompt | Routed To |
|-------------|-----------|
| Create UPSC study plan | Planner Agent |
| Generate history quiz | Quiz Agent |
| Who was Ashoka? | RAG Agent |

---

# Planner Agent

## Responsibility

Creates personalized study plans.

Inputs:

- Exam Name
- Current Preparation Level
- Available Study Hours
- Time Remaining

Outputs:

- Daily Schedule
- Weekly Goals
- Revision Strategy
- Practice Tests
- Study Tips

---

# Quiz Agent

## Responsibility

Generates AI-powered quizzes.

Current Features

- Multiple Choice Questions
- Four Options
- Correct Answer
- Explanation
- Structured JSON Output

Future Features

- Difficulty Levels
- Topic-wise Quizzes
- Adaptive Testing
- Negative Marking
- Timed Mock Tests

---

# RAG Agent

## Responsibility

Answers questions using uploaded PDF documents.

Workflow

```
Upload PDF

↓

Extract Text

↓

Split into Chunks

↓

Generate Embeddings

↓

Store in ChromaDB

↓

User Question

↓

Similarity Search

↓

Relevant Context

↓

OpenAI

↓

Answer
```

---

# OpenAI Integration

The application uses OpenAI models to generate intelligent responses.

The model is responsible for:

- Study Plans
- Quiz Generation
- RAG Answers
- Structured JSON Responses

---

# LangGraph Workflow

LangGraph orchestrates the AI pipeline.

Workflow

```
Start

↓

Router Node

↓

Planner

OR

Quiz

OR

RAG

↓

Response Node

↓

End
```

Advantages

- Modular
- Extensible
- Easy to Debug
- Supports Complex AI Pipelines

---

# Prompt Engineering

Each AI agent has its own prompt.

Current Prompt Files

```
planner_prompt.py

quiz_prompt.py

router_prompt.py

rag_prompt.py
```

Every prompt defines:

- AI Role
- Output Format
- Rules
- JSON Schema
- Constraints

---

# JSON Validation

AI responses are validated using Pydantic models before being returned to the frontend.

Example

```
AI Response

↓

Pydantic Validation

↓

Valid JSON

↓

Frontend
```

This prevents malformed responses from breaking the application.

---

# Frontend Rendering

The frontend automatically renders different response types.

```
AI Response

↓

ResponseRenderer

↓

StudyPlanCard

OR

QuizCard

OR

RAGCard
```

Each response type has its own dedicated UI component.

---

# Conversation Flow

```
User

↓

React Chat Interface

↓

FastAPI

↓

Router Agent

↓

Planner / Quiz / RAG

↓

OpenAI

↓

Structured Response

↓

Frontend Renderer

↓

Conversation Saved

↓

History API
```

---

# Current AI Features

Implemented

- Intent Routing
- Study Plan Generation
- Quiz Generation
- Retrieval-Augmented Generation
- Structured JSON Responses

---

# Planned AI Features

- Flashcard Generator
- AI Notes Generator
- Daily Revision Planner
- Mock Test Generator
- AI Performance Analysis
- Weak Topic Detection
- Personalized Recommendations
- Voice-based AI Tutor
- Multilingual Support

---

# Design Principles

The AI layer follows these principles:

- Modular AI Agents
- Structured Prompt Engineering
- Validated JSON Responses
- Separation of Responsibilities
- Extensible Workflow
- Scalable Architecture

---

# Future Vision

The AI system is designed to evolve into a complete intelligent learning assistant capable of planning, teaching, testing, analyzing, and guiding students throughout their competitive exam preparation journey.