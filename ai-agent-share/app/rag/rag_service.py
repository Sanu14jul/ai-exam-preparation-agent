from app.rag.retriever import Retriever
from app.core.llm import generate_response


class RAGService:

    def __init__(self):
        self.retriever = Retriever()

    def ask(self, question: str):

        docs = self.retriever.retrieve(question)

        # No documents found
        if not docs:

            return generate_response(
                system_prompt="You are a helpful AI tutor.",
                user_prompt=question,
            )

        # Convert Document objects into text
        context = "\n\n".join(
            doc.page_content for doc in docs
        )

        prompt = f"""
Use ONLY the information below.

Context:
{context}

Question:
{question}

If the answer is not present in the context, reply exactly:

I could not find the answer in the uploaded PDF.
"""

        return generate_response(
            system_prompt="You answer questions from uploaded study material.",
            user_prompt=prompt,
        )