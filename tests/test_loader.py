from app.rag.loader import PDFLoader

loader = PDFLoader()

documents = loader.load("uploads/history.pdf")

print("\n========== PDF CONTENT ==========\n")

for page in documents:
    print(page.page_content)

print("\n================================")