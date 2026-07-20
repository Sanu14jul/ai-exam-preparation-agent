from app.services.learning_service import LearningService


class QuizEvaluationService:

    def __init__(self):

        self.learning = LearningService()

    def evaluate(

        self,

        db,

        user_id: int,

        subject: str,

        topic: str,

        unit: str,

        quiz,

        submitted_answers: list[str],

        study_time: int,

    ):

        total_questions = len(quiz.questions)

        score = 0

        review = []

        for index, question in enumerate(quiz.questions):

            student_answer = ""

            if index < len(submitted_answers):

                student_answer = submitted_answers[index]

            correct = student_answer == question.correct_answer

            if correct:

                score += 1

            review.append(

                {

                    "question": question.question,

                    "selected_answer": student_answer,

                    "correct_answer": question.correct_answer,

                    "is_correct": correct,

                    "explanation": question.explanation,

                }

            )

        percentage = round(

            (score / total_questions) * 100,

            2,

        )

        self.learning.save_session(

            db=db,

            user_id=user_id,

            subject=subject,

            topic=topic,

            unit=unit,

            quiz_score=percentage,

            study_time=study_time,

            completed=True,

        )

        return {

            "score": score,

            "total_questions": total_questions,

            "percentage": percentage,

            "review": review,

        }