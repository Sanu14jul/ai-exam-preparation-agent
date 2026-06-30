from app.agents.base_agent import BaseAgent
from app.models.study_plan_response import StudyPlanResponse
from app.prompts.study_plan_prompt import STUDY_PLAN_SYSTEM_PROMPT


class PlannerAgent(BaseAgent):
    """
    AI Agent responsible for generating personalized study plans.
    """

    def create_study_plan(self, user_prompt: str) -> StudyPlanResponse:

        return self.generate(
            system_prompt=STUDY_PLAN_SYSTEM_PROMPT,
            user_prompt=user_prompt,
            response_model=StudyPlanResponse,
        )