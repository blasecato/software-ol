import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Page404 from "../../components/404/404";
import Dashboard from "./dashboard/Dashboard";
import Projects from "./projects/Projects";
import Users from "./users/Users";
import Roles from "./roles/Roles";

const PrivateRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/roles",
        element: <Roles />,
      },
    ],
  },
]);

export default PrivateRoute;
