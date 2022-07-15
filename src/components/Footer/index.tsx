import React, { FC, ReactNode } from "react";

import styled, { css } from "styled-components";

interface ContainerProps {
  color?: boolean;
  children: ReactNode;
}

const Container: FC<ContainerProps> = styled("footer")<ContainerProps>`
  // default style
  padding: 0 ${({ theme }) => theme.spacing.xxlarge};
  height: 6em;
  min-height: 2em;
  background-color: ${({ theme }) => theme.colors.secondary.s300};
`;

interface IllustrationProps {
  src: string;
  height: string;
  positionY: string;
  marginLeft?: string;
  marginRight?: string;
}

const Illustration: FC<IllustrationProps> = styled("img")<IllustrationProps>`
  position: relative;
  top: ${({ positionY }) => positionY};
  height: ${({ height }) => height};
  z-index: 1;

  ${({ marginLeft }) =>
    marginLeft &&
    css`
      float: left;
      margin-left: ${marginLeft};
    `}

  ${({ marginRight }) =>
    marginRight &&
    css`
      float: right;
      margin-right: ${marginRight};
    `}
`;

interface FooterProps {
  illustrations?: IllustrationProps[];
}

const Footer: FC<FooterProps> = ({ illustrations }) => {
  return (
    <Container>
      {illustrations?.map((illustration) => (
        <Illustration {...illustration} key={illustration.src} />
      ))}
    </Container>
  );
};

export default Footer;
