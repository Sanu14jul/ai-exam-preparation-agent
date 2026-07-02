from fastapi import FastAPI

from app.api.routes.agent import router as agent_router
from app.api.routes.upload import router as upload_router
from app.api.routes.auth import router as auth_router
from app.api.routes.me import router as me_router


app = FastAPI(
    title="AI Exam Preparation Agent"
)

app.include_router(agent_router)
app.include_router(upload_router)
app.include_router(auth_router)
app.include_router(me_router)


@app.get("/")
def root():

    return {
        "message": "AI Exam Preparation Agent Running"
    }