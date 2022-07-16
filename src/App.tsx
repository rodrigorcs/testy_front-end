import React, { FC } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { QuestionsProvider } from "./context/QuestionsContext";
import routes from "./routes";
import theme from "./theme";
import GlobalStyle from "./theme/global";

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
