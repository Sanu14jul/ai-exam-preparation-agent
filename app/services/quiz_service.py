from app.agents.quiz_agent import QuizAgent
from app.models.quiz import QuizRequest


class QuizService:

    def __init__(self):

        self.agent = QuizAgent()

    def generate_quiz(self, request: QuizRequest):

        prompt = f"""
Exam: {request.exam}

Subject: {request.subject}

Difficulty: {request.difficulty}

Questions: {request.number_of_questions}

Context:
{request.context}
"""

        return self.agent.generate_quiz(prompt)