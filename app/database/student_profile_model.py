from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Date
from sqlalchemy import DateTime
from sqlalchemy.sql import func

from app.database.database import Base


class StudentProfile(Base):

    __tablename__ = "student_profiles"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    user_id = Column(
        Integer,
        nullable=False,
        unique=True,
        index=True,
    )

    # ------------------------------------------------
    # Learning Information
    # ------------------------------------------------

    learning_track = Column(
        String,
        nullable=False,
    )

    board = Column(String)

    university = Column(String)

    course = Column(String)

    semester = Column(String)

    exam_name = Column(String)

    # NEW
    # Used by ExamService
    exam_key = Column(String)

    # ------------------------------------------------
    # Goals
    # ------------------------------------------------

    exam_date = Column(Date)

    target_score = Column(String)

    daily_study_hours = Column(String)

    # ------------------------------------------------
    # AI Profile
    # ------------------------------------------------

    weak_subjects = Column(String)

    strong_subjects = Column(String)

    preferred_language = Column(
        String,
        default="English",
    )

    # ------------------------------------------------
    # Progress
    # ------------------------------------------------

    preparation_percentage = Column(
        Integer,
        default=0,
    )

    study_streak = Column(
        Integer,
        default=0,
    )

    completed_sessions = Column(
        Integer,
        default=0,
    )

    completed_quizzes = Column(
        Integer,
        default=0,
    )

    # ------------------------------------------------

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )