from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.exception_handler import register_exception_handlers
from app.core.logging_middleware import LoggingMiddleware

from app.database.database import Base, engine

# ==========================================================
# Database Models
# ==========================================================
from app.database.models import (
    User,
    Conversation,
)

from app.database.student_profile_model import (
    StudentProfile,
)

# ==========================================================
# API Routes
# ==========================================================
from app.api.routes.auth import (
    router as auth_router,
)

from app.api.routes.me import (
    router as me_router,
)

from app.api.routes.upload import (
    router as upload_router,
)

from app.api.routes.history import (
    router as history_router,
)

from app.api.routes.student_profile import (
    router as student_profile_router,
)

from app.api.routes.agent import (
    router as agent_router,
)

# from app.api.routes.study_session import (
#     router as study_session_router,
# )

from app.api.routes.recommendation import (
    router as recommendation_router,
)

from app.api.routes.ai import (
    router as ai_router,
)

from app.api.routes.tutor import (
    router as tutor_router,
)

from app.api.routes.learning import (
    router as learning_router,
)

# ==========================================================
# Create Database Tables
# ==========================================================
Base.metadata.create_all(bind=engine)

# ==========================================================
# FastAPI App
# ==========================================================
app = FastAPI(
    title="PrepMind AI",
    version="2.2.0",
    description="AI Learning Platform for School, College, Competitive Exams and Professional Skills",
)

# ==========================================================
# Middleware
# ==========================================================
app.add_middleware(LoggingMiddleware)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================================================
# Global Exception Handler
# ==========================================================
register_exception_handlers(app)

# ==========================================================
# Register API Routes
# ==========================================================
app.include_router(auth_router)

app.include_router(me_router)

app.include_router(upload_router)

app.include_router(history_router)

app.include_router(student_profile_router)

app.include_router(agent_router)

app.include_router(ai_router)

# app.include_router(study_session_router)

app.include_router(tutor_router)

app.include_router(recommendation_router)

app.include_router(learning_router)

# ==========================================================
# Root Endpoint
# ==========================================================
@app.get("/")
def root():

    return {
        "application": "PrepMind AI",
        "version": "2.2.0",
        "status": "Running",
        "message": "🚀 PrepMind AI API is running successfully."
    }


# ==========================================================
# Health Check
# ==========================================================
@app.get("/health")
def health():

    return {
        "status": "healthy",
        "database": "connected",
        "service": "PrepMind AI",
    }