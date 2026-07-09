from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db
from app.database.crud import (
    save_student_profile,
    get_student_profile,
)

from app.models.student_profile import (
    StudentProfileCreate,
)

router = APIRouter(
    prefix="/student-profile",
    tags=["Student Profile"],
)


@router.get("/{user_id}")
def fetch_student_profile(
    user_id: int,
    db: Session = Depends(get_db),
):

    profile = get_student_profile(
        db=db,
        user_id=user_id,
    )

    if not profile:

        raise HTTPException(
            status_code=404,
            detail="Student profile not found.",
        )

    return profile


@router.post("/")
def create_student_profile(
    user_id: int,
    request: StudentProfileCreate,
    db: Session = Depends(get_db),
):

    existing_profile = get_student_profile(
        db=db,
        user_id=user_id,
    )

    if existing_profile:

        raise HTTPException(
            status_code=400,
            detail="Student profile already exists.",
        )

    profile = save_student_profile(
        db=db,
        user_id=user_id,
        profile=request,
    )

    return {
        "message": "Student profile created successfully.",
        "profile": profile,
    }