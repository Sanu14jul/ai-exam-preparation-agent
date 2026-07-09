from app.agents.base_agent import BaseAgent

from app.models.tutor_response import TutorResponse

from app.prompts.tutor_prompt import (
    TUTOR_SYSTEM_PROMPT,
)


class TutorAgent(BaseAgent):

    """
    PrepMind AI Tutor Agent
    """

    def teach(
        self,
        user_prompt: str,
    ) -> TutorResponse:

        return self.generate(

            system_prompt=TUTOR_SYSTEM_PROMPT,

            user_prompt=user_prompt,

            response_model=TutorResponse,

        )