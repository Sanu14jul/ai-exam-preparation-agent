from langchain_chroma import Chroma

from app.rag.embeddings import EmbeddingModel


class VectorStore:

    def __init__(self):

        self.embedding_model = EmbeddingModel().get_model()

        self.db = Chroma(
            persist_directory="vector_db",
            embedding_function=self.embedding_model,
        )

    def add_documents(self, documents):

        self.db.add_documents(documents)

    def similarity_search(self, query, k=3):

        return self.db.similarity_search(query, k=k)