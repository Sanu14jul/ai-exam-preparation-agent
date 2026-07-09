from sqlalchemy.orm import Session

from app.database.models import (
    User,
    Conversation,
)

from app.database.student_profile_model import (
    StudentProfile,
)


# ==========================================================
# USER
# ==========================================================

def get_user_by_email(
    db: Session,
    email: str,
):

    return (
        db.query(User)
        .filter(User.email == email)
        .first()
    )


def create_user(
    db: Session,
    username: str,
    email: str,
    hashed_password: str,
):

    user = User(
        username=username,
        email=email,
        hashed_password=hashed_password,
    )

    db.add(user)

    db.commit()

    db.refresh(user)

    return user


# ==========================================================
# CHAT HISTORY
# ==========================================================

def save_message(
    db: Session,
    user_id: str,
    role: str,
    message: str,
):

    chat = Conversation(
        user_id=user_id,
        role=role,
        message=message,
    )

    db.add(chat)

    db.commit()

    db.refresh(chat)

    return chat


def get_history(
    db: Session,
    user_id: str,
):

    return (
        db.query(Conversation)
        .filter(
            Conversation.user_id == user_id
        )
        .order_by(
            Conversation.created_at.asc()
        )
        .all()
    )


# ==========================================================
# STUDENT PROFILE
# ==========================================================

def save_student_profile(
    db: Session,
    user_id: int,
    profile,
):

    student_profile = StudentProfile(

        user_id=user_id,

        learning_track=profile.learning_track,

        board=profile.board,

        university=profile.university,

        course=profile.course,

        semester=profile.semester,

        exam_name=profile.exam_name,

        exam_key=getattr(
            profile,
            "exam_key",
            None,
        ),

        exam_date=profile.exam_date,

        target_score=profile.target_score,

        daily_study_hours=profile.daily_study_hours,

        weak_subjects=profile.weak_subjects,

        strong_subjects=profile.strong_subjects,

        preferred_language=profile.preferred_language,

        preparation_percentage=0,

        study_streak=0,

        completed_sessions=0,

        completed_quizzes=0,

    )

    db.add(student_profile)

    db.commit()

    db.refresh(student_profile)

    return student_profile


def get_student_profile(
    db: Session,
    user_id: int,
):

    return (
        db.query(StudentProfile)
        .filter(
            StudentProfile.user_id == user_id
        )
        .first()
    )


def update_student_progress(
    db: Session,
    user_id: int,
    *,
    preparation_percentage=None,
    study_streak=None,
    completed_sessions=None,
    completed_quizzes=None,
):

    profile = get_student_profile(
        db,
        user_id,
    )

    if profile is None:

        return None

    if preparation_percentage is not None:

        profile.preparation_percentage = preparation_percentage

    if study_streak is not None:

        profile.study_streak = study_streak

    if completed_sessions is not None:

        profile.completed_sessions = completed_sessions

    if completed_quizzes is not None:

        profile.completed_quizzes = completed_quizzes

    db.commit()

    db.refresh(profile)

    return profile