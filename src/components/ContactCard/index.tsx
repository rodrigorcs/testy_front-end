import { transparentize } from "polished";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import contactAvatarSrc from "../../assets/avatar-lisa.svg";
import Button from "../Button";
import Text from "../Text";

const Container: FC<{ children: ReactNode }> = styled.article`
  display: flex;
  padding: ${({ theme }) => theme.spacing.regular};
  border-radius: ${({ theme }) => theme.sizing.xxsmall};
  box-shadow: 0 0.25em 0.75em ${({ theme }) => transparentize(0.9, theme.colors.black.b100)};

  img {
    width: 5.5em;
    height: 5.5em;
    border: 2px solid ${({ theme }) => theme.colors.main.m100};
    border-radius: 50%;
  }

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    margin-left: ${({ theme }) => theme.spacing.regular};

    div {
      flex: 1;
    }
  }
`;

const ContactCard: FC = () => {
  return (
    <Container>
      <img src={contactAvatarSrc} alt="Contact Lisa Abbey" />
      <div>
        <div>
          <Text type="p" color="main.m100" fontWeight={500} size="large">
            Lisa Abbey
          </Text>
          <Text type="p" color="neutral.n200" size="small" marginTop="xxxsmall">
            PhD in Social Psychology
          </Text>
        </div>
        <Button>Schedule a call</Button>
      </div>
    </Container>
  );
};

export default ContactCard;
