import React, { FC, HTMLProps, ReactNode } from "react";

import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

import { validateBooleanProp } from "../../utils/validateProp";
import { useQuestions } from "../../hooks/useQuestions";
import logoSrc from "../../assets/logo-testy.svg";
import Button from "../Button";

interface ContainerProps extends HeaderProps {
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
  z-index: 2;

  // hasBorder variant
  ${({ theme, hasBorder }) =>
    hasBorder &&
    css`
      border-bottom: 1px solid ${theme.colors.neutral.n400};
    `}

  ${({ theme, backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${theme.colors[backgroundColor]};
    `}
`;

interface LogoProps extends HTMLProps<HTMLImageElement> {
  src?: string;
}

const Logo: FC<LogoProps> = styled.img`
  height: ${({ theme }) => theme.sizing.xlarge};
  cursor: pointer;
`;

const ButtonsWrapper: FC<{ children: ReactNode }> = styled.div`
  & > :not(:first-child) {
    margin-left: ${({ theme }) => theme.spacing.xxsmall};
  }
`;

interface HeaderProps {
  hasBorder?: boolean;
  backgroundColor?: string;
}

const Header: FC<HeaderProps> = ({ hasBorder, backgroundColor }) => {
  const navigate = useNavigate();
  const { resetState } = useQuestions();
  hasBorder = validateBooleanProp(hasBorder);

  const handleLogoClick = () => {
    resetState();
    navigate("/", { replace: true });
  };

  return (
    <Container hasBorder={hasBorder} backgroundColor={backgroundColor}>
      <Logo src={logoSrc} onClick={handleLogoClick} />
      <ButtonsWrapper>
        <Button light>Sign Up</Button>
        <Button>Sign In</Button>
      </ButtonsWrapper>
    </Container>
  );
};

export default Header;
