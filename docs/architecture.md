# Architecture

## Request Flow

User
↓
React.js
↓
POST /api/v1/generate
↓
FastAPI
↓
Request Validation
↓
Script Service
↓
Prompt Processing
↓
AI Service
↓
AI Provider
↓
OpenAI Responses API
↓
Generated Script
↓
FastAPI
↓
React.js