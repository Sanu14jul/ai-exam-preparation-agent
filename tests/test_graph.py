from app.graph.workflow import graph


result = graph.invoke(
    {
        "exam": "UPSC",
        "hours_per_day": 5,
        "months_left": 8,
        "current_level": "Beginner",

        "subject": "History",
        "difficulty": "Medium",
        "number_of_questions": 5,

        "study_plan": None,
        "quiz": None,
    }
)

print(result)