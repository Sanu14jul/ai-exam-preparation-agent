import json
from pathlib import Path


class ExamService:

    def __init__(self):

        self.base_path = (
            Path(__file__).parent.parent
            / "exam_data"
        )

    def load_exam(
        self,
        exam_file: str,
    ):

        path = self.base_path / f"{exam_file}.json"

        if not path.exists():

            raise FileNotFoundError(
                f"{exam_file}.json not found."
            )

        with open(
            path,
            "r",
            encoding="utf-8",
        ) as file:

            return json.load(file)

    def get_subjects(
        self,
        exam_file: str,
    ):

        exam = self.load_exam(
            exam_file
        )

        return exam.get(
            "subjects",
            [],
        )

    def supports_current_affairs(
        self,
        exam_file: str,
    ):

        exam = self.load_exam(
            exam_file
        )

        return exam.get(
            "supports_current_affairs",
            False,
        )

    def supports_pyq(
        self,
        exam_file: str,
    ):

        exam = self.load_exam(
            exam_file
        )

        return exam.get(
            "supports_pyq",
            False,
        )

    def get_quiz_type(
        self,
        exam_file: str,
    ):

        exam = self.load_exam(
            exam_file
        )

        return exam.get(
            "quiz_type",
            "MCQ",
        )