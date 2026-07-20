import time

from starlette.middleware.base import BaseHTTPMiddleware


class LoggingMiddleware(BaseHTTPMiddleware):

    async def dispatch(
        self,
        request,
        call_next,
    ):

        start = time.time()

        response = await call_next(request)

        end = time.time()

        print(
            f"{request.method} {request.url.path} "
            f"{response.status_code} "
            f"{round(end-start,2)} sec"
        )

        return response