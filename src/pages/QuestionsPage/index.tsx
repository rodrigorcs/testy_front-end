import React, { FC, ReactNode } from "react";
import { FaChevronLeft } from "react-icons/fa";
import styled from "styled-components";

import illustrationFaqSrc from "../../assets/illustration-faq.svg";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageContent from "../../components/PageContent";
import PageWrapper from "../../components/PageWrapper";
import ProgressBar from "../../components/ProgressBar";
import QuestionForm from "../../components/QuestionForm";
import Text from "../../components/Text";
import getSpacingStyles, { SpacingProps } from "../../components/utils/spacingStyles";
import useQuestions from "../../hooks/useQuestions";

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

const illustrations = [{ src: illustrationFaqSrc, marginRight: "2em", positionY: "-9em", height: "9em" }];

const QuestionsPage: FC = () => {
  const { questions, onChangeQuestion, selectedQuestionIndex } = useQuestions();

  const handleGoToPreviousQuestion = () => {
    onChangeQuestion(selectedQuestionIndex - 1);
  };

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
            <Text type="p" size="small" fontWeight={500} color="neutral.n300">
              Are you more of an introvert or extrovert?
            </Text>
          </SubheaderNavigation>
        </Subheader>
        <Text type="p" size="small" fontWeight={500} color="neutral.n300" marginTop="regular">
          QUESTION {selectedQuestionIndex + 1} OF {questions ? questions.length : 0}
        </Text>
        <QuestionForm />
      </PageContent>
      <Footer illustrations={illustrations} />
    </PageWrapper>
  );
};

export default QuestionsPage;
