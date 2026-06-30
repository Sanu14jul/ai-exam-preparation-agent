from pydantic import BaseModel
from typing import List


class UserProfile(BaseModel):

    exam: str

    current_level: str

    hours_per_day: int

    months_left: int

    subjects: List[str] = []

    weak_topics: List[str] = []

    completed_topics: List[str] = []