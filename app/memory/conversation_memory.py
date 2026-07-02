from sqlalchemy.orm import Session

from app.database.database import SessionLocal
from app.database.crud import (
    save_message,
    get_history,
)


class ConversationMemory:

    def save(self, user_id: str, state: dict):

        db: Session = SessionLocal()

        try:

            save_message(
                db=db,
                user_id=user_id,
                role="user",
                message=state["user_input"],
            )

            if state.get("study_plan"):

                save_message(
                    db=db,
                    user_id=user_id,
                    role="assistant",
                    message=str(state["study_plan"]),
                )

            if state.get("quiz"):

                save_message(
                    db=db,
                    user_id=user_id,
                    role="assistant",
                    message=str(state["quiz"]),
                )

            if state.get("rag_answer"):

                save_message(
                    db=db,
                    user_id=user_id,
                    role="assistant",
                    message=state["rag_answer"],
                )

        finally:

            db.close()

    def load(self, user_id: str):

        db: Session = SessionLocal()

        try:

            chats = get_history(
                db,
                user_id,
            )

            return chats

        finally:

            db.close()

    def merge(
        self,
        previous,
        new_state,
    ):

        return new_state