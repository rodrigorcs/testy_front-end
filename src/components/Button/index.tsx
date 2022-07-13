import React, { FC } from "react";

import styled, { css } from "styled-components";
import { darken, transparentize } from "polished";

interface ButtonProps {
  light?: boolean;
  big?: boolean;
  children: string;
}

const StyledButton: FC<ButtonProps> = styled("button")<ButtonProps>`
  // default style
  height: ${({ theme }) => theme.sizing.xxlarge};
  padding: 0 ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: ${({ theme }) => theme.sizing.xxxsmall};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  :hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.main)};
    color: ${({ theme }) => theme.colors.white};
  }

  // light variant
  ${({ theme, light }) =>
    light &&
    css`
      background-color: ${transparentize(0.9, theme.colors.main)};
      color: ${({ theme }) => theme.colors.main};
    `}

  // animations
  transition: background-color .2s;
`;

const Button: FC<ButtonProps> = ({ light, big, children }) => {
  return (
    <StyledButton light={light} big={big}>
      {children}
    </StyledButton>
  );
};

export default Button;
