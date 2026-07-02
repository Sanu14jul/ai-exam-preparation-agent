from fastapi import APIRouter

from app.rag.rag_service import RAGService

router = APIRouter()

rag = RAGService()


@router.post("/rag")
def ask(question: str):

    answer = rag.ask(question)

    return {
        "answer": answer
    }