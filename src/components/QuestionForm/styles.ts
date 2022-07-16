import { darken } from "polished";
import { FC, HTMLProps, ReactNode } from "react";
import styled, { css } from "styled-components";

import getSpacingStyles, { SpacingProps } from "../utils/spacingStyles";

interface ContainerProps extends SpacingProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = styled.section`
  ${(props) => getSpacingStyles(props)}
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 36em;
`;

interface FormProps extends SpacingProps, HTMLProps<HTMLFormElement> {
  children: ReactNode;
}

export const Form: FC<FormProps> = styled.form`
  ${(props) => getSpacingStyles(props)}
  width: 100%;

  & > :not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing.xsmall};
  }
`;

interface LabelProps extends HTMLProps<HTMLLIElement> {
  isChecked: boolean;
  children: ReactNode;
}

export const Label: FC<LabelProps> = styled("label")<LabelProps>`
  display: flex;
  width: 100%;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.regular};
  background-color: ${({ theme }) => theme.colors.neutral.n600};
  color: ${({ theme }) => theme.colors.neutral.n200};
  border-radius: ${({ theme }) => theme.sizing.xxsmall};
  border: 1px solid ${({ theme }) => theme.colors.neutral.n500};
  user-select: none;

  div {
    width: ${({ theme }) => theme.sizing.small};
    height: ${({ theme }) => theme.sizing.small};
    align-items: center;
    justify-content: center;
    border: 0.125em solid ${({ theme }) => theme.colors.neutral.n300};
    border-radius: 50%;
    margin-right: ${({ theme }) => theme.spacing.xsmall};

    transition: border-color 0.2s;
  }

  svg {
    width: ${({ theme }) => theme.sizing.small};
    height: ${({ theme }) => theme.sizing.small};
    position: relative;
    top: -0.225em;
    left: -0.125em;
    color: transparent;

    transition: color 0.2s;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  :hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.neutral.n600)};
    color: ${({ theme }) => theme.colors.neutral.n100};
    div {
      border-color: ${({ theme }) => theme.colors.neutral.n200};
    }
  }

  ${({ theme, isChecked }) =>
    isChecked &&
    css`
      background-color: ${theme.colors.main.m100};
      color: ${theme.colors.white.w100};
      div {
        border-color: ${theme.colors.white.w100};
        svg {
          color: ${theme.colors.white.w100};
        }
      }
      :hover {
        background-color: ${darken(0.1, theme.colors.main.m100)};
        color: ${theme.colors.white.w100};
        div {
          border-color: ${theme.colors.white.w100};
          svg {
            color: ${theme.colors.white.w100};
          }
        }
      }
    `}

  transition: background-color 0.2s, color 0.2s;
`;

export const QuestionFooter: FC<{ children: ReactNode }> = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
