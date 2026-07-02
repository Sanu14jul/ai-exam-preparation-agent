from app.rag.retriever import Retriever

retriever = Retriever()

results = retriever.retrieve(
    "Who was Ashoka?",
    k=3,
)

print("\n========== RETRIEVED CHUNKS ==========\n")

for i, doc in enumerate(results):

    print("=" * 60)
    print(f"Result {i+1}")
    print("=" * 60)

    print(doc.page_content)

print("\n=====================================")