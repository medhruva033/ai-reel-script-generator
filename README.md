AI Reel Script Generator
An AI-powered full-stack application that transforms user ideas into engaging, ready-to-record short-form video scripts. Users can define the topic, tone, duration, platform, and language, and the application generates a customized reel script using a generative AI model.
🚀 Features
- Generate AI-powered reel scripts from a custom topic
- Customize tone, duration, platform, and language
- Fast script generation using Groq AI
- RESTful API built with FastAPI
- Interactive React.js frontend
- Input validation and error handling
- Loading state during AI generation
- Copy generated scripts with one click
- Responsive, modern dark-themed UI
🛠️ Tech Stack
Frontend
- React.js
- Vite
- JavaScript
- CSS
Backend
- Python
- FastAPI
- Pydantic
- Uvicorn
AI & API
- Groq API
- LLM-based text generation
- OpenAI-compatible API client
Development & Testing
- REST API
- Pytest
- Git & GitHub
🏗️ Architecture
┌──────────────────────────┐
│      React.js Frontend   │
│                          │
│ Topic • Tone • Duration  │
│ Platform • Language      │
└─────────────┬────────────┘
              │
              │ REST API / JSON
              ▼
┌──────────────────────────┐
│       FastAPI Backend    │
│                          │
│ API Endpoints            │
│ Request Validation       │
└─────────────┬────────────┘
              ▼
┌──────────────────────────┐
│      Script Service      │
│                          │
│ Topic Cleaning           │
│ Prompt Construction      │
└─────────────┬────────────┘
              ▼
┌──────────────────────────┐
│       AI Service         │
│                          │
│ AI Generation Workflow   │
└─────────────┬────────────┘
              ▼
┌──────────────────────────┐
│       Groq AI / LLM      │
│                          │
│    Generated Script      │
└─────────────┬────────────┘
              │
              ▼
       React.js UI
       Generated Script

📁 Project Structure
ai-reel-script-generator/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── core/
│   │   ├── providers/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── main.py
│   │
│   ├── tests/
│   ├── .env.example
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
├── docs/
├── .gitignore
├── LICENSE
└── README.md

🔄 Application Flow
User enters reel idea
        ↓
Selects tone, duration,
platform & language
        ↓
React sends POST request
        ↓
FastAPI validates request
        ↓
Script Service builds AI prompt
        ↓
Groq LLM generates script
        ↓
FastAPI returns JSON response
        ↓
React displays generated script

🎯 Purpose
The project demonstrates how to build a production-style AI application by combining a modern frontend, RESTful backend architecture, input validation, AI integration, and a structured service layer.
