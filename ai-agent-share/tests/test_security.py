from app.core.security import hash_password
from app.core.security import verify_password
from app.core.security import create_access_token


password = "123456"

hashed = hash_password(password)

print(hashed)

print(
    verify_password(
        password,
        hashed,
    )
)

token = create_access_token(
    {
        "sub": "sanu"
    }
)

print(token)