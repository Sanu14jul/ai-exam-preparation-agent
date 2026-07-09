from pydantic import BaseModel


class DailyCoachResponse(BaseModel):

    greeting: str

    study_streak: int

    today_topic: str

    estimated_time: int

    quiz_questions: int

    motivation: str

    goal: str