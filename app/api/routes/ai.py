from datetime import date

from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db
from app.database.crud import get_user_by_email
from app.database.crud import get_student_profile

from app.core.security import get_current_user

from app.models.ai_chat import (
    AIChatRequest,
    AIChatResponse,
)

from app.agents.master_agent import MasterAgent


router = APIRouter(
    prefix="/ai",
    tags=["AI Agent"],
)


@router.post(
    "/chat",
    response_model=AIChatResponse,
)
def chat(

    request: AIChatRequest,

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

    master = MasterAgent()

    result = master.process_request(
        user_id=user.id,
        user_message=request.message,
    )

    return AIChatResponse(
        success=True,
        response=result,
    )


@router.get("/dashboard")
def dashboard(

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

    days_left = None

    if profile.exam_date:

        days_left = (
            profile.exam_date - date.today()
        ).days

    return {

        "username": user.username,

        "learning_track": profile.learning_track,

        "course": profile.course,

        "semester": profile.semester,

        "daily_hours": profile.daily_study_hours,

        "weak_subjects": profile.weak_subjects,

        "strong_subjects": profile.strong_subjects,

        "target_score": profile.target_score,

        "days_left": days_left,

        "today_mission": f"Study {profile.weak_subjects}",

        "today_quiz": f"{profile.weak_subjects} Quiz",

        "progress": 25,

        "study_streak": 1,

    }