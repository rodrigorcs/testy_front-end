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

type QuestionsContextType = {
  questions: Question[] | null;
  selectedQuestion?: Question | null;
  selectedQuestionIndex: number;
  answerHistory: Answer[];
  onAnswer: (answerId: string) => void;
  onChangeQuestion: (questionIndex: number) => void;
};

interface QuestionsProviderInterface {
  children: ReactNode;
}

export const QuestionsContext = createContext({} as QuestionsContextType);

export function QuestionsProvider({ children }: QuestionsProviderInterface) {
  const { data: questions } = useFetch<Question[]>("/questions");

  const [selectedQuestion, setSelectedQuestion] = useState<Question>();
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number>(0);
  const [answerHistory, setAnswerHistory] = useState<Answer[]>([]);

  useEffect(() => {
    console.log({
      questions,
      selectedQuestion,
      selectedQuestionIndex,
      answerHistory,
    });
  }, [, selectedQuestionIndex]);

  useEffect(() => {
    if (questions) {
      setSelectedQuestion(questions[selectedQuestionIndex]);
    }
  }, [questions, selectedQuestionIndex]);

  useEffect(() => {
    if (questions && answerHistory?.length < 1) {
      setAnswerHistory(Array(questions.length).fill(null));
    }
  }, [questions]);

  function onAnswer(answerId: string) {
    let newAnswerHistory = [...answerHistory];
    const answer = selectedQuestion?.answers.find((answer) => answer.id === answerId);
    if (answer) newAnswerHistory[selectedQuestionIndex] = answer;
    setAnswerHistory(newAnswerHistory);
  }

  function onChangeQuestion(questionIndex: number) {
    setSelectedQuestionIndex(questionIndex);
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
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}
