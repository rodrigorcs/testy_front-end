import { AnimatePresence, motion } from "framer-motion";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import getSpacingStyles, { SpacingProps } from "../utils/spacingStyles";

type Animation = {
  x: number;
  opacity: number;
};

type Transition = {
  duration: number;
};

interface PageContentProps extends SpacingProps {
  alignment?: "flex-start" | "center" | "flex-end";
  initial?: Animation;
  animate?: Animation;
  exit?: Animation;
  transition?: Transition;
  children: ReactNode;
}

const StyledPageContent: FC<PageContentProps> = styled(motion.div)<PageContentProps>`
  ${(props) => getSpacingStyles(props)}
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${({ alignment }) => alignment || "flex-start"};
  z-index: 2;
`;

const PageContent: FC<PageContentProps> = ({ alignment, children, ...props }) => {
  return (
    <AnimatePresence>
      <StyledPageContent
        initial={{ x: -6, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        alignment={alignment}
        {...props}
      >
        {children}
      </StyledPageContent>
    </AnimatePresence>
  );
};

export default PageContent;
