import StudyPlanCard from "./StudyPlanCard";
import QuizCard from "./QuizCard";
import RAGCard from "./RAGCard";

export default function ResponseRenderer({
  response,
}) {
  if (!response)
    return null;

  if (response.study_plan) {
    return (
      <StudyPlanCard
        plan={response.study_plan}
      />
    );
  }

  if (response.quiz) {
    return (
      <QuizCard
        quiz={response.quiz}
      />
    );
  }

  if (response.rag_answer) {
    return (
      <RAGCard
        answer={response.rag_answer}
      />
    );
  }

  return (
    <pre className="text-white whitespace-pre-wrap">
      {JSON.stringify(
        response,
        null,
        2
      )}
    </pre>
  );
}