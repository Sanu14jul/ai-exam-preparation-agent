from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.database import get_db
from app.database.crud import get_user_by_email

from app.core.security import get_current_user
from app.core.api_response import APIResponse

from app.models.tutor import TutorRequest

from app.agents.tutor_agent import TutorAgent

router = APIRouter(
    prefix="/tutor",
    tags=["Tutor"],
)


@router.post("/teach")
def teach(

    request: TutorRequest,

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

    tutor = TutorAgent()

    answer = tutor.teach(
        request.topic
    )

    return APIResponse.success(
        message="Lesson generated successfully.",
        data=answer,
    )