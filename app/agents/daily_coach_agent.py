from app.agents.base_agent import BaseAgent

from app.models.daily_coach import (
    DailyCoachResponse,
)

from app.prompts.daily_coach_prompt import (
    DAILY_COACH_PROMPT,
)


class DailyCoachAgent(BaseAgent):

    def generate_daily_plan(

        self,

        user_prompt: str,

    ):

        return self.generate(

            system_prompt=DAILY_COACH_PROMPT,

            user_prompt=user_prompt,

            response_model=DailyCoachResponse,

        )