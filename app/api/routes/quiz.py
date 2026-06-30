from fastapi import APIRouter

from app.memory.memory_store import memory_store
from app.models.quiz import QuizRequest
from app.services.quiz_service import QuizService

router = APIRouter()

quiz_service = QuizService()


@router.post("/quiz")
def generate_quiz(request: QuizRequest):

    quiz = quiz_service.generate_quiz(request)

    return {
        "message": "Quiz generated successfully",
        "quiz": quiz,
    }


@router.get("/memory")
def show_memory():

    return memory_store.memory