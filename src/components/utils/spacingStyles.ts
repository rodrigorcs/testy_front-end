import { css } from "styled-components";

type SpacingPropType =
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
  margin?: SpacingPropType;
  marginHorizontal?: SpacingPropType;
  marginVertical?: SpacingPropType;
  marginTop?: SpacingPropType;
  marginRight?: SpacingPropType;
  marginBottom?: SpacingPropType;
  marginLeft?: SpacingPropType;

  padding?: SpacingPropType;
  paddingHorizontal?: SpacingPropType;
  paddingVertical?: SpacingPropType;
  paddingTop?: SpacingPropType;
  paddingRight?: SpacingPropType;
  paddingBottom?: SpacingPropType;
  paddingLeft?: SpacingPropType;
}

interface ComponentProps extends SpacingProps {
  theme: any;
}

const getSpacingStyles = (props: ComponentProps) => {
  const styles = css`
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

  return styles;
};

export default getSpacingStyles;
