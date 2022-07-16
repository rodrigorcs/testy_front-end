import { useContext } from "react";

import { QuestionsContext } from "../context/QuestionsContext";

function useQuestions() {
  const questions = useContext(QuestionsContext);

  return questions;
}

export default useQuestions;
