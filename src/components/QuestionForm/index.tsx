import React, { FC, ChangeEvent, FormEvent, useState, useEffect } from "react";

import Text from "../../components/Text";
import Button from "../../components/Button";

import { useQuestions } from "../../hooks/useQuestions";
import { Answer } from "../../context/QuestionsContext";

import { Container, Form, Label, QuestionFooter } from "./styles";
import { FaChevronRight } from "react-icons/fa";

interface EventTarget extends HTMLFormElement {
  answers: RadioNodeList;
}

interface AnswerItemProps {
  answer: Answer;
  selectedAnswerId?: string;
  handleAnswerChange: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
}

const AnswerItem: FC<AnswerItemProps> = ({
  answer,
  selectedAnswerId,
  handleAnswerChange,
  defaultChecked,
}) => {
  return (
    <Label key={answer.id} isChecked={answer.id === selectedAnswerId}>
      <input
        type="radio"
        name="answers"
        value={answer.id}
        onChange={handleAnswerChange}
        defaultChecked={defaultChecked}
      />
      {answer.title}
    </Label>
  );
};

const QuestionForm: FC = () => {
  const { questions, onAnswer, onChangeQuestion, selectedQuestion, selectedQuestionIndex, answerHistory } =
    useQuestions();
  const [selectedAnswerId, setSelectedAnswerId] = useState<string>();

  useEffect(() => {
    const previousAnswerId = answerHistory[selectedQuestionIndex]?.id;
    if (previousAnswerId) {
      setSelectedAnswerId(previousAnswerId);
    }
  }, [selectedQuestionIndex]);

  const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswerId(event.target.value);
  };

  const handleAnswerSubmit = (event: FormEvent<HTMLFormElement>) => {
    const targetElement = event.target as EventTarget;
    onAnswer(targetElement.answers.value);
    onChangeQuestion(selectedQuestionIndex + 1);

    event.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleAnswerSubmit}>
        <Text type="p" size="large" marginTop="small">
          {selectedQuestion ? selectedQuestion.title : "Loading..."}
        </Text>
        {selectedQuestion ? (
          selectedQuestion.answers.map((answer) => (
            <AnswerItem
              answer={answer}
              selectedAnswerId={selectedAnswerId}
              handleAnswerChange={handleAnswerChange}
              defaultChecked={answer.id === selectedAnswerId}
              key={answer.id}
            />
          ))
        ) : (
          <span />
        )}
        <QuestionFooter>
          <Button big Icon={FaChevronRight} iconAlignment="right" type="submit" disabled={!questions}>
            {!questions
              ? "Loading..."
              : selectedQuestionIndex < questions.length - 1
              ? "Next"
              : "See Results"}
          </Button>
        </QuestionFooter>
      </Form>
    </Container>
  );
};

export default QuestionForm;
