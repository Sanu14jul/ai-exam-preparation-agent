from datetime import datetime

from sqlalchemy.orm import Session

from app.database.quiz_session_model import QuizSession


class QuizSessionService:

    def create_session(
        self,
        db: Session,
        user_id: int,
        quiz_data,
    ):

        session = QuizSession(
            user_id=user_id,
            quiz_data=quiz_data,
        )

        db.add(session)
        db.commit()
        db.refresh(session)

        return session

    def get_session(
        self,
        db: Session,
        session_id: int,
    ):

        return (
            db.query(QuizSession)
            .filter(QuizSession.id == session_id)
            .first()
        )

    def complete_session(
        self,
        db: Session,
        session: QuizSession,
        score: int,
    ):

        session.score = score
        session.is_completed = True
        session.completed_at = datetime.utcnow()

        db.commit()
        db.refresh(session)

        return session