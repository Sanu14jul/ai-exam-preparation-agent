import json
from typing import Type

from pydantic import BaseModel

from app.core.llm import generate_response
from app.exceptions.ai_exceptions import (
    InvalidAIResponseError,
    LLMConnectionError,
)
from app.utils.logger import logger


class BaseAgent:
    """
    Base class for all AI Agents.
    """

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

            logger.info("AI response received.")

            response_dict = json.loads(response)

            logger.info("JSON parsed successfully.")

            validated_response = response_model(**response_dict)

            logger.info("Response validated successfully.")

            return validated_response

        except json.JSONDecodeError as e:

            logger.error("Invalid JSON returned by AI.")

            raise InvalidAIResponseError(
                "The AI returned invalid JSON."
            ) from e

        except Exception as e:

            logger.error(str(e))

            raise LLMConnectionError(
                f"LLM Error : {str(e)}"
            ) from e