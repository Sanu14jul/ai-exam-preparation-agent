from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from jose import JWTError
from jose import jwt

from fastapi.security import OAuth2PasswordBearer

from app.core.config import settings
from app.core.api_response import APIResponse


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

        return APIResponse.success(
            message="User fetched successfully.",
            data=payload,
        )

    except JWTError:

        return APIResponse.error(
            message="Invalid token.",
            status_code=401,
        )