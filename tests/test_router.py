from app.agents.router_agent import RouterAgent


router = RouterAgent()

result = router.route(
    "I want a study plan for UPSC."
)

print(result)