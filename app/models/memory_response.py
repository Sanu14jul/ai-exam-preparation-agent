from typing import List
from pydantic import BaseModel


class MemoryResponse(BaseModel):

    summary: str

    important_points: List[str]