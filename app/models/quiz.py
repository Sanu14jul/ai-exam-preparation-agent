from pydantic import BaseModel, Field


class QuizRequest(BaseModel):
    exam: str = Field(..., example="UPSC")
    subject: str = Field(..., example="History")
    difficulty: str = Field(..., example="Medium")
    number_of_questions: int = Field(..., ge=1, le=20, example=5)