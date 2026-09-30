from fastapi import APIRouter

from app.api.v1.endpoints.generate import router as generate_router
from app.api.v1.endpoints.health import router as health_router


api_router = APIRouter()

api_router.include_router(
    health_router,
    tags=["Health"],
)

api_router.include_router(
    generate_router,
    tags=["Generate"],
)