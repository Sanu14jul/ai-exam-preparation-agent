from app.agents.orchestrator_agent import OrchestratorAgent
from app.memory.memory_store import memory_store
from app.models.user_profile import UserProfile


class OrchestratorService:

    def __init__(self):

        self.orchestrator = OrchestratorAgent()

    def create_profile(
        self,
        exam,
        current_level,
        hours_per_day,
        months_left,
    ):

        profile = UserProfile(
            exam=exam,
            current_level=current_level,
            hours_per_day=hours_per_day,
            months_left=months_left,
        )

        memory_store.save("user_profile", profile)

    def planner(self):

        return self.orchestrator.planner_agent()

    def quiz(self):

        return self.orchestrator.quiz_agent()