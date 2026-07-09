from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db

from app.database.crud import (
    get_user_by_email,
    get_student_profile,
)

from app.core.security import get_current_user

from app.services.study_session_service import (
    StudySessionService,
)

router = APIRouter(
    prefix="/study-session",
    tags=["Study Session"],
)


@router.post("/start")
def start_session(

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

    profile = get_student_profile(
        db=db,
        user_id=user.id,
    )

    if profile is None:

        raise HTTPException(

            status_code=404,

            detail="Student profile not found.",

        )

    service = StudySessionService()

    return service.create_session(profile)