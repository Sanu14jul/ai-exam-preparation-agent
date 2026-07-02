import requests


BASE = "http://127.0.0.1:8000"


response = requests.post(
    BASE + "/auth/register",
    json={
        "username": "sanu",
        "email": "sanu@gmail.com",
        "password": "123456",
    },
)

print(response.json())


response = requests.post(
    BASE + "/auth/login",
    json={
        "email": "sanu@gmail.com",
        "password": "123456",
    },
)

print(response.json())