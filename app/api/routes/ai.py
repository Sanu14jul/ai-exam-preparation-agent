from datetime import date

from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database.database import get_db
from app.database.crud import (
    get_user_by_email,
    get_student_profile,
)

from app.core.security import get_current_user
from app.core.api_response import APIResponse

from app.models.ai_chat import AIChatRequest

from app.agents.master_agent import MasterAgent
from app.services.learning_service import LearningService


router = APIRouter(
    prefix="/ai",
    tags=["AI Agent"],
)


# =====================================================
# AI CHAT
# =====================================================

@router.post("/chat")
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

        return APIResponse.error(
            message="User not found.",
            status_code=404,
        )

    master = MasterAgent()

    result = master.process_request(

        user_id=user.id,

        user_message=request.message,

    )

    return APIResponse.success(

        message="AI response generated successfully.",

        data=result,

    )


# =====================================================
# DASHBOARD
# =====================================================

@router.get("/dashboard")
def dashboard(

    payload=Depends(get_current_user),

    db: Session = Depends(get_db),

):

    user = get_user_by_email(
        db,
        payload["sub"],
    )
    print("=" * 50)
    print("JWT email:", payload["sub"])
    print("Database user id:", user.id if user else None)
    print("=" * 50)

    if user is None:

        return APIResponse.error(
            message="User not found.",
            status_code=404,
        )

    profile = get_student_profile(
        db=db,
        user_id=user.id,
    )
    print("Profile found:", profile)

    if profile is None:

        return APIResponse.error(
            message="Student profile not found.",
            status_code=404,
        )

    learning = LearningService()

    average_score = learning.calculate_average_score(
        db,
        user.id,
    )

    study_time = learning.calculate_total_study_time(
        db,
        user.id,
    )

    weak_topics = learning.weak_topics(
        db,
        user.id,
    )

    strong_topics = learning.strong_topics(
        db,
        user.id,
    )

    completed_sessions = len(
        learning.get_history(
            db,
            user.id,
        )
    )

    days_left = None

    if profile.exam_date:

        days_left = (
            profile.exam_date - date.today()
        ).days

    dashboard_data = {

        "username": user.username,

        "learning_track": profile.learning_track,

        "course": profile.course,

        "semester": profile.semester,

        "daily_hours": profile.daily_study_hours,

        "target_score": profile.target_score,

        "days_left": days_left,

        "today_mission": f"Study {profile.weak_subjects}",

        "today_quiz": f"{profile.weak_subjects} Quiz",

        "average_score": average_score,

        "study_time": study_time,

        "completed_sessions": completed_sessions,

        "weak_topics": weak_topics,

        "strong_topics": strong_topics,

        "progress": average_score,

        "study_streak": completed_sessions,

    }

    return APIResponse.success(

        message="Dashboard loaded successfully.",

        data=dashboard_data,

    )