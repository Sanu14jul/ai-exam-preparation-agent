from pydantic import BaseModel


class QuizRequest(BaseModel):

    exam: str
    subject: str
    difficulty: str
    number_of_questions: int
    context: str | None = None


class PDFQuizRequest(BaseModel):

    query: str
    number_of_questions: int = 10
    difficulty: str = "Medium"