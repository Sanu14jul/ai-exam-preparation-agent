from pydantic import BaseModel


class QuizSubmitRequest(BaseModel):

    quiz_session_id: int

    answers: list[str]