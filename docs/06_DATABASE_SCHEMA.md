# Database Schema

---

# Overview

PrepMind AI uses **PostgreSQL** as its primary relational database.

The database stores user accounts, authentication information, conversation history, and will later be expanded to include quiz attempts, study plans, uploaded documents, and analytics.

The ORM used is **SQLAlchemy**.

---

# Current Database

```
PostgreSQL
```

ORM

```
SQLAlchemy
```

Migration Tool (Future)

```
Alembic
```

---

# Current Tables

## Users

Purpose

Stores registered users.

Fields

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | Primary Key |
| username | String | Username |
| email | String | Unique Email |
| password | String | Hashed Password |

---

## Conversations

Purpose

Stores AI conversation history.

Fields

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | Primary Key |
| user_id | Integer | Foreign Key |
| role | String | user / assistant |
| message | Text | Conversation |
| created_at | DateTime | Timestamp |

---

# Current Relationships

```
Users

1

↓

Many

↓

Conversations
```

One user can have many conversations.

---

# Future Database Schema

The following tables will be added.

---

## Study Plans

Stores generated study plans.

```
study_plans
```

Fields

- id
- user_id
- exam
- hours_per_day
- months_left
- plan_json
- created_at

---

## Quiz Attempts

Stores quiz results.

```
quiz_attempts
```

Fields

- id
- user_id
- score
- total_questions
- accuracy
- created_at

---

## Uploaded Documents

Stores uploaded PDFs.

```
documents
```

Fields

- id
- user_id
- filename
- filepath
- uploaded_at

---

## Dashboard Analytics

Stores learning statistics.

```
analytics
```

Fields

- id
- user_id
- total_chats
- quizzes_completed
- study_plans_generated
- uploaded_documents
- streak

---

# Future ER Diagram

```
Users
 │
 ├───────────────┐
 │               │
 │               │
 ▼               ▼

Conversations   StudyPlans

 │               │

 ▼               ▼

QuizAttempts   Documents

        │

        ▼

Analytics
```

---

# Data Flow

```
Register

↓

Users Table

↓

Login

↓

JWT

↓

AI Chat

↓

Conversation Saved

↓

History API
```

---

# Security

Current

- Password Hashing
- JWT Authentication

Future

- Refresh Tokens
- OAuth
- Email Verification
- Password Reset

---

# Database Design Principles

The schema follows:

- Normalization
- Foreign Keys
- Scalability
- Data Integrity
- Security
- Future Expansion