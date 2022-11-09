import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllService from "../pages/AllService";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";

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
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:4000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
