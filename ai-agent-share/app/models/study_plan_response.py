from pydantic import BaseModel


class StudyPlanResponse(BaseModel):
    daily_schedule: str
    weekly_goals: str
    revision_strategy: str
    practice_tests: str
    tips: str