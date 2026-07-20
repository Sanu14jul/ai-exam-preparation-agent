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

        return APIResponse.error(
            message="User not found.",
            status_code=404,
        )

    profile = get_student_profile(
        db=db,
        user_id=user.id,
    )

    if profile is None:

        return APIResponse.error(
            message="Student profile not found.",
            status_code=404,
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

    return APIResponse.success(
        message="Today's recommendation generated successfully.",
        data=recommendation,
    )