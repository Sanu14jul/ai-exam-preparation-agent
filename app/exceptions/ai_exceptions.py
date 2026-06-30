class AIException(Exception):
    """Base exception for all AI related errors."""
    pass


class InvalidAIResponseError(AIException):
    """Raised when AI returns invalid JSON."""
    pass


class LLMConnectionError(AIException):
    """Raised when the LLM API cannot be reached."""
    pass