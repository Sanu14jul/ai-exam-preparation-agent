from fastapi import FastAPI

from app.api.routes.study_plan import router as study_plan_router
from app.api.routes.quiz import router as quiz_router


app = FastAPI(
    title="AI Exam Preparation Agent",
    version="1.0.0",
    description="An AI-powered study assistant for competitive exam aspirants."
)

# Register Routes
app.include_router(study_plan_router)
app.include_router(quiz_router)


@app.get("/")
def home():
    return {
        "message": "Welcome to AI Exam Preparation Agent 🚀",
        "status": "Running Successfully"
    }