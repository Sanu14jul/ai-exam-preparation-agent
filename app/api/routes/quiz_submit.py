from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db
from app.database.crud import get_user_by_email
from app.core.security import get_current_user

from app.models.quiz_submit import QuizSubmitRequest
from app.services.quiz_evaluation_service import QuizEvaluationService

router = APIRouter(
    prefix="/quiz",
    tags=["Quiz Evaluation"],
)

evaluation = QuizEvaluationService()


@router.post("/submit")
def submit_quiz(

    request: QuizSubmitRequest,

    payload=Depends(get_current_user),

    db: Session = Depends(get_db),

):

    user = get_user_by_email(

        db,

        payload["sub"],

    )

    if user is None:

        raise HTTPException(

            status_code=404,

            detail="User not found.",

        )

    return {
        "message": "Quiz submission endpoint created.",
        "next_step": "Connect generated quiz storage and evaluation."
    }