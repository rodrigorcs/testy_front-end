import React, {
  FC,
  ReactNode,
  ChangeEvent,
  FormEvent,
  HTMLProps,
  useState,
  FormEventHandler,
  HTMLAttributeAnchorTarget,
} from "react";

import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { darken } from "polished";
import { FaChevronLeft, FaCheckCircle, FaRegCircle } from "react-icons/fa";

import getSpacingStyles, { SpacingProps } from "../../components/utils/spacingStyles";
import theme from "../../theme";

import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/Header";
import PageContent from "../../components/PageContent";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

import illustrationFaqSrc from "../../assets/illustration-faq.svg";
import ProgressBar from "../../components/ProgressBar";
import { useFetch } from "../../hooks/useFetch";
import { useQuestions } from "../../hooks/useQuestions";

interface SubheaderProps extends SpacingProps {
  children: ReactNode;
}

const Subheader: FC<SubheaderProps> = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SubheaderNavigation: FC<SubheaderProps> = styled.div`
  ${(props) => getSpacingStyles(props)}
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const QuestionWrapper: FC<SubheaderProps> = styled.section`
  ${(props) => getSpacingStyles(props)}
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 32em;
`;

interface FormProps extends SpacingProps, HTMLProps<HTMLFormElement> {
  children: ReactNode;
}

const Form: FC<FormProps> = styled.form`
  ${(props) => getSpacingStyles(props)}
  width: 100%;

  & > :not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing.xsmall};
  }
`;

interface LabelProps extends HTMLProps<HTMLLIElement> {
  isChecked: boolean;
  children: ReactNode;
}

const Label: FC<LabelProps> = styled("label")<LabelProps>`
  display: flex;
  width: 100%;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.regular};
  background-color: ${({ theme }) => theme.colors.neutral.n600};
  color: ${({ theme }) => theme.colors.neutral.n200};
  border-radius: ${({ theme }) => theme.sizing.xxsmall};
  border: 1px solid ${({ theme }) => theme.colors.neutral.n500};

  ${({ theme, isChecked }) =>
    isChecked &&
    css`
      background-color: ${({ theme }) => theme.colors.main};
      color: ${({ theme }) => theme.colors.white};
    `}

  input {
    margin-right: ${({ theme }) => theme.spacing.xsmall};
  }

  transition: background-color 0.2s, color 0.2s;
`;

const QuestionFooter: FC<{ children: ReactNode }> = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const illustrations = [{ src: illustrationFaqSrc, marginRight: "2em", positionY: "-9em", height: "9em" }];

type Answer = {
  title: string;
  value: number;
  id: string;
};

type Question = {
  title: string;
  id: string;
  answers: Answer[];
};

interface EventTarget extends HTMLFormElement {
  answers: RadioNodeList;
}

const QuestionsPage: FC = () => {
  const { questions, onAnswer, onChangeQuestion, selectedQuestion, selectedQuestionIndex } = useQuestions();
  const [selectedAnswerId, setSelectedAnswerId] = useState<string>();

  const handleGoToPreviousQuestion = () => {
    onChangeQuestion(selectedQuestionIndex - 1);
  };

  const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswerId(event.target.value);
  };

  const handleAnswerSubmit = (event: FormEvent<HTMLFormElement>) => {
    const targetElement = event.target as EventTarget;
    onAnswer(targetElement.answers.value);
    onChangeQuestion(selectedQuestionIndex + 1);

    event.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Header hasBorder />
      <PageContent padding="xxlarge" alignment="center">
        <Subheader>
          <ProgressBar
            filledItems={selectedQuestionIndex + 1}
            totalItems={questions ? questions.length : 0}
          />
          <SubheaderNavigation marginTop="large">
            <Button
              text
              textColor="neutral.n300"
              Icon={FaChevronLeft}
              onClick={handleGoToPreviousQuestion}
              disabled={selectedQuestionIndex <= 0}
            >
              Previous
            </Button>
            <Text type="p" size="small" color="neutral.n300">
              Are you more of an introvert or extrovert?
            </Text>
          </SubheaderNavigation>
        </Subheader>
        <QuestionWrapper>
          <Text type="p" size="small" color="neutral.n300">
            QUESTION {selectedQuestionIndex + 1} OF {questions ? questions.length : 0}
          </Text>
          <Text type="p" size="large" marginTop="small">
            {selectedQuestion ? selectedQuestion.title : "Loading..."}
          </Text>
          <Form marginTop="large" onSubmit={handleAnswerSubmit}>
            {selectedQuestion ? (
              selectedQuestion.answers.map((answer) => {
                return (
                  <Label key={answer.id} isChecked={answer.id === selectedAnswerId}>
                    <input type="radio" name="answers" value={answer.id} onChange={handleAnswerChange} />
                    {answer.title}
                  </Label>
                );
              })
            ) : (
              <span />
            )}
            <QuestionFooter>
              <Button
                big
                marginTop="large"
                type="submit"
                disabled={!questions || selectedQuestionIndex >= questions.length - 1}
              >
                Next
              </Button>
            </QuestionFooter>
          </Form>
        </QuestionWrapper>
      </PageContent>
      <Footer illustrations={illustrations} />
    </PageWrapper>
  );
};

export default QuestionsPage;
