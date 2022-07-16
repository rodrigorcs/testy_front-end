import colors, { Colors } from "./colors";
import sizing, { Sizes } from "./sizing";
import spacing, { Spaces } from "./spacing";

export type Theme = {
  colors: Colors;
  sizing: Sizes;
  spacing: Spaces;
};

const theme: Theme = {
  colors,
  sizing,
  spacing,
};

export default theme;
