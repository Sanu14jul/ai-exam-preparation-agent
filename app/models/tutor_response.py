from pydantic import BaseModel


class TutorResponse(BaseModel):

    topic: str

    explanation: str

    real_life_example: str

    key_points: list[str]

    common_mistakes: list[str]

    practice_question: str

    mcq_question: str

    options: list[str]

    correct_answer: str

    revision_tip: str