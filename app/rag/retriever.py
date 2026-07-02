from app.rag.vector_store import VectorStore


class Retriever:

    def __init__(self):

        self.db = VectorStore()

    def retrieve(
        self,
        query: str,
        k: int = 4,
    ):

        results = self.db.db.similarity_search_with_score(
            query,
            k=k,
        )

        documents = []

        for doc, score in results:

            print(f"Score : {score}")

            # Lower score = better match
            if score < 1.2:
                documents.append(doc)

        return documents