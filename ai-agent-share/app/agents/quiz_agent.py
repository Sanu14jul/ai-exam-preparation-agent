from app.agents.base_agent import BaseAgent
from app.models.quiz_response import QuizResponse
from app.prompts.quiz_prompt import QUIZ_SYSTEM_PROMPT


class QuizAgent(BaseAgent):
    """
    AI Agent responsible for generating quizzes.
    """

    def generate_quiz(self, prompt: str) -> QuizResponse:

        return self.generate(
            system_prompt=QUIZ_SYSTEM_PROMPT,
            user_prompt=prompt,
            response_model=QuizResponse,
        )