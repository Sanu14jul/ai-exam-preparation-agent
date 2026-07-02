from app.rag.loader import PDFLoader
from app.rag.splitter import TextSplitter
from app.rag.embeddings import EmbeddingModel

loader = PDFLoader()
splitter = TextSplitter()

documents = loader.load("uploads/history.pdf")   # Change if filename is different

chunks = splitter.split(documents)

embedding_model = EmbeddingModel().get_model()

embedding = embedding_model.embed_query(chunks[0].page_content)

print("\n========== EMBEDDING ==========\n")

print("Dimension :", len(embedding))

print("\nFirst 10 values:\n")

print(embedding[:10])