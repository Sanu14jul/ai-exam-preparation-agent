from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.database.crud import get_history

router = APIRouter(
    prefix="/history",
    tags=["History"],
)


@router.get("/{user_id}")
def history(
    user_id: str,
    db: Session = Depends(get_db),
):

    chats = get_history(
        db=db,
        user_id=user_id,
    )

    return [
        {
            "id": chat.id,
            "role": chat.role,
            "message": chat.message,
            "created_at": chat.created_at,
        }
        for chat in chats
    ]