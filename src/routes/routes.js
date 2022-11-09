import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllService from "../pages/AllService";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => fetch("http://localhost:4000/"),
      },
      {
        path: "/services",
        element: <AllService></AllService>,
        loader: async () => fetch("http://localhost:4000/all"),
      },
      {
        path: "/services/:id ",
      },
    ],
  },
]);

export default router;
