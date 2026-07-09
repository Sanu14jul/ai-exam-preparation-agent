from sqlalchemy.orm import Session

from app.database.learning_session_model import (
    LearningSession,
)


class LearningService:

    # ----------------------------------------

    def save_session(

        self,

        db: Session,

        user_id: int,

        subject: str,

        topic: str,

        unit: str,

        quiz_score: int,

        study_time: int,

        completed: bool,

    ):

        session = LearningSession(

            user_id=user_id,

            subject=subject,

            topic=topic,

            unit=unit,

            quiz_score=quiz_score,

            study_time=study_time,

            completed=completed,

        )

        db.add(session)

        db.commit()

        db.refresh(session)

        return session

    # ----------------------------------------

    def get_history(

        self,

        db: Session,

        user_id: int,

    ):

        return (

            db.query(LearningSession)

            .filter(

                LearningSession.user_id == user_id

            )

            .order_by(

                LearningSession.created_at.desc()

            )

            .all()

        )

    # ----------------------------------------

    def calculate_average_score(

        self,

        db: Session,

        user_id: int,

    ):

        sessions = self.get_history(

            db,

            user_id,

        )

        if len(sessions) == 0:

            return 0

        total = sum(

            s.quiz_score

            for s in sessions

        )

        return round(

            total / len(sessions),

            2,

        )

    # ----------------------------------------

    def calculate_total_study_time(

        self,

        db: Session,

        user_id: int,

    ):

        sessions = self.get_history(

            db,

            user_id,

        )

        return sum(

            s.study_time

            for s in sessions

        )

    # ----------------------------------------

    def weak_topics(

        self,

        db: Session,

        user_id: int,

    ):

        sessions = self.get_history(

            db,

            user_id,

        )

        weak = []

        for s in sessions:

            if s.quiz_score < 60:

                weak.append(

                    {

                        "subject": s.subject,

                        "topic": s.topic,

                        "score": s.quiz_score,

                    }

                )

        return weak

    # ----------------------------------------

    def strong_topics(

        self,

        db: Session,

        user_id: int,

    ):

        sessions = self.get_history(

            db,

            user_id,

        )

        strong = []

        for s in sessions:

            if s.quiz_score >= 80:

                strong.append(

                    {

                        "subject": s.subject,

                        "topic": s.topic,

                        "score": s.quiz_score,

                    }

                )

        return strong