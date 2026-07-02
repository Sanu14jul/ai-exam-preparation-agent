import json
from typing import Type

from pydantic import BaseModel

from app.core.llm import generate_response
from app.utils.json_parser import parse_llm_json

from app.exceptions.ai_exceptions import (
    InvalidAIResponseError,
    LLMConnectionError,
)

from app.utils.logger import logger


class BaseAgent:

    def generate(
        self,
        system_prompt: str,
        user_prompt: str,
        response_model: Type[BaseModel],
    ):

        logger.info(f"{self.__class__.__name__} started.")

        try:

            logger.info("Calling Groq LLM...")

            response = generate_response(
                system_prompt=system_prompt,
                user_prompt=user_prompt,
            )

            print("\n========== RAW AI RESPONSE ==========")
            print(response)
            print("=====================================\n")

            logger.info("AI response received.")

            response_dict = parse_llm_json(response)

            logger.info("JSON parsed successfully.")

            validated = response_model.model_validate(response_dict)

            logger.info("Response validated successfully.")

            return validated

        except json.JSONDecodeError as e:

            logger.error("Invalid JSON returned.")

            raise InvalidAIResponseError(
                "Invalid JSON returned."
            ) from e

        except Exception as e:

            logger.error(str(e))

            raise LLMConnectionError(str(e)) from e