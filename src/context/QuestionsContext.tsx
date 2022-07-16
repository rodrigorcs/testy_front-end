import React, { ReactNode, createContext, useEffect, useMemo, useState } from "react";

import useFetch from "../hooks/useFetch";

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

export const QuestionsProvider = ({ children }: QuestionsProviderInterface) => {
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
    function calculateResult() {
      const answerValues = answerHistory.map((thisAnswer) => thisAnswer.value);
      const sum = answerValues.reduce((a, b) => a + b, 0);
      const average = sum / answerValues.length;

      const title = average > 0.5 ? "extrovert" : "introvert";
      const tempResult = results?.find((thisResult) => thisResult.title === title);

      if (tempResult) setResult(tempResult);
    }

    if (results && answerHistory.every((answer) => answer !== null)) {
      calculateResult();
    }
  }, [answerHistory, results]);

  function onChangeQuestion(questionIndex: number) {
    setSelectedQuestionIndex(questionIndex);
  }

  function resetState() {
    setSelectedQuestionIndex(0);
    setAnswerHistory([]);
    setResult(undefined);
  }

  const value = useMemo(() => {
    function onAnswer(answerId: string) {
      const newAnswerHistory = [...answerHistory];
      const answer = selectedQuestion?.answers.find((thisAnswer) => thisAnswer.id === answerId);
      if (answer) newAnswerHistory[selectedQuestionIndex] = answer;

      setAnswerHistory(newAnswerHistory);
    }
    return {
      questions,
      selectedQuestion,
      selectedQuestionIndex,
      answerHistory,
      onAnswer,
      onChangeQuestion,
      result,
      resetState,
    };
  }, [questions, selectedQuestion, selectedQuestionIndex, answerHistory, result]);

  return <QuestionsContext.Provider value={value}>{children}</QuestionsContext.Provider>;
};
