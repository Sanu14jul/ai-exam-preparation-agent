from app.agents.planner_agent import PlannerAgent
from app.agents.quiz_agent import QuizAgent


class OrchestratorAgent:

    def __init__(self):

        self.planner = PlannerAgent()
        self.quiz = QuizAgent()

    def planner_agent(self):
        return self.planner

    def quiz_agent(self):
        return self.quiz