import LandingPage from "./pages/LandingPage";
import InstructionsPage from "./pages/InstructionsPage";
import QuestionsPage from "./pages/QuestionsPage";
import ResultsPage from "./pages/ResultsPage";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  { path: "/instructions", element: <InstructionsPage /> },
  { path: "/questions", element: <QuestionsPage /> },
  { path: "/results", element: <ResultsPage /> },
];

export default routes;
