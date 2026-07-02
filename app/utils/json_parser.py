import json
import re


def parse_llm_json(response: str) -> dict:
    """
    Extract and parse JSON from an LLM response.
    Handles:
    - ```json ... ```
    - ``` ... ```
    - extra explanations before/after JSON
    """

    response = response.strip()

    # Remove Markdown code fences
    response = re.sub(r"^```json", "", response, flags=re.IGNORECASE)
    response = re.sub(r"^```", "", response)
    response = re.sub(r"```$", "", response)

    response = response.strip()

    # Find first JSON object
    match = re.search(r"\{.*\}", response, re.DOTALL)

    if not match:
        raise ValueError("No JSON object found in LLM response.")

    json_text = match.group()

    return json.loads(json_text)