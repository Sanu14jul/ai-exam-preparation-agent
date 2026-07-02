from fastapi import APIRouter

from app.models.chat_request import ChatRequest
from app.models.chat_response import ChatResponse

from app.orchestrator.graph_orchestrator import GraphOrchestrator

router = APIRouter()

orchestrator = GraphOrchestrator()


@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):

    result = orchestrator.execute(
        request.user_id,
        request.message,
    )

    return ChatResponse(response=result)