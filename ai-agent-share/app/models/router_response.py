from typing import List

from pydantic import BaseModel


class RouterResponse(BaseModel):
    agents: List[str]