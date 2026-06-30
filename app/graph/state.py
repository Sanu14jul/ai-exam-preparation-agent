from typing import TypedDict, Optional


class AgentState(TypedDict):
    exam: str
    hours_per_day: int
    months_left: int
    current_level: str

    subject: str
    difficulty: str
    number_of_questions: int

    study_plan: Optional[dict]
    quiz: Optional[dict]