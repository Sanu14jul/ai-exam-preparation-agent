import json
from pathlib import Path


class SyllabusService:

    def __init__(self):

        self.base_path = (
            Path(__file__).parent.parent
            / "exam_data"
        )

    def load_subject(

        self,

        exam_key: str,

        file_name: str,

    ):

        path = (
            self.base_path
            / exam_key
            / file_name
        )

        with open(
            path,
            encoding="utf-8",
        ) as f:

            return json.load(f)