import { createContext, useState, ReactNode, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export type Answer = {
  title: string;
  value: number;
  id: string;
};

type Question = {
  title: string;
  id: string;
  answers: Answer[];
};

type Result = {
  title: "introvert" | "extrovert";
  description: string;
  contactTitle: string;
  id: string;
};

type QuestionsContextType = {
  questions: Question[] | null;
  selectedQuestion?: Question | null;
  selectedQuestionIndex: number;
  answerHistory: Answer[];
  onAnswer: (answerId: string) => void;
  onChangeQuestion: (questionIndex: number) => void;
  result?: Result;
  resetState: () => void;
};

interface QuestionsProviderInterface {
  children: ReactNode;
}

export const QuestionsContext = createContext({} as QuestionsContextType);

export function QuestionsProvider({ children }: QuestionsProviderInterface) {
  const { data: questions } = useFetch<Question[]>("/questions");
  const { data: results } = useFetch<Result[]>("/results");

  const [selectedQuestion, setSelectedQuestion] = useState<Question>();
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);
  const [answerHistory, setAnswerHistory] = useState<Answer[]>([]);
  const [result, setResult] = useState<Result>();

  // map selectedQuestion according to selectedQuestionIndex
  useEffect(() => {
    if (questions) {
      setSelectedQuestion(questions[selectedQuestionIndex]);
    }
  }, [questions, selectedQuestionIndex]);

  // set answerHistory values to null on the same length as the questions
  useEffect(() => {
    if (questions && answerHistory?.length < 1) {
      setAnswerHistory(Array(questions.length).fill(null));
    }
  }, [questions, answerHistory]);

  // calculate result when answerHistory is totally filled
  useEffect(() => {
    if (results && answerHistory.every((answer) => answer !== null)) {
      console.log(answerHistory);
      calculateResult();
    }
  }, [answerHistory, results]);

  function calculateResult() {
    const answerValues = answerHistory.map((answer) => answer.value);
    const sum = answerValues.reduce((a, b) => a + b, 0);
    const average = sum / answerValues.length;

    const title = average > 0.5 ? "extrovert" : "introvert";
    const tempResult = results?.find((result) => result.title === title);

    if (tempResult) setResult(tempResult);
  }

  function onAnswer(answerId: string) {
    let newAnswerHistory = [...answerHistory];
    const answer = selectedQuestion?.answers.find((answer) => answer.id === answerId);
    if (answer) newAnswerHistory[selectedQuestionIndex] = answer;
    setAnswerHistory(newAnswerHistory);
  }

  function onChangeQuestion(questionIndex: number) {
    setSelectedQuestionIndex(questionIndex);
  }

  function resetState() {
    setSelectedQuestionIndex(0);
    setAnswerHistory([]);
    setResult(undefined);
  }

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        selectedQuestion,
        selectedQuestionIndex,
        answerHistory,
        onAnswer,
        onChangeQuestion,
        result,
        resetState,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}
