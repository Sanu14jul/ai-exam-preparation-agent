from pydantic import BaseModel


class RouterResponse(BaseModel):
    agent: str