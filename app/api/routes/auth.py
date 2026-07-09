from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database.database import get_db
from app.database.crud import (
    create_user,
    get_user_by_email,
)

from app.models.auth import (
    RegisterRequest,
    LoginRequest,
    TokenResponse,
)

from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post(
    "/register",
)
def register(
    request: RegisterRequest,
    db: Session = Depends(get_db),
):

    user = get_user_by_email(
        db,
        request.email,
    )

    if user:

        raise HTTPException(
            status_code=400,
            detail="Email already registered.",
        )

    create_user(
        db=db,
        username=request.username,
        email=request.email,
        hashed_password=hash_password(
            request.password
        ),
    )

    return {
        "message": "User registered successfully."
    }


@router.post(
    "/login",
    response_model=TokenResponse,
)
def login(
    request: LoginRequest,
    db: Session = Depends(get_db),
):

    user = get_user_by_email(
        db,
        request.email,
    )

    if not user:

        raise HTTPException(
            status_code=401,
            detail="Invalid credentials.",
        )

    if not verify_password(
        request.password,
        user.hashed_password,
    ):

        raise HTTPException(
            status_code=401,
            detail="Invalid credentials.",
        )

    token = create_access_token(
        {
            "sub": user.email,
            "user_id": user.id,
        }
    )

    return TokenResponse(
        access_token=token,
        user={
            "id": user.id,
            "username": user.username,
            "email": user.email,
        },
    )