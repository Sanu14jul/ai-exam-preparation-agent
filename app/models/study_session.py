from pydantic import BaseModel
from typing import List


class StudyTask(BaseModel):

    title: str

    duration: int

    description: str


class StudySessionResponse(BaseModel):

    topic: str

    duration: int

    goal: str

    quiz_questions: int

    revision_time: int

    tasks: List[StudyTask]