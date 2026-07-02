from app.rag.rag_service import RAGService

rag = RAGService()

answer = rag.ask(
    "Who was Ashoka?"
)

print("\n========== FINAL ANSWER ==========\n")

print(answer)

print("\n=================================\n")