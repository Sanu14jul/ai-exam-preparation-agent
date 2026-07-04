import QuizPlayer from "../quiz/QuizPlayer";

export default function QuizCard({
  quiz,
}) {
  return <QuizPlayer quiz={quiz} />;
}