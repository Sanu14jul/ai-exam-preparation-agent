from app.agents.base_agent import BaseAgent

from app.models.quiz_review import (
    QuizReviewResponse,
)

from app.prompts.quiz_review_prompt import (
    QUIZ_REVIEW_PROMPT,
)


class QuizReviewAgent(BaseAgent):

    def review(
        self,
        user_prompt: str,
    ):

        return self.generate(

            system_prompt=QUIZ_REVIEW_PROMPT,

            user_prompt=user_prompt,

            response_model=QuizReviewResponse,

        )