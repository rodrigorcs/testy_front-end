import React, { FC, ReactNode } from "react";

import styled, { css } from "styled-components";

import { validateBooleanProp } from "../../utils/validateProp";
import logoSrc from "../../assets/testy-logo.svg";
import Button from "../Button";

interface ContainerProps {
  hasBorder: boolean;
  children: ReactNode;
}

const Container: FC<ContainerProps> = styled("header")<ContainerProps>`
  // default style
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.xxlarge} !important;
  min-height: 4em;
  height: 4em;

  // hasBorder variant
  ${({ theme, hasBorder }) =>
    hasBorder &&
    css`
      border-bottom: 1px solid ${theme.colors.neutral.n400};
    `}
`;

interface LogoProps {
  src?: string;
}

const Logo: FC<LogoProps> = styled.img`
  height: ${({ theme }) => theme.sizing.xlarge};
`;

const ButtonsWrapper: FC<{ children: ReactNode }> = styled.div`
  & > :not(:first-child) {
    margin-left: ${({ theme }) => theme.spacing.xxsmall};
  }
`;

interface HeaderProps {
  hasBorder?: boolean;
}

const Header: FC<HeaderProps> = ({ hasBorder }) => {
  hasBorder = validateBooleanProp(hasBorder);
  return (
    <Container hasBorder={hasBorder}>
      <Logo src={logoSrc} />
      <ButtonsWrapper>
        <Button light>Sign Up</Button>
        <Button>Sign In</Button>
      </ButtonsWrapper>
    </Container>
  );
};

export default Header;
