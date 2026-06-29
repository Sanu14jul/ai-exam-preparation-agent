from app.core.llm import generate_response
from app.models.study_plan import StudyPlanRequest
from app.prompts.study_plan_prompt import STUDY_PLAN_SYSTEM_PROMPT


class StudyPlanService:

    def generate_plan(self, request: StudyPlanRequest):

        user_prompt = f"""
Exam: {request.exam}

Hours Per Day: {request.hours_per_day}

Months Left: {request.months_left}

Current Level: {request.current_level}

Generate a personalized study plan.
"""

        response = generate_response(
            system_prompt=STUDY_PLAN_SYSTEM_PROMPT,
            user_prompt=user_prompt
        )

        return response