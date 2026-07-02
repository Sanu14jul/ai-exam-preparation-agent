from app.rag.rag_service import RAGService


class RAGAgent:

    def __init__(self):
        self.rag = RAGService()

    def answer(self, question: str):
        return self.rag.ask(question)