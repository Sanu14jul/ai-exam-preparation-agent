from datetime import date
from typing import Optional

from pydantic import BaseModel


class StudentProfileCreate(BaseModel):

    learning_track: str

    board: Optional[str] = None

    university: Optional[str] = None

    course: Optional[str] = None

    semester: Optional[str] = None

    exam_name: Optional[str] = None

    exam_date: Optional[date] = None

    target_score: Optional[str] = None

    daily_study_hours: Optional[str] = None

    weak_subjects: Optional[str] = None

    strong_subjects: Optional[str] = None

    preferred_language: str = "English"