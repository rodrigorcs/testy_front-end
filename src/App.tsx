import React, { FC } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./theme/global";
import { ThemeProvider } from "styled-components";

import theme from "./theme";

import LandingPage from "./pages/LandingPage";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route index element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
