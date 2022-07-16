import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

interface ProgressBarProps {
  filledItems: number;
  totalItems: number;
}

const StyledProgressBar: FC<{ children: ReactNode }> = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 0.4em;
  & > :not(:first-child) {
    margin-left: ${({ theme }) => theme.spacing.xxsmall};
  }
`;

interface ProgressItemProps {
  isFilled: boolean;
}

const ProgressItem: FC<ProgressItemProps> = styled("span")<ProgressItemProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.neutral.n500};
  border-radius: ${({ theme }) => theme.sizing.xxsmall};

  ${({ theme, isFilled }) =>
    isFilled &&
    css`
      background-color: ${theme.colors.secondary.s200};
    `}
`;

const ProgressBar: FC<ProgressBarProps> = ({ filledItems, totalItems }) => {
  let progressItems: boolean[] = [];
  for (let item = 0; item < totalItems; item += 1)
    progressItems = [...progressItems, item <= filledItems - 1];

  return (
    <StyledProgressBar>
      {progressItems.map((isFilled, index) => (
        // using index as key because it is static, not used as stack or LIFO and never sorted/filtered
        // eslint-disable-next-line react/no-array-index-key
        <ProgressItem isFilled={isFilled} key={index} />
      ))}
    </StyledProgressBar>
  );
};

export default ProgressBar;
