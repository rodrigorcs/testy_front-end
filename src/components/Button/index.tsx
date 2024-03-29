import { darken, transparentize } from "polished";
import React, { FC, HTMLProps, ReactNode } from "react";
import { IconType } from "react-icons";
import styled, { css } from "styled-components";

import getSpacingStyles, { SpacingProps } from "../utils/spacingStyles";

interface StyledButtonProps extends SpacingProps, HTMLProps<HTMLButtonElement> {
  light?: boolean;
  big?: boolean;
  text?: boolean;
  textColor?: string;
  iconAlignment: string;
  children: ReactNode | string;
}

const StyledButton: FC<StyledButtonProps> = styled("button")<StyledButtonProps>`
  // default style
  ${(props) => getSpacingStyles(props)}
  padding: ${({ theme }) => `${theme.spacing.xxsmall} ${theme.spacing.large}`};
  background-color: ${({ theme }) => theme.colors.main.m100};
  border-radius: ${({ theme }) => theme.sizing.xxxsmall};
  color: ${({ theme }) => theme.colors.white.w100};
  font-size: ${({ theme }) => theme.sizing.small};
  font-weight: 500;
  user-select: none;

  :hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.main.m100)};
    color: ${({ theme }) => theme.colors.white.w100};
  }
  :disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.colors.neutral.n500};
    color: ${({ theme }) => theme.colors.neutral.n300};
  }

  // light variant
  ${({ theme, light }) =>
    light &&
    css`
      background-color: ${transparentize(0.9, theme.colors.main.m100)};
      color: ${theme.colors.main.m100};
    `}

  // big variant
      ${({ theme, big }) =>
    big &&
    css`
      font-size: ${theme.sizing.regular};
      padding: ${theme.spacing.small} ${theme.spacing.large};
    `}

  // text variant
  ${({ theme, text, textColor }) =>
    text &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      padding: ${`${theme.spacing.xxsmall} ${theme.spacing.small}`};
      background-color: transparent;
      color: ${textColor
        ? theme.colors[textColor.split(".")[0]][textColor.split(".")[1]]
        : theme.colors.neutral.n100};
      text-transform: uppercase;
      :hover {
        background-color: ${transparentize(0.9, theme.colors.main.m100)};
        color: ${theme.colors.main.m100};
      }
      :disabled {
        background-color: transparent;
        color: ${theme.colors.neutral.n300};
      }
    `}

    ${({ theme, iconAlignment }) =>
    iconAlignment === "left" &&
    css`
      svg {
        margin-right: ${theme.spacing.xsmall};
      }
    `}
    ${({ theme, iconAlignment }) =>
    iconAlignment === "right" &&
    css`
      svg {
        margin-left: ${theme.spacing.xsmall};
      }
    `}

  // animations
  transition: background-color 0.2s, color 0.2s;
`;

interface ButtonProps extends SpacingProps, HTMLProps<HTMLButtonElement> {
  light?: boolean;
  big?: boolean;
  text?: boolean;
  textColor?: string;
  Icon?: IconType;
  iconAlignment?: "left" | "right";
  children: string;
}

const Button: FC<ButtonProps> = ({
  light,
  big,
  text,
  textColor,
  Icon,
  iconAlignment,
  children,
  ...props
}) => {
  const iconAlignmentVariants = {
    left: (
      <>
        {Icon && <Icon size={12} />}
        {children}
      </>
    ),
    right: (
      <>
        {children}
        {Icon && <Icon size={12} />}
      </>
    ),
  };

  return (
    <StyledButton
      light={light}
      big={big}
      text={text}
      textColor={textColor}
      iconAlignment={iconAlignment === "right" ? "right" : "left"}
      {...props}
    >
      {iconAlignment ? iconAlignmentVariants[iconAlignment] : iconAlignmentVariants.left}
    </StyledButton>
  );
};

export default Button;
