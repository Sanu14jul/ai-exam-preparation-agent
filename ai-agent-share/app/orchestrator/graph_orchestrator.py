from app.graph.workflow import graph
from app.agents.extractor_agent import ExtractorAgent
from app.memory.conversation_memory import ConversationMemory


class GraphOrchestrator:

    def __init__(self):
        self.extractor = ExtractorAgent()
        self.memory = ConversationMemory()

    def execute(self, user_id: str, message: str):

        previous = self.memory.load(user_id)

        extracted = self.extractor.extract(message)

        new_state = {
            "user_input": message,

            "exam": getattr(extracted, "exam", None),
            "hours_per_day": getattr(extracted, "hours_per_day", None),
            "months_left": getattr(extracted, "months_left", None),
            "current_level": getattr(extracted, "current_level", None),

            "subject": getattr(extracted, "subject", None),
            "difficulty": getattr(extracted, "difficulty", None),
            "number_of_questions": 5,

            "next_agents": [],

            "study_plan": None,
            "quiz": None,
            "rag_answer": None,
        }

        state = self.memory.merge(previous, new_state)

        state.setdefault("exam", "UPSC")
        state.setdefault("hours_per_day", 4)
        state.setdefault("months_left", 6)
        state.setdefault("current_level", "Beginner")
        state.setdefault("subject", "History")
        state.setdefault("difficulty", "Medium")
        state.setdefault("number_of_questions", 5)
        state.setdefault("next_agents", [])
        state.setdefault("study_plan", None)
        state.setdefault("quiz", None)
        state.setdefault("rag_answer", None)

        self.memory.save(user_id, state)

        result = graph.invoke(state)

        self.memory.save(user_id, result)

        return result