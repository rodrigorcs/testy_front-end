import React, { FC, MutableRefObject } from "react";

type RefElement = HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement;

export default interface DefaultProps {
  ref?: MutableRefObject<RefElement>;
  innerRef?: MutableRefObject<RefElement>;
}
