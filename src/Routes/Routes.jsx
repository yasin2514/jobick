import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Jobs from "../Pages/Jobs/Jobs";
import Invoice from "../Pages/Shop/Invoice";
import Read from "../Pages/Email/Read";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Jobs></Jobs>,
      },
      {
        path: "/email-read",
        element: <Read></Read>,
      },
      {
        path: "/shop-invoice",
        element: <Invoice></Invoice>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
