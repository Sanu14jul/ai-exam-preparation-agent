from groq import Groq
from app.core.config import settings

print("Loaded key:", settings.GROQ_API_KEY[:10] + "...")

client = Groq(api_key=settings.GROQ_API_KEY)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[
        {
            "role": "user",
            "content": "Say Hello"
        }
    ]
)

print(response.choices[0].message.content)