import React, { FC, ReactNode } from "react";

import styled, { css } from "styled-components";

import getSpacingStyles, { SizingPropType, SpacingProps } from "../utils/spacingStyles";

interface StyledTextProps extends SpacingProps {
  color?: string;
  size?: SizingPropType;
  fontWeight?: 300 | 400 | 500 | 600 | 700;
  children: ReactNode;
  theme?: any;
}

const getCommonTextStyles = ({ color, size, fontWeight, theme }: StyledTextProps) => css`
  white-space: pre-line;
  color: ${color
    ? color.includes(".")
      ? theme.colors[color.split(".")[0]][color.split(".")[1]]
      : theme.colors[color]
    : theme.colors.neutral.n100};
  ${size &&
  css`
    font-size: ${theme.sizing[size]};
  `}
  ${fontWeight &&
  css`
    font-weight: ${fontWeight};
  `}
`;

const H1: FC<StyledTextProps> = styled("h1")<StyledTextProps>`
  ${(props) => getSpacingStyles(props)}

  font-size: ${({ theme }) => theme.sizing.xxxxlarge};
  font-weight: 600;
  ${(props) => getCommonTextStyles(props)}

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
  font-weight: 600;
  ${(props) => getCommonTextStyles(props)}

  span {
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.secondary.s200};
    text-decoration-thickness: 2px;
    text-underline-offset: 0.15rem;
  }
`;

const P: FC<StyledTextProps> = styled("p")<StyledTextProps>`
  ${(props) => getSpacingStyles(props)}

  font-size: ${({ theme }) => theme.sizing.regular};
  font-weight: 400;
  ${(props) => getCommonTextStyles(props)}

  span {
    font-weight: 700;
  }
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
