import React, { FC } from "react";

import { BrowserRouter, Routes, useRoutes } from "react-router-dom";
import GlobalStyle from "./theme/global";
import { ThemeProvider } from "styled-components";

import theme from "./theme";
import routes from "./routes";

const Router: FC = () => {
  return useRoutes(routes);
};

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
