from openai import AsyncOpenAI

from app.core.config import settings


client = AsyncOpenAI(
    api_key=settings.groq_api_key,
    base_url="https://api.groq.com/openai/v1",
)


async def generate_text(prompt: str) -> str:

    response = await client.responses.create(
        model=settings.groq_model,
        instructions=(
            "You are an expert short-form social media script writer. "
            "Create concise, engaging and natural scripts."
        ),
        input=prompt,
    )

    return response.output_text.strip()