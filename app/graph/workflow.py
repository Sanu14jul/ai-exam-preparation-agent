from langgraph.graph import StateGraph, START, END

from app.graph.state import AgentState

from app.models.study_plan import StudyPlanRequest
from app.models.quiz import QuizRequest

from app.services.study_plan_service import StudyPlanService
from app.services.quiz_service import QuizService


planner_service = StudyPlanService()
quiz_service = QuizService()


def planner_node(state: AgentState):

    request = StudyPlanRequest(
        exam=state["exam"],
        hours_per_day=state["hours_per_day"],
        months_left=state["months_left"],
        current_level=state["current_level"],
    )

    study_plan = planner_service.generate_plan(request)

    state["study_plan"] = study_plan.model_dump()

    return state


def quiz_node(state: AgentState):

    request = QuizRequest(
        exam=state["exam"],
        subject=state["subject"],
        difficulty=state["difficulty"],
        number_of_questions=state["number_of_questions"],
    )

    quiz = quiz_service.generate_quiz(request)

    state["quiz"] = quiz.model_dump()

    return state


builder = StateGraph(AgentState)

builder.add_node("planner", planner_node)
builder.add_node("quiz", quiz_node)

builder.add_edge(START, "planner")
builder.add_edge("planner", "quiz")
builder.add_edge("quiz", END)

graph = builder.compile()