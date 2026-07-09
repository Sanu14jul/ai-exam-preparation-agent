from app.agents.base_agent import BaseAgent

from app.models.memory_response import MemoryResponse

from app.prompts.memory_prompt import MEMORY_SYSTEM_PROMPT


class MemoryAgent(BaseAgent):

    def summarize(

        self,

        student_profile,

        conversation_history,

    ):

        prompt = f"""

Student Profile

{student_profile}

Conversation History

{conversation_history}

"""

        return self.generate(

            system_prompt=MEMORY_SYSTEM_PROMPT,

            user_prompt=prompt,

            response_model=MemoryResponse,

        )