from fastapi import FastAPI

from app.api.routes.agent import router as agent_router
from app.api.routes.upload import router as upload_router
from app.api.routes.auth import router as auth_router
from app.api.routes.me import router as me_router
from app.api.routes.history import router as history_router


app = FastAPI(
    title="AI Exam Preparation Agent",
    version="1.0.0",
)


app.include_router(agent_router)
app.include_router(upload_router)
app.include_router(auth_router)
app.include_router(me_router)
app.include_router(history_router)


@app.get("/")
def root():

    return {
        "message": "AI Exam Preparation Agent Running"
    }