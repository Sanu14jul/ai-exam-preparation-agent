from typing import List
from pydantic import BaseModel


class Topic(BaseModel):

    name: str


class Unit(BaseModel):

    name: str

    topics: List[Topic]


class Subject(BaseModel):

    name: str

    units: List[Unit]