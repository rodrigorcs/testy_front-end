import React, { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import illustrationDayOffSrc from "../../assets/illustration-a_day_off.svg";
import illustrationReadingSrc from "../../assets/illustration-reading.svg";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageContent from "../../components/PageContent";
import PageWrapper from "../../components/PageWrapper";
import Text from "../../components/Text";
import { SpacingProps } from "../../components/utils/spacingStyles";
import theme from "../../theme";

interface TextWrapperProps extends SpacingProps {
  children: ReactNode;
}

const TextWrapper: FC<TextWrapperProps> = styled.section`
  max-width: 49em;
  display: flex;
  flex-direction: column;
  & > :not(:first-child) {
    margin-top: ${theme.spacing.regular};
  }
`;

const illustrations = [
  { src: illustrationReadingSrc, marginLeft: "4em", positionY: "-7.2em", height: "9em" },
  { src: illustrationDayOffSrc, marginRight: "2em", positionY: "-25.9em", height: "28em" },
];

const LandingPage: FC = () => {
  const navigate = useNavigate();
  const handleGoToInstructions = () => {
    navigate("instructions");
  };
  return (
    <PageWrapper backgroundColor={theme.colors.background.b100}>
      <Header />
      <PageContent padding="xxxlarge">
        <TextWrapper>
          <Text type="h1">
            Are you more of an <span>introvert</span> or <span>extrovert</span>?
          </Text>
          <Text type="p" color="neutral.n200" size="regular">
            We all know that understanding who you are is a big step in the way to become successful in any
            aspect of your life. Let’s see how do you fit into the introvert/extrovert spectrum!
          </Text>
        </TextWrapper>
        <Button big marginTop="xxlarge" onClick={handleGoToInstructions}>
          Take me to the Test!
        </Button>
      </PageContent>
      <Footer illustrations={illustrations} />
    </PageWrapper>
  );
};

export default LandingPage;
