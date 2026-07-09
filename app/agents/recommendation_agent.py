from app.agents.base_agent import BaseAgent

from app.models.recommendation import (
    RecommendationResponse,
)

from app.prompts.recommendation_prompt import (
    RECOMMENDATION_PROMPT,
)


class RecommendationAgent(BaseAgent):

    def recommend(

        self,

        user_prompt: str,

    ):

        return self.generate(

            system_prompt=RECOMMENDATION_PROMPT,

            user_prompt=user_prompt,

            response_model=RecommendationResponse,

        )