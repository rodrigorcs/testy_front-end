import React, { FC, ReactNode } from "react";

import styled, { css } from "styled-components";

import getSpacingStyles, { SizingPropType, SpacingProps } from "../utils/spacingStyles";

interface StyledTextProps extends SpacingProps {
  color?: string;
  size?: SizingPropType;
  children: ReactNode;
  theme?: any;
}

const getCommonTextStyles = (props: StyledTextProps) => css`
  white-space: pre-line;
  color: ${props.color
    ? props.theme.colors[props.color.split(".")[0]][props.color.split(".")[1]]
    : props.theme.colors.neutral.n100};
  ${props.size &&
  css`
    font-size: ${props.theme.sizing[props.size]};
  `}
`;

const H1: FC<StyledTextProps> = styled("h1")<StyledTextProps>`
  ${(props) => getSpacingStyles(props)}

  font-size: ${({ theme }) => theme.sizing.xxxlarge};
  ${(props) => getCommonTextStyles(props)}

  font-weight: 600;

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
  ${(props) => getCommonTextStyles(props)}

  font-weight: 500;

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
  ${(props) => getCommonTextStyles(props)}

  font-weight: 500;

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
