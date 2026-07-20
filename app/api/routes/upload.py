from pathlib import Path

from fastapi import APIRouter
from fastapi import File
from fastapi import UploadFile

from app.core.api_response import APIResponse

from app.rag.loader import PDFLoader
from app.rag.splitter import TextSplitter
from app.rag.vector_store import VectorStore

router = APIRouter(
    tags=["Upload"],
)

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


@router.post("/upload")
async def upload_pdf(
    file: UploadFile = File(...),
):

    if not file.filename.endswith(".pdf"):

        return APIResponse.error(
            message="Only PDF files are allowed.",
            status_code=400,
        )

    save_path = UPLOAD_DIR / file.filename

    with open(save_path, "wb") as f:

        f.write(
            await file.read()
        )

    loader = PDFLoader()

    documents = loader.load(
        str(save_path)
    )

    splitter = TextSplitter()

    chunks = splitter.split(
        documents
    )

    vector_store = VectorStore()

    vector_store.add_documents(
        chunks
    )

    return APIResponse.success(

        message="PDF uploaded and indexed successfully.",

        data={

            "filename": file.filename,

            "chunks": len(chunks),

        },

    )