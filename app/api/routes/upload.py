from pathlib import Path

from fastapi import APIRouter, File, UploadFile

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

    return {
        "message": "PDF uploaded successfully.",
        "filename": file.filename,
        "path": str(save_path)
    }