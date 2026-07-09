from pydantic import BaseModel


class TutorRequest(BaseModel):

    topic: str


class TutorResponse(BaseModel):

    answer: str