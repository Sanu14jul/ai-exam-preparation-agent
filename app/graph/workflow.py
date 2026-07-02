from langgraph.graph import StateGraph, START, END

from app.graph.state import AgentState

from app.agents.router_agent import RouterAgent
from app.agents.rag_agent import RAGAgent

from app.models.study_plan import StudyPlanRequest
from app.models.quiz import QuizRequest

from app.services.study_plan_service import StudyPlanService
from app.services.quiz_service import QuizService


router_agent = RouterAgent()
rag_agent = RAGAgent()

planner_service = StudyPlanService()
quiz_service = QuizService()


def router_node(state: AgentState):

    result = router_agent.route(state["user_input"])

    state["next_agents"] = result.agents

    return state


def planner_node(state: AgentState):

    request = StudyPlanRequest(
        exam=state.get("exam") or "UPSC",
        hours_per_day=state.get("hours_per_day") or 4,
        months_left=state.get("months_left") or 6,
        current_level=state.get("current_level") or "Beginner",
    )

    plan = planner_service.generate_plan(request)

    state["study_plan"] = plan.model_dump()

    return state


def rag_node(state: AgentState):

    state["rag_answer"] = rag_agent.answer(
        state["user_input"]
    )

    return state


def quiz_node(state: AgentState):

    request = QuizRequest(
        exam=state.get("exam") or "UPSC",
        subject=state.get("subject") or "History",
        difficulty=state.get("difficulty") or "Medium",
        number_of_questions=state.get("number_of_questions") or 5,
        context=state.get("rag_answer"),
    )

    quiz = quiz_service.generate_quiz(request)

    state["quiz"] = quiz.model_dump()

    return state


builder = StateGraph(AgentState)

builder.add_node("router", router_node)
builder.add_node("planner", planner_node)
builder.add_node("quiz", quiz_node)
builder.add_node("rag", rag_node)

builder.add_edge(START, "router")


def router_condition(state: AgentState):

    agents = state.get("next_agents", [])

    if "planner" in agents:
        return "planner"

    if "quiz" in agents:
        return "quiz"

    if "rag" in agents:
        return "rag"

    return END


builder.add_conditional_edges(
    "router",
    router_condition,
    {
        "planner": "planner",
        "quiz": "quiz",
        "rag": "rag",
        END: END,
    },
)

# Each agent finishes independently
builder.add_edge("planner", END)
builder.add_edge("quiz", END)
builder.add_edge("rag", END)

graph = builder.compile()