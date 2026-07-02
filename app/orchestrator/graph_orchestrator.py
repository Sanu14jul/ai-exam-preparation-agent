from sqlalchemy.orm import Session

from app.graph.workflow import graph

from app.agents.extractor_agent import ExtractorAgent

from app.memory.conversation_memory import ConversationMemory

from app.database.database import SessionLocal
from app.database.crud import save_message


class GraphOrchestrator:

    def __init__(self):

        self.extractor = ExtractorAgent()

        self.memory = ConversationMemory()

    def execute(
        self,
        user_id: str,
        message: str,
    ):

        extracted = self.extractor.extract(message)

        state = {

            "user_input": message,

            "exam": extracted.exam,
            "hours_per_day": extracted.hours_per_day,
            "months_left": extracted.months_left,
            "current_level": extracted.current_level,

            "subject": extracted.subject,
            "difficulty": extracted.difficulty,

            "number_of_questions": 5,

            "next_agents": [],

            "study_plan": None,
            "quiz": None,
            "rag_answer": None,
        }

        db: Session = SessionLocal()

        try:

            # Save User Message
            save_message(
                db=db,
                user_id=user_id,
                role="user",
                message=message,
            )

            # Run Graph
            result = graph.invoke(state)

            # Save AI Response

            if result.get("study_plan"):

                save_message(
                    db=db,
                    user_id=user_id,
                    role="assistant",
                    message=str(result["study_plan"]),
                )

            elif result.get("quiz"):

                save_message(
                    db=db,
                    user_id=user_id,
                    role="assistant",
                    message=str(result["quiz"]),
                )

            elif result.get("rag_answer"):

                save_message(
                    db=db,
                    user_id=user_id,
                    role="assistant",
                    message=result["rag_answer"],
                )

            return result

        finally:

            db.close()