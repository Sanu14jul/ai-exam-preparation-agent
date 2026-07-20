from app.agents.rag_agent import RAGAgent
from app.core.llm import generate_response


class NotesAgent:

    def __init__(self):
        self.rag = RAGAgent()

    def invoke(self, state):

        context = self.rag.answer(state["user_input"])

        system_prompt = """
You are an expert teacher.

Create beautiful Markdown study notes.

Format:

# Title

## Overview

## Important Concepts

## Key Points

## Examples

## Quick Revision

Only use the provided study material.
Do not invent facts.
"""

        user_prompt = f"""
Study Material:

{context}

Generate structured notes.
"""

        state["notes"] = generate_response(
            system_prompt,
            user_prompt,
        )

        return state