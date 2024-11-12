import { createBrowserRouter } from "react-router-dom";
import { Login } from "./login/Login";
import Page404 from "../../components/404/404";

const PublicRoute = createBrowserRouter([
  {
    path: "/",
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        path: "/",
        element: <Login />,
      },
    ],
  },
]);

export default PublicRoute;