from app.providers.ai_provider import generate_text


async def generate_ai_script(prompt: str) -> str:
    return await generate_text(prompt)