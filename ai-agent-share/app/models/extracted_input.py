from typing import Optional

from pydantic import BaseModel


class ExtractedInput(BaseModel):

    exam: Optional[str] = None

    hours_per_day: Optional[int] = None

    months_left: Optional[int] = None

    current_level: Optional[str] = None

    subject: Optional[str] = None

    difficulty: Optional[str] = None

    task: Optional[str] = None