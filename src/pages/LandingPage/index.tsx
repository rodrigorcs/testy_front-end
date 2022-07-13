import React, { FC, ReactNode } from "react";

import styled from "styled-components";

import Header from "../../components/Header";
import Text from "../../components/Text";

const Container: FC<{ children: ReactNode }> = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.b100};
`;

const LandingPage: FC = () => {
  return (
    <Container>
      <Header />
      <Text type="h1" marginTop="small" marginLeft="large">
        Are you more of an <br /> <span>introvert</span> or <span>extrovert</span>?
      </Text>
    </Container>
  );
};

export default LandingPage;
