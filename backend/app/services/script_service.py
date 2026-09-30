import re

from app.schemas.generate import GenerateRequest, GenerateResponse
from app.services.ai_service import generate_ai_script


def clean_topic(topic: str) -> str:
    topic = topic.strip()

    topic = re.sub(r"\s+", " ", topic)

    return topic


def build_prompt(request: GenerateRequest, topic: str) -> str:
    return f"""
Create a short-form social media reel script.

Topic:
{topic}

Platform:
{request.platform}

Language:
{request.language}

Tone:
{request.tone}

Target duration:
approximately {request.duration_seconds} seconds

Requirements:
- Start with a strong hook.
- Make the first few seconds attention-grabbing.
- Use natural spoken language.
- Keep the script easy to speak.
- Provide useful or entertaining information.
- Maintain the requested tone.
- End with a clear call to action.
- Do not include unnecessary explanations.
- Return only the final reel script.
""".strip()


async def generate_script(
    request: GenerateRequest,
) -> GenerateResponse:

    topic = clean_topic(request.topic)

    if not topic:
        raise ValueError("Topic cannot be empty.")

    prompt = build_prompt(
        request,
        topic,
    )

    script = await generate_ai_script(prompt)

    return GenerateResponse(
        success=True,
        topic=topic,
        script=script,
        tone=request.tone,
        duration_seconds=request.duration_seconds,
        platform=request.platform,
        language=request.language,
    )