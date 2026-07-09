from app.agents.router_agent import RouterAgent
from app.agents.memory_agent import MemoryAgent
from app.agents.planner_agent import PlannerAgent
from app.agents.quiz_agent import QuizAgent

from app.services.learning_service import LearningService

from app.database.database import SessionLocal
from app.database.crud import (
    get_student_profile,
    get_history,
)


class MasterAgent:
    """
    PrepMind AI Master Agent

    Responsibilities
    ----------------
    1. Load Student Profile
    2. Load Conversation History
    3. Load Learning History
    4. Build AI Memory
    5. Route User Request
    6. Execute Required Agents
    7. Return Unified Response
    """

    def __init__(self):

        self.router = RouterAgent()

        self.memory = MemoryAgent()

        self.learning = LearningService()

        self.planner = PlannerAgent()

        self.quiz = QuizAgent()

    def process_request(
        self,
        user_id: int,
        user_message: str,
    ):

        db = SessionLocal()

        try:

            profile = get_student_profile(
                db=db,
                user_id=user_id,
            )

            if profile is None:

                return {

                    "success": False,

                    "message": "Student profile not found.",

                    "data": None,

                    "metadata": {},

                }

            history = get_history(

                db=db,

                user_id=str(user_id),

            )

            memory = self.memory.summarize(

                student_profile=profile,

                conversation_history=history,

            )

            # ------------------------------------
            # Learning Analytics
            # ------------------------------------

            learning_history = self.learning.get_history(

                db=db,

                user_id=user_id,

            )

            average_score = self.learning.calculate_average_score(

                db=db,

                user_id=user_id,

            )

            total_study_time = self.learning.calculate_total_study_time(

                db=db,

                user_id=user_id,

            )

            weak_topics = self.learning.weak_topics(

                db=db,

                user_id=user_id,

            )

            strong_topics = self.learning.strong_topics(

                db=db,

                user_id=user_id,

            )

            routing = self.router.route(

                user_message

            )

            result = {

                "study_plan": None,

                "quiz": None,

                "revision": None,

                "tutor": None,

                "rag": None,

                "analytics": None,

                "career": None,

                "coding": None,

                "current_affairs": None,

            }

            agents_used = []

            # ==========================================
            # Execute Requested Agents
            # ==========================================

            for agent in routing.agents:

                if agent == "planner":

                    planner_prompt = f"""

Student Memory

{memory.summary}

Student Profile

{profile}

Average Quiz Score

{average_score}

Total Study Time

{total_study_time}

Weak Topics

{weak_topics}

Strong Topics

{strong_topics}

User Request

{user_message}

"""

                    result["study_plan"] = (

                        self.planner.create_study_plan(

                            planner_prompt

                        )

                    )

                    agents_used.append(

                        "planner"

                    )

                elif agent == "quiz":

                    quiz_prompt = f"""

Student Memory

{memory.summary}

Student Profile

{profile}

Average Quiz Score

{average_score}

Total Study Time

{total_study_time}

Weak Topics

{weak_topics}

Strong Topics

{strong_topics}

User Request

{user_message}

"""

                    result["quiz"] = (

                        self.quiz.generate_quiz(

                            quiz_prompt

                        )

                    )

                    agents_used.append(

                        "quiz"

                    )
                elif agent == "revision":

                    result["revision"] = {

                        "message": "Revision Agent Coming Soon"

                    }

                    agents_used.append(

                        "revision"

                    )

                elif agent == "tutor":

                    result["tutor"] = {

                        "message": "Tutor Agent Coming Soon"

                    }

                    agents_used.append(

                        "tutor"

                    )

                elif agent == "rag":

                    result["rag"] = {

                        "message": "RAG Agent Coming Soon"

                    }

                    agents_used.append(

                        "rag"

                    )

                elif agent == "analytics":

                    result["analytics"] = {

                        "message": "Analytics Agent Coming Soon"

                    }

                    agents_used.append(

                        "analytics"

                    )

                elif agent == "career":

                    result["career"] = {

                        "message": "Career Agent Coming Soon"

                    }

                    agents_used.append(

                        "career"

                    )

                elif agent == "coding":

                    result["coding"] = {

                        "message": "Coding Agent Coming Soon"

                    }

                    agents_used.append(

                        "coding"

                    )

                elif agent == "current_affairs":

                    result["current_affairs"] = {

                        "message": "Current Affairs Agent Coming Soon"

                    }

                    agents_used.append(

                        "current_affairs"

                    )

            return {

                "success": True,

                "message": "AI request processed successfully.",

                "data": result,

                "metadata": {

                    "agents_used": agents_used,

                    "routing_reason": routing.reasoning,

                    "memory_summary": memory.summary,

                    "learning_statistics": {

                        "total_learning_sessions": len(

                            learning_history

                        ),

                        "average_quiz_score": average_score,

                        "total_study_time": total_study_time,

                        "weak_topics": weak_topics,

                        "strong_topics": strong_topics,

                    },

                },

            }

        finally:

            db.close()