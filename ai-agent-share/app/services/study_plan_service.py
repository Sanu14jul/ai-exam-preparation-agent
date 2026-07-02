from app.agents.planner_agent import PlannerAgent
from app.memory.memory_store import memory_store
from app.models.study_plan import StudyPlanRequest
from app.models.user_profile import UserProfile


class StudyPlanService:

    def __init__(self):
        self.planner_agent = PlannerAgent()

    def generate_plan(self, request: StudyPlanRequest):

        profile = UserProfile(
            exam=request.exam,
            current_level=request.current_level,
            hours_per_day=request.hours_per_day,
            months_left=request.months_left,
        )

        memory_store.save("user_profile", profile)

        user_prompt = f"""
Exam: {request.exam}

Hours Per Day: {request.hours_per_day}

Months Left: {request.months_left}

Current Level: {request.current_level}

Generate a personalized study plan.
"""

        study_plan = self.planner_agent.create_study_plan(user_prompt)

        return study_plan