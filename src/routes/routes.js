import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../pages/AddService";
import AllService from "../pages/AllService";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyReview from "../pages/MyReview";
import PrivateRoute from "../pages/PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import Signup from "../pages/Signup";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
