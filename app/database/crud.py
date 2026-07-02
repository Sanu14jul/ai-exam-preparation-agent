from sqlalchemy.orm import Session

from app.database.models import (
    User,
    Conversation,
)


# --------------------------
# USER
# --------------------------

def get_user_by_email(
    db: Session,
    email: str,
):

    return (
        db.query(User)
        .filter(User.email == email)
        .first()
    )


def create_user(
    db: Session,
    username: str,
    email: str,
    hashed_password: str,
):

    user = User(
        username=username,
        email=email,
        hashed_password=hashed_password,
    )

    db.add(user)

    db.commit()

    db.refresh(user)

    return user


# --------------------------
# CHAT HISTORY
# --------------------------

def save_message(
    db: Session,
    user_id: str,
    role: str,
    message: str,
):

    chat = Conversation(
        user_id=user_id,
        role=role,
        message=message,
    )

    db.add(chat)

    db.commit()

    db.refresh(chat)

    return chat


def get_history(
    db: Session,
    user_id: str,
):

    return (
        db.query(Conversation)
        .filter(
            Conversation.user_id == user_id
        )
        .order_by(
            Conversation.created_at.asc()
        )
        .all()
    )