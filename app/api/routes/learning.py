from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.core.api_response import APIResponse
from app.core.security import get_current_user

from app.database.database import get_db
from app.database.crud import get_user_by_email

from app.services.learning_workflow_service import (
    LearningWorkflowService,
)

router = APIRouter(
    prefix="/learning",
    tags=["Learning"],
)


@router.post("/session")
def learning_session(

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

    workflow = LearningWorkflowService()

    prompt = f"""
Student

{user.email}

Generate today's personalized learning session.
"""

    session = workflow.start_session(

        db=db,

        user_id=user.id,

        user_prompt=prompt,

    )

    return APIResponse.success(
        message="Learning session generated successfully.",
        data=session,
    )