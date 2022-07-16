import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import getSpacingStyles, { SpacingProps } from "../utils/spacingStyles";

interface PageContentProps extends SpacingProps {
  alignment?: "flex-start" | "center" | "flex-end";
  children: ReactNode;
}

const StyledPageContent: FC<PageContentProps> = styled("div")<PageContentProps>`
  ${(props) => getSpacingStyles(props)}
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({ alignment }) => alignment || "flex-start"};
  z-index: 2;
`;

const PageContent: FC<PageContentProps> = ({ alignment, children, ...props }) => {
  return (
    <StyledPageContent alignment={alignment} {...props}>
      {children}
    </StyledPageContent>
  );
};

export default PageContent;
