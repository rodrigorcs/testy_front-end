import React, { FC, ChangeEvent, FormEvent, useState, useEffect } from "react";

import { FaCheckCircle, FaChevronRight, FaRegCircle } from "react-icons/fa";

import Text from "../../components/Text";
import Button from "../../components/Button";

import { Container, Form, Label, QuestionFooter } from "./styles";
import theme from "../../theme";

import { useQuestions } from "../../hooks/useQuestions";
import { Answer } from "../../context/QuestionsContext";
import { useNavigate } from "react-router-dom";

interface EventTarget extends HTMLFormElement {
  answers: RadioNodeList;
}

interface AnswerItemProps {
  answer: Answer;
  selectedAnswerId?: string;
  handleChangeAnswer: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AnswerItem: FC<AnswerItemProps> = ({ answer, selectedAnswerId, handleChangeAnswer }) => {
  const isChecked = answer.id === selectedAnswerId;
  return (
    <Label key={answer.id} isChecked={isChecked}>
      <div>
        <FaCheckCircle />
      </div>
      <input
        type="radio"
        name="answers"
        value={answer.id}
        onChange={handleChangeAnswer}
        defaultChecked={isChecked}
      />
      {answer.title}
    </Label>
  );
};

const QuestionForm: FC = () => {
  const navigate = useNavigate();
  const { questions, onAnswer, onChangeQuestion, selectedQuestion, selectedQuestionIndex, answerHistory } =
    useQuestions();
  const [selectedAnswerId, setSelectedAnswerId] = useState<string>();

  useEffect(() => {
    if (answerHistory?.length > 0) {
      const previousAnswerId = answerHistory[selectedQuestionIndex]?.id;
      setSelectedAnswerId(previousAnswerId);
    }
  }, [selectedQuestionIndex]);

  const handleChangeAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswerId(event.target.value);
  };

  const handleSubmitAnswer = (event: FormEvent<HTMLFormElement>) => {
    const targetElement = event.target as EventTarget;
    onAnswer(targetElement.answers.value);
    if (selectedQuestionIndex + 1 === questions?.length) {
      navigate("/results", { replace: true });
    } else {
      onChangeQuestion(selectedQuestionIndex + 1);
    }

    event.preventDefault();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmitAnswer}>
        <Text type="p" size="large" fontWeight={500} marginVertical="small">
          {selectedQuestion ? selectedQuestion.title : "Loading..."}
        </Text>
        {selectedQuestion ? (
          selectedQuestion.answers.map((answer) => (
            <AnswerItem
              answer={answer}
              selectedAnswerId={selectedAnswerId}
              handleChangeAnswer={handleChangeAnswer}
              key={answer.id}
            />
          ))
        ) : (
          <span />
        )}
        <QuestionFooter>
          <Button
            Icon={FaChevronRight}
            iconAlignment="right"
            type="submit"
            disabled={!questions || !selectedAnswerId}
          >
            {selectedQuestionIndex + 1 === questions?.length ? "See Results" : "Next"}
          </Button>
        </QuestionFooter>
      </Form>
    </Container>
  );
};

export default QuestionForm;
