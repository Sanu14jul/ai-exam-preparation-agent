# API Reference

---

# Overview

PrepMind AI exposes REST APIs built with FastAPI.

Base URL (Development)

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

# Authentication APIs

## Register User

**Endpoint**

```
POST /auth/register
```

### Description

Creates a new user account.

### Authentication

Not Required

### Request

```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "password123"
}
```

### Success Response

```json
{
  "message": "User registered successfully"
}
```

### Possible Errors

| Status | Meaning |
|---------|----------|
|400|User already exists|
|422|Validation Error|

---

## Login User

**Endpoint**

```
POST /auth/login
```

### Authentication

Not Required

### Request

```json
{
  "email":"john@example.com",
  "password":"password123"
}
```

### Success Response

```json
{
  "access_token":"JWT_TOKEN",
  "token_type":"bearer"
}
```

### Errors

| Status | Meaning |
|---------|----------|
|401|Invalid Credentials|
|422|Validation Error|

---

## Current User

**Endpoint**

```
GET /auth/me
```

### Authentication

Required

Bearer Token

### Success Response

```json
{
    "id":1,
    "username":"john",
    "email":"john@example.com"
}
```

---

# AI Chat API

## Chat

**Endpoint**

```
POST /chat
```

### Authentication

Current Version

User ID is sent in request.

Future Version

JWT Authentication.

### Request

```json
{
    "user_id":"1",
    "message":"Create UPSC Study Plan"
}
```

---

### Possible AI Responses

Planner Response

```json
{
    "response":{
        "study_plan":{}
    }
}
```

Quiz Response

```json
{
    "response":{
        "quiz":{}
    }
}
```

RAG Response

```json
{
    "response":{
        "rag_answer":"..."
    }
}
```

---

# Upload API

## Upload PDF

**Endpoint**

```
POST /upload
```

### Authentication

Required

### Description

Uploads a PDF document for Retrieval-Augmented Generation (RAG).

### Request

Multipart Form Data

```
file = history.pdf
```

### Success Response

```json
{
    "message":"Upload Successful"
}
```

---

# History API

## Get Conversation History

**Endpoint**

```
GET /history/{user_id}
```

### Authentication

Current Version

Uses user_id.

Future Version

JWT Authentication.

### Success Response

```json
[
  {
    "id":1,
    "role":"user",
    "message":"Generate Quiz",
    "created_at":"..."
  }
]
```

---

# AI Response Types

The backend may return different structured responses depending on the Router Agent.

## Study Plan

Returns

```
study_plan
```

Contains

- Daily Schedule
- Weekly Goals
- Revision Strategy
- Practice Tests
- Tips

---

## Quiz

Returns

```
quiz
```

Contains

- Questions
- Options
- Correct Answer
- Explanation

---

## RAG

Returns

```
rag_answer
```

Contains answer generated from uploaded documents.

---

# HTTP Status Codes

|Code|Meaning|
|----|--------|
|200|Success|
|201|Created|
|400|Bad Request|
|401|Unauthorized|
|404|Not Found|
|422|Validation Error|
|500|Internal Server Error|

---

# Authentication Flow

```
Register

↓

Login

↓

Receive JWT

↓

Store Token

↓

Protected APIs
```

---

# API Versioning

Current Version

```
v1
```

Future Improvements

- JWT-based Chat
- JWT-based History
- Refresh Tokens
- API Versioning
- Rate Limiting
- Pagination
- Streaming AI Responses

---

# API Design Principles

PrepMind AI APIs follow these principles:

- RESTful Design
- JSON Responses
- Structured Validation
- Pydantic Models
- Clear Error Messages
- Consistent Naming
- Separation of Concerns

---

# Testing APIs

During development the APIs can be tested using:

- FastAPI Swagger UI
- Postman
- Insomnia
- Frontend React Application

Swagger URL

```
http://127.0.0.1:8000/docs
```