import React, { FC } from "react";

import { BrowserRouter, Routes, useRoutes } from "react-router-dom";
import GlobalStyle from "./theme/global";
import { ThemeProvider } from "styled-components";

import theme from "./theme";
import routes from "./routes";
import { QuestionsProvider } from "./context/QuestionsContext";

const Router: FC = () => {
  return useRoutes(routes);
};

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <QuestionsProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </QuestionsProvider>
    </ThemeProvider>
  );
};

export default App;
