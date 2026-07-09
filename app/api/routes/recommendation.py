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

from app.agents.recommendation_agent import (
    RecommendationAgent,
)

router = APIRouter(
    prefix="/recommendation",
    tags=["Recommendation"],
)


@router.get("/today")
def today_recommendation(

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
            detail="Profile not found.",
        )

    prompt = f"""

Learning Track

{profile.learning_track}

Course

{profile.course}

Semester

{profile.semester}

Weak Subjects

{profile.weak_subjects}

Strong Subjects

{profile.strong_subjects}

Daily Study Hours

{profile.daily_study_hours}

Target Score

{profile.target_score}

"""

    recommendation = RecommendationAgent().recommend(
        prompt
    )

    return recommendation