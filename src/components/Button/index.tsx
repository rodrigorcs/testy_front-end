import React, { FC } from "react";

import styled, { css } from "styled-components";
import { darken, transparentize } from "polished";
import getSpacingStyles, { SpacingProps } from "../utils/spacingStyles";

interface ButtonProps extends SpacingProps {
  light?: boolean;
  big?: boolean;
  children: string;
}

const StyledButton: FC<ButtonProps> = styled("button")<ButtonProps>`
  // default style
  ${(props) => getSpacingStyles(props)}
  padding: ${({ theme }) => `${theme.spacing.xxsmall} ${theme.spacing.large}`};
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: ${({ theme }) => theme.sizing.xxxsmall};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizing.small};
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

  // big variant
      ${({ theme, big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.sizing.regular};
      padding: ${theme.spacing.xsmall} ${theme.spacing.large};
    `}

  // animations
  transition: background-color .2s;
`;

const Button: FC<ButtonProps> = ({ light, big, children, ...props }) => {
  return (
    <StyledButton light={light} big={big} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
