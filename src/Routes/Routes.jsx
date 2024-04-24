import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Jobs from "../Pages/Jobs/Jobs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Jobs></Jobs>,
      },
    ],
    errorElement: <div>Error Page</div>,
  },
]);
