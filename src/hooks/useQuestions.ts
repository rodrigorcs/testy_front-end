import { useContext } from "react";
import { QuestionsContext } from "../context/QuestionsContext";

export function useQuestions() {
  const questions = useContext(QuestionsContext);

  return questions;
}
