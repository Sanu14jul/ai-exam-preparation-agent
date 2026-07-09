from pathlib import Path

from fastapi import APIRouter, File, UploadFile

from app.rag.loader import PDFLoader
from app.rag.splitter import TextSplitter
from app.rag.vector_store import VectorStore

router = APIRouter()

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    if not file.filename.endswith(".pdf"):
        return {
            "message": "Only PDF files are allowed."
        }

    save_path = UPLOAD_DIR / file.filename

    with open(save_path, "wb") as f:
        f.write(await file.read())

    # -----------------------------
    # Load PDF
    # -----------------------------
    loader = PDFLoader()
    documents = loader.load(str(save_path))

    # -----------------------------
    # Split into chunks
    # -----------------------------
    splitter = TextSplitter()
    chunks = splitter.split(documents)

    # -----------------------------
    # Store in ChromaDB
    # -----------------------------
    vector_store = VectorStore()
    vector_store.add_documents(chunks)

    return {
        "message": "PDF uploaded and indexed successfully.",
        "filename": file.filename,
        "chunks": len(chunks),
    }