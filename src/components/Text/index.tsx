import React, { FC, ReactNode } from "react";

import styled, { css } from "styled-components";

import getSpacingStyles, { SpacingProps } from "../utils/spacingStyles";

interface StyledTextProps extends SpacingProps {
  color?: string;
  children: ReactNode;
}

const H1: FC<StyledTextProps> = styled("h1")<StyledTextProps>`
  ${(props) => getSpacingStyles(props)}
  font-size: ${({ theme }) => theme.sizing.xxxlarge};
  font-weight: 500;
  color: ${({ theme, color }) => (color ? color : theme.colors.neutral.n100)};

  span {
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.secondary.s200};
    text-decoration-thickness: 3px;
    text-underline-offset: 0.25rem;
  }
`;

const H2: FC<StyledTextProps> = styled("h2")<StyledTextProps>`
  ${(props) => getSpacingStyles(props)}
  font-size: ${({ theme }) => theme.sizing.xxlarge};
  font-weight: 500;
  color: ${({ theme, color }) => (color ? color : theme.colors.neutral.n100)};
`;

const P: FC<StyledTextProps> = styled("p")<StyledTextProps>`
  ${(props) => getSpacingStyles(props)}
  font-size: ${({ theme }) => theme.sizing.xxlarge};
  font-weight: 500;
  color: ${({ theme, color }) => (color ? color : theme.colors.neutral.n100)};
`;

interface TextProps extends StyledTextProps {
  type: "h1" | "h2" | "p";
}

const Text: FC<TextProps> = ({ children, type, ...props }) => {
  const textTypes = {
    h1: <H1 {...props}>{children}</H1>,
    h2: <H2 {...props}>{children}</H2>,
    p: <P {...props}>{children}</P>,
  };

  return textTypes[type];
};

export default Text;
