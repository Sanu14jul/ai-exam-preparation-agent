from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import DateTime
from sqlalchemy import JSON
from sqlalchemy import ForeignKey
from sqlalchemy import Boolean
from sqlalchemy.sql import func

from app.database.database import Base


class QuizSession(Base):

    __tablename__ = "quiz_sessions"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False,
    )

    quiz_data = Column(
        JSON,
        nullable=False,
    )

    is_completed = Column(
        Boolean,
        default=False,
    )

    score = Column(
        Integer,
        nullable=True,
    )

    started_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    completed_at = Column(
        DateTime(timezone=True),
        nullable=True,
    )