import React, { FC, ReactNode } from "react";

import styled, { css } from "styled-components";

import illustrationSrc1 from "../../assets/illustration-reading.svg";
import illustrationSrc2 from "../../assets/illustration-a_day_off.svg";
import getSpacingStyles, { SpacingProps } from "../utils/spacingStyles";

interface ContainerProps {
  color?: boolean;
  children: ReactNode;
}

const Container: FC<ContainerProps> = styled("header")<ContainerProps>`
  // default style
  padding: 0 ${({ theme }) => theme.spacing.xxlarge};
  height: 6em;
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
  hasBorder?: boolean;
}

const Footer: FC<FooterProps> = (props) => {
  return (
    <Container>
      <Illustration src={illustrationSrc1} marginLeft="2em" positionY="-7.2em" height="9em" />
      <Illustration src={illustrationSrc2} marginRight="0em" positionY="-25.9em" height="28em" />
    </Container>
  );
};

export default Footer;
