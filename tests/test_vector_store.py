from app.rag.loader import PDFLoader
from app.rag.splitter import TextSplitter
from app.rag.vector_store import VectorStore

loader = PDFLoader()
splitter = TextSplitter()
vector_db = VectorStore()

documents = loader.load("uploads/history.pdf")   # Replace with your filename

chunks = splitter.split(documents)

vector_db.add_documents(chunks)

print("\n============================")
print("Chunks stored successfully!")
print(f"Stored {len(chunks)} chunks.")
print("============================")