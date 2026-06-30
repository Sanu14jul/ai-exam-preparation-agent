from app.agents.quiz_agent import QuizAgent
from app.memory.memory_store import memory_store
from app.models.quiz import QuizRequest


class QuizService:

    def __init__(self):
        self.quiz_agent = QuizAgent()

    def generate_quiz(self, request: QuizRequest):

        profile = memory_store.get("user_profile")

        user_prompt = f"""
Student Profile:

{profile}

Exam: {request.exam}

Subject: {request.subject}

Difficulty: {request.difficulty}

Number of Questions: {request.number_of_questions}

Generate a quiz suitable for this student's profile.
"""

        return self.quiz_agent.generate_quiz(user_prompt)