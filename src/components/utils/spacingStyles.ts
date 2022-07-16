import { css } from "styled-components";

import { Theme } from "../../theme";

export type SizingPropType =
  | "xxxsmall"
  | "xxsmall"
  | "xsmall"
  | "small"
  | "regular"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "xxxlarge";

export interface SpacingProps {
  margin?: SizingPropType;
  marginHorizontal?: SizingPropType;
  marginVertical?: SizingPropType;
  marginTop?: SizingPropType;
  marginRight?: SizingPropType;
  marginBottom?: SizingPropType;
  marginLeft?: SizingPropType;

  padding?: SizingPropType;
  paddingHorizontal?: SizingPropType;
  paddingVertical?: SizingPropType;
  paddingTop?: SizingPropType;
  paddingRight?: SizingPropType;
  paddingBottom?: SizingPropType;
  paddingLeft?: SizingPropType;
}

interface ComponentProps extends SpacingProps {
  theme: Theme;
}

const getSpacingStyles = (props: ComponentProps) => css`
  // margins
  margin-top: ${props.marginTop ? props.theme.spacing[props.marginTop] : ""};
  margin-right: ${props.marginRight ? props.theme.spacing[props.marginRight] : ""};
  margin-bottom: ${props.marginBottom ? props.theme.spacing[props.marginBottom] : ""};
  margin-left: ${props.marginLeft ? props.theme.spacing[props.marginLeft] : ""};

  ${props.marginHorizontal
    ? css`
        margin-right: ${props.theme.spacing[props.marginHorizontal]};
        margin-left: ${props.theme.spacing[props.marginHorizontal]};
      `
    : ""}

  ${props.marginVertical
    ? css`
        margin-top: ${props.theme.spacing[props.marginVertical]};
        margin-bottom: ${props.theme.spacing[props.marginVertical]};
      `
    : ""}

  ${props.margin
    ? css`
        margin: ${props.theme.spacing[props.margin]};
      `
    : ""}

  // padding
  padding-top: ${props.paddingTop ? props.theme.spacing[props.paddingTop] : ""};
  padding-right: ${props.paddingRight ? props.theme.spacing[props.paddingRight] : ""};
  padding-bottom: ${props.paddingBottom ? props.theme.spacing[props.paddingBottom] : ""};
  padding-left: ${props.paddingLeft ? props.theme.spacing[props.paddingLeft] : ""};

  ${props.paddingHorizontal
    ? css`
        padding-right: ${props.theme.spacing[props.paddingHorizontal]};
        padding-left: ${props.theme.spacing[props.paddingHorizontal]};
      `
    : ""}

  ${props.paddingVertical
    ? css`
        padding-top: ${props.theme.spacing[props.paddingVertical]};
        padding-bottom: ${props.theme.spacing[props.paddingVertical]};
      `
    : ""}

    ${props.padding
    ? css`
        padding: ${props.theme.spacing[props.padding]};
      `
    : ""}
`;

export default getSpacingStyles;
