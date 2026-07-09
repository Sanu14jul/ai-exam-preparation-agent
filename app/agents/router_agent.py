from app.agents.base_agent import BaseAgent

from app.models.router_response import RouterResponse

from app.prompts.router_prompt import ROUTER_SYSTEM_PROMPT


class RouterAgent(BaseAgent):

    def route(self, user_prompt: str):

        return self.generate(

            system_prompt=ROUTER_SYSTEM_PROMPT,

            user_prompt=user_prompt,

            response_model=RouterResponse,

        )