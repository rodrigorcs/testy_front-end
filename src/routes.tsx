import LandingPage from "./pages/LandingPage";
import InstructionsPage from "./pages/InstructionsPage";
import QuestionsPage from "./pages/QuestionsPage";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  { path: "/instructions", element: <InstructionsPage /> },
  { path: "/questions", element: <QuestionsPage /> },
];

export default routes;
