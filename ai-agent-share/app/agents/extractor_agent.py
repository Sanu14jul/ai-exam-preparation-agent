from app.agents.base_agent import BaseAgent

from app.models.extracted_input import ExtractedInput

from app.prompts.extractor_prompt import EXTRACTOR_SYSTEM_PROMPT


class ExtractorAgent(BaseAgent):

    def extract(self, message: str):

        return self.generate(
            system_prompt=EXTRACTOR_SYSTEM_PROMPT,
            user_prompt=message,
            response_model=ExtractedInput,
        )