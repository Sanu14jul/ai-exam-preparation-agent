from app.orchestrator.graph_orchestrator import GraphOrchestrator

orchestrator = GraphOrchestrator()

result = orchestrator.execute(
    user_id="sanu",
    message="Create a UPSC study plan and then generate 5 History quiz questions."
)

print("\n========== FINAL OUTPUT ==========\n")
print(result)