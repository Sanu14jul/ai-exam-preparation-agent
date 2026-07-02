from groq import Groq

from app.core.config import settings


def generate_response(
    system_prompt: str,
    user_prompt: str,
):

    client = Groq(
        api_key=settings.GROQ_API_KEY
    )

    try:

        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": user_prompt,
                },
            ],
            temperature=0.5,
        )

        return response.choices[0].message.content

    except Exception as e:

        raise Exception(
            f"LLM Error: {str(e)}"
        )