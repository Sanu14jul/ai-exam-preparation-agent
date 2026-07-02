from typing import TypedDict, Optional


class AgentState(TypedDict):

    user_input: str

    exam: Optional[str]
    hours_per_day: Optional[int]
    months_left: Optional[int]
    current_level: Optional[str]

    subject: Optional[str]
    difficulty: Optional[str]
    number_of_questions: Optional[int]

    next_agents: list[str]

    study_plan: Optional[dict]
    quiz: Optional[dict]
    rag_answer: str | None