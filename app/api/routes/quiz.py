from fastapi import APIRouter
from fastapi import Depends
from sqlalchemy.orm import Session

from app.core.api_response import APIResponse
from app.core.security import get_current_user

from app.database.database import get_db
from app.database.crud import get_user_by_email

from app.memory.memory_store import memory_store

from app.models.quiz import QuizRequest
from app.models.quiz_submit import QuizSubmitRequest

from app.services.quiz_service import QuizService
from app.services.quiz_session_service import QuizSessionService


router = APIRouter(
    tags=["Quiz"],
)

quiz_service = QuizService()
quiz_session_service = QuizSessionService()


@router.post("/quiz")
def generate_quiz(
    request: QuizRequest,
    payload=Depends(get_current_user),
    db: Session = Depends(get_db),
):

    user = get_user_by_email(
        db,
        payload["sub"],
    )

    if user is None:

        return APIResponse.error(
            message="User not found.",
            status_code=404,
        )

    quiz = quiz_service.generate_quiz(request)

    session = quiz_session_service.create_session(
        db=db,
        user_id=user.id,
        quiz_data=quiz.model_dump(),
    )

    return APIResponse.success(
        message="Quiz generated successfully.",
        data={
            "quiz_session_id": session.id,
            "quiz": quiz,
        },
    )


@router.post("/quiz/submit")
def submit_quiz(
    request: QuizSubmitRequest,
    db: Session = Depends(get_db),
):

    result = quiz_session_service.evaluate_session(

        db=db,

        session_id=request.quiz_session_id,

        answers=request.answers,

    )

    if result is None:

        return APIResponse.error(
            message="Quiz session not found.",
            status_code=404,
        )

    return APIResponse.success(
        message="Quiz submitted successfully.",
        data=result,
    )


@router.get("/memory")
def show_memory():

    return APIResponse.success(
        message="Conversation memory fetched successfully.",
        data=memory_store.memory,
    )