from pydantic import BaseModel, Field


class GenerateRequest(BaseModel):
    topic: str = Field(
        ...,
        min_length=2,
        max_length=500,
        description="Topic for the reel script",
    )

    tone: str = Field(
        default="engaging",
        max_length=50,
        description="Desired tone of the script",
    )

    duration_seconds: int = Field(
        default=30,
        ge=15,
        le=180,
        description="Approximate reel duration",
    )

    platform: str = Field(
        default="Instagram Reels",
        max_length=50,
    )

    language: str = Field(
        default="English",
        max_length=50,
    )


class GenerateResponse(BaseModel):
    success: bool
    topic: str
    script: str
    tone: str
    duration_seconds: int
    platform: str
    language: str