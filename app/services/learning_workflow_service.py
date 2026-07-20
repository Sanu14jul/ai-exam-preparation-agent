from sqlalchemy.orm import Session

from app.agents.recommendation_agent import RecommendationAgent
from app.agents.tutor_agent import TutorAgent
from app.agents.quiz_agent import QuizAgent

from app.services.quiz_session_service import QuizSessionService


class LearningWorkflowService:

    def __init__(self):

        self.recommendation = RecommendationAgent()

        self.tutor = TutorAgent()

        self.quiz = QuizAgent()

        self.quiz_session = QuizSessionService()

    def start_session(

        self,

        db: Session,

        user_id: int,

        user_prompt: str,

    ):

        recommendation = self.recommendation.recommend(

            user_prompt

        )

        lesson = self.tutor.teach(

            recommendation.recommended_topic

        )

        quiz = self.quiz.generate_quiz(

            recommendation.recommended_topic

        )

        session = self.quiz_session.create_session(

            db=db,

            user_id=user_id,

            quiz_data=quiz.model_dump(),

        )

        return {

            "recommendation": recommendation,

            "lesson": lesson,

            "quiz": quiz,

            "quiz_session_id": session.id,

        }