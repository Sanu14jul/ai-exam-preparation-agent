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

    def evaluate_session(
        self,
        db: Session,
        session_id: int,
        answers: list[str],
    ):

        session = self.get_session(
            db,
            session_id,
        )

        if session is None:

            return None

        quiz = session.quiz_data

        total = 0

        review = []

        for index, question in enumerate(quiz["questions"]):

            selected = answers[index] if index < len(answers) else None

            correct = question["correct_answer"]

            is_correct = selected == correct

            if is_correct:

                total += 1

            review.append({

                "question": question["question"],

                "selected": selected,

                "correct": correct,

                "is_correct": is_correct,

                "explanation": question["explanation"],

            })

        session.score = total

        session.is_completed = True

        session.completed_at = datetime.utcnow()

        db.commit()

        return {

            "score": total,

            "total_questions": len(quiz["questions"]),

            "review": review,

        }