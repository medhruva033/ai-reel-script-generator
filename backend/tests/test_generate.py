from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_generate_requires_topic():
    response = client.post(
        "/api/v1/generate",
        json={
            "topic": "",
        },
    )

    assert response.status_code == 422


def test_generate_accepts_valid_request():
    response = client.post(
        "/api/v1/generate",
        json={
            "topic": "5 AI tools students should know",
            "tone": "energetic",
            "duration_seconds": 30,
            "platform": "Instagram Reels",
            "language": "English",
        },
    )

    # The request should pass Pydantic validation.
    # The AI call may fail if no API key is configured.
    assert response.status_code in [200, 500]