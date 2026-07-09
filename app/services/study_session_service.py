from app.models.study_session import (
    StudySessionResponse,
    StudyTask,
)


class StudySessionService:

    def create_session(
        self,
        student_profile,
    ):

        topic = student_profile.weak_subjects

        return StudySessionResponse(

            topic=topic,

            duration=90,

            goal=f"Master {topic}",

            quiz_questions=20,

            revision_time=15,

            tasks=[

                StudyTask(

                    title="Study",

                    duration=60,

                    description=f"Study {topic}",

                ),

                StudyTask(

                    title="Quiz",

                    duration=20,

                    description="Solve MCQs",

                ),

                StudyTask(

                    title="Revision",

                    duration=10,

                    description="Revise mistakes",

                ),

            ],

        )