from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Boolean
from sqlalchemy import DateTime
from sqlalchemy.sql import func

from app.database.database import Base


class LearningSession(Base):

    __tablename__ = "learning_sessions"

    id = Column(
        Integer,
        primary_key=True,
        index=True,
    )

    user_id = Column(
        Integer,
        nullable=False,
        index=True,
    )

    subject = Column(
        String,
        nullable=False,
    )

    topic = Column(
        String,
        nullable=False,
    )

    unit = Column(
        String,
        nullable=False,
    )

    quiz_score = Column(
        Integer,
        default=0,
    )

    study_time = Column(
        Integer,
        default=0,
    )

    completed = Column(
        Boolean,
        default=False,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )