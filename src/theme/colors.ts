type Background = {
  b100: string;
  b200: string;
};

type Main = {
  m100: string;
};

type Secondary = {
  s100: string;
  s200: string;
  s300: string;
};

type Neutral = {
  n100: string;
  n200: string;
  n300: string;
  n400: string;
  n500: string;
  n600: string;
};

type Black = {
  b100: string;
};

type White = {
  w100: string;
};

type Auxiliary = {
  info: string;
  success: string;
  warning: string;
  error: string;
};

export type Colors = {
  background: Background;
  main: Main;
  secondary: Secondary;
  neutral: Neutral;
  black: Black;
  white: White;
  auxiliary: Auxiliary;
};

const colors: Colors = {
  background: {
    b100: "#F6F5EE",
    b200: "#FDFDFC",
  },
  main: { m100: "#2A9D8F" },
  secondary: {
    s100: "#BB9331",
    s200: "#E9C46A",
    s300: "#F3EBD4",
  },
  neutral: {
    n100: "#1E353F",
    n200: "#505A5E",
    n300: "#ADADAD",
    n400: "#E5E5E5",
    n500: "#F1F1F1",
    n600: "#FCFCFC",
  },
  black: { b100: "#000000" },
  white: { w100: "#FFFFFF" },
  auxiliary: {
    info: "#3B7DFF",
    success: "#33AF00",
    warning: "#EC870F",
    error: "#DB634F",
  },
};

export default colors;
