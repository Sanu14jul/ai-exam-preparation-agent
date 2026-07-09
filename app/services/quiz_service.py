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

    def generate_quiz_from_pdf(
        self,
        context: str,
        number_of_questions: int = 10,
        difficulty: str = "Medium",
    ):

        prompt = f"""
You are an expert competitive exam question setter.

Generate {number_of_questions} multiple-choice questions ONLY from the study material below.

Study Material:
{context}

Rules:
- Difficulty: {difficulty}
- Four options
- One correct answer
- Short explanation
- Return valid JSON only.
"""

        return self.agent.generate_quiz(prompt)