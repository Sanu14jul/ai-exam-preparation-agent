from pydantic import BaseModel
from typing import List


class Question(BaseModel):
    question: str
    options: List[str]
    correct_answer: str
    explanation: str


class QuizResponse(BaseModel):
    questions: List[Question]