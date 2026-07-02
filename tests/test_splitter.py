from app.rag.loader import PDFLoader
from app.rag.splitter import TextSplitter

loader = PDFLoader()
splitter = TextSplitter()

documents = loader.load("uploads/history.pdf")

chunks = splitter.split(documents)

print("\n========== CHUNKS ==========\n")

print(f"Total Chunks : {len(chunks)}\n")

for i, chunk in enumerate(chunks):

    print("=" * 60)
    print(f"Chunk {i+1}")
    print("=" * 60)
    print(chunk.page_content)

print("\n======================================")