from pydantic import BaseModel


class RecommendationResponse(BaseModel):

    recommended_topic: str

    reason: str

    estimated_time: int

    difficulty: str

    next_topic: str

    motivation: str