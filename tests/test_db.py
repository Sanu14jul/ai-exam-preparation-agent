from app.database.database import Base
from app.database.database import engine

from app.database.models import User


print("Creating tables...")

Base.metadata.create_all(bind=engine)

print("Done!")