import { AnimatePresence } from "framer-motion";
import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { FaCheckCircle, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Answer } from "../../context/QuestionsContext";
import useQuestions from "../../hooks/useQuestions";
import Button from "../Button";
import Text from "../Text";
import { Container, Form, Label, QuestionFooter } from "./styles";

interface EventTarget extends HTMLFormElement {
  answers: RadioNodeList;
}

interface AnswerItemProps {
  answer: Answer;
  selectedAnswerId?: string;
  handleChangeAnswer: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AnswerItem: FC<AnswerItemProps> = ({ answer, selectedAnswerId = "", handleChangeAnswer }) => {
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
  const {
    questions,
    onAnswer,
    onChangeQuestion,
    selectedQuestion,
    selectedQuestionIndex,
    answerHistory,
  } = useQuestions();
  const [selectedAnswerId, setSelectedAnswerId] = useState<string>();

  useEffect(() => {
    if (answerHistory?.length > 0) {
      const previousAnswerId = answerHistory[selectedQuestionIndex]?.id;
      setSelectedAnswerId(previousAnswerId);
    }
  }, [selectedQuestionIndex, answerHistory]);

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
    <AnimatePresence>
      <Container>
        <Form
          onSubmit={handleSubmitAnswer}
          key={selectedQuestionIndex}
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
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
    </AnimatePresence>
  );
};

export default QuestionForm;
