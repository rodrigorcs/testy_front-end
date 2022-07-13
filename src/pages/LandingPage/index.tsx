import React, { FC, ReactNode, MutableRefObject, useRef, useState, useLayoutEffect } from "react";

import styled from "styled-components";

import getSpacingStyles, { SpacingProps } from "../../components/utils/spacingStyles";
import Header from "../../components/Header";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

const Container: FC<{ children: ReactNode }> = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.b100};
`;

interface PageContentProps extends SpacingProps {
  children: ReactNode;
}

const PageContent: FC<PageContentProps> = styled.div`
  ${(props) => getSpacingStyles(props)}
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
`;

interface TextContainerProps extends SpacingProps {
  children: ReactNode;
}

const TextContainer: FC<TextContainerProps> = styled.div`
  max-width: 49em;
  display: flex;
  flex-direction: column;
  & :not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing.regular};
  }
`;

const LandingPage: FC = () => {
  return (
    <Container>
      <Header />
      <PageContent padding="xxxlarge">
        <TextContainer>
          <Text type="h1">
            Are you more of an <span>introvert</span> or <span>extrovert</span>?
          </Text>
          <Text type="p" color="neutral.n200" size="regular">
            We all know that understanding who you are is a big step in the way to become successful in any
            aspect of your life. Let’s see how do you fit into the introvert/extrovert spectrum!
          </Text>
        </TextContainer>
        <Button big marginTop="xxlarge">
          Take me to the Test!
        </Button>
      </PageContent>
      <Footer />
    </Container>
  );
};

export default LandingPage;
