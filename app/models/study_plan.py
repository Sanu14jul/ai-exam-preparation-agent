from pydantic import BaseModel, Field


class StudyPlanRequest(BaseModel):
    exam: str = Field(..., example="UPSC")
    hours_per_day: int = Field(..., ge=1, le=24, example=5)
    months_left: int = Field(..., ge=1, example=8)
    current_level: str = Field(..., example="Beginner")