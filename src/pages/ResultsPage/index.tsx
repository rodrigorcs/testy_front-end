import React, { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import illustrationExtrovert from "../../assets/illustration-off_road.svg";
import illustrationIntrovert from "../../assets/illustration-tree_swing.svg";
import Button from "../../components/Button";
import ContactCard from "../../components/ContactCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageContent from "../../components/PageContent";
import PageWrapper from "../../components/PageWrapper";
import Text from "../../components/Text";
import { SpacingProps } from "../../components/utils/spacingStyles";
import useQuestions from "../../hooks/useQuestions";

interface TextWrapperProps extends SpacingProps {
  children: ReactNode;
}

const TextWrapper: FC<TextWrapperProps> = styled.section`
  max-width: 46em;
  display: flex;
  flex-direction: column;
  & > :not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing.regular};
  }
`;

const ButtonsWrapper: FC<{ children: ReactNode }> = styled.div`
  & > :not(:first-child) {
    margin-left: ${({ theme }) => theme.spacing.xxsmall};
  }
`;

const illustrations = {
  introvert: {
    src: illustrationIntrovert,
    marginRight: "0",
    positionY: "calc(-100vh + 6em)",
    height: "calc(100vh - 6em)",
  },
  extrovert: {
    src: illustrationExtrovert,
    marginRight: "5em",
    positionY: "-22.6em",
    height: "28em",
  },
};

const ResultsPage: FC = () => {
  const { result, resetState } = useQuestions();
  const navigate = useNavigate();

  const handleRetryTest = () => {
    resetState();
    navigate("/instructions", { replace: true });
  };

  return (
    <PageWrapper>
      <Header hasBorder backgroundColor="white.w100" />
      <PageContent paddingHorizontal="xxxlarge" paddingVertical="xxlarge">
        <TextWrapper>
          <Text type="h1" size="xxxlarge">
            You are more of an <span>{result?.title}</span>.
          </Text>
          <Text type="p" size="regular" marginVertical="large">
            {result?.description}
          </Text>
        </TextWrapper>
        <ButtonsWrapper>
          <Button light onClick={handleRetryTest}>
            Retry the test
          </Button>
          <Button>Share results</Button>
        </ButtonsWrapper>
        <TextWrapper>
          <Text type="h1" size="xxlarge" marginTop="xlarge">
            {result?.contactTitle}
          </Text>
          <Text type="p" size="regular" marginVertical="regular">
            Have a call from Lisa and start improving yourself!
          </Text>
        </TextWrapper>
        <ContactCard />
      </PageContent>
      <Footer illustrations={result ? [illustrations[result.title]] : []} />
    </PageWrapper>
  );
};

export default ResultsPage;
