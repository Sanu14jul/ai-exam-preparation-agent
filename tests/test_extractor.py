from app.agents.extractor_agent import ExtractorAgent

agent = ExtractorAgent()

result = agent.extract(
    """
    I am preparing for UPSC.

    I have 8 months left.

    I can study 5 hours daily.

    My level is beginner.

    Create a study plan and then quiz me on History.
    """
)

print(result)