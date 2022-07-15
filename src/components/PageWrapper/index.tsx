import React, { FC, ReactNode } from "react";

import styled from "styled-components";

import getSpacingStyles, { SpacingProps } from "../../components/utils/spacingStyles";

interface PageWrapperProps {
  children: ReactNode;
  backgroundColor?: string;
}

const StyledPageWrapper: FC<PageWrapperProps> = styled("div")<PageWrapperProps>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.colors.white};
`;

const PageWrapper: FC<PageWrapperProps> = ({ children, ...props }) => {
  return <StyledPageWrapper {...props}>{children}</StyledPageWrapper>;
};

export default PageWrapper;
