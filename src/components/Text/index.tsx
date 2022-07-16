import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

import theme, { Theme } from "../../theme";
import getSpacingStyles, { SizingPropType, SpacingProps } from "../utils/spacingStyles";

interface StyledTextProps extends SpacingProps {
  color?: string;
  size?: SizingPropType;
  fontWeight?: 300 | 400 | 500 | 600 | 700;
  children: ReactNode;
  theme?: Theme;
}

const getCommonTextStyles = ({ color, size, fontWeight }: StyledTextProps) => css`
  white-space: pre-line;
  color: ${color};
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

  font-size: ${theme.sizing.xxxxlarge};
  font-weight: 600;
  ${(props) => getCommonTextStyles(props)}

  span {
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: ${theme.colors.secondary.s200};
    text-decoration-thickness: 3px;
    text-underline-offset: 0.25rem;
  }
`;

const H2: FC<StyledTextProps> = styled("h2")<StyledTextProps>`
  ${(props) => getSpacingStyles(props)}

  font-size: ${theme.sizing.xxlarge};
  font-weight: 600;
  ${(props) => getCommonTextStyles(props)}

  span {
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: ${theme.colors.secondary.s200};
    text-decoration-thickness: 2px;
    text-underline-offset: 0.15rem;
  }
`;

const P: FC<StyledTextProps> = styled("p")<StyledTextProps>`
  ${(props) => getSpacingStyles(props)}

  font-size: ${theme.sizing.regular};
  font-weight: 400;
  ${(props) => getCommonTextStyles(props)}

  span {
    font-weight: 700;
  }
`;

interface TextProps extends StyledTextProps {
  type: "h1" | "h2" | "p";
}

const Text: FC<TextProps> = ({ children, type, color, ...props }) => {
  let textColor = theme.colors.neutral.n100;
  if (color) {
    const mainColor = color.split(".")[0] as keyof typeof theme.colors;
    const subColor = color.split(".")[1] as keyof typeof theme.colors[typeof mainColor];
    textColor = theme.colors[mainColor][subColor];
  }

  const textTypes = {
    h1: (
      <H1 color={textColor} {...props}>
        {children}
      </H1>
    ),
    h2: (
      <H2 color={textColor} {...props}>
        {children}
      </H2>
    ),
    p: (
      <P color={textColor} {...props}>
        {children}
      </P>
    ),
  };

  return textTypes[type];
};

export default Text;
