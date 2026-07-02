from pydantic import BaseModel


class QuizRequest(BaseModel):

    exam: str

    subject: str

    difficulty: str

    number_of_questions: int

    context: str | None = None