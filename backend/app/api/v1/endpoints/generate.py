from fastapi import APIRouter, HTTPException

from app.schemas.generate import GenerateRequest, GenerateResponse
from app.services.script_service import generate_script


router = APIRouter()


@router.post(
    "/generate",
    response_model=GenerateResponse,
)
async def generate_reel_script(request: GenerateRequest):

    try:
        result = await generate_script(request)
        return result

    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error),
        )

    except Exception as error:
        print(f"Script generation error: {error}")

        raise HTTPException(
            status_code=500,
            detail=f"Failed to generate reel script: {error}",
        )