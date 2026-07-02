from fastapi import APIRouter

from app.models.study_plan import StudyPlanRequest
from app.services.study_plan_service import StudyPlanService

router = APIRouter()

study_plan_service = StudyPlanService()


@router.post("/study-plan")
def create_study_plan(request: StudyPlanRequest):
    plan = study_plan_service.generate_plan(request)

    return {
        "message": "Study plan generated successfully",
        "study_plan": plan,
    }