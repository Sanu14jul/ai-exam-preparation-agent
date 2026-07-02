from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from jose import JWTError
from jose import jwt

from fastapi.security import OAuth2PasswordBearer

from app.core.config import settings


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/auth/login"
)


@router.get("/me")
def me(
    token: str = Depends(oauth2_scheme),
):

    try:

        payload = jwt.decode(
            token,
            settings.SECRET_KEY,
            algorithms=[
                settings.ALGORITHM
            ],
        )

        return payload

    except JWTError:

        raise HTTPException(
            status_code=401,
            detail="Invalid Token",
        )