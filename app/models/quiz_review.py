from pydantic import BaseModel


class QuizReviewRequest(BaseModel):

    topic: str

    score: int

    total_questions: int


class QuizReviewResponse(BaseModel):

    performance: str

    strengths: list[str]

    weaknesses: list[str]

    explanation: str

    recommendation: str

    next_topic: str