import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/question/:id", element: <Question /> },
  { path: "/result", element: <Result /> },
]);

export default router;
