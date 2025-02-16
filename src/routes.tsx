import { RootLayout } from "./views/RootLayout";
import { Home } from "./views/Home";
import { Movies } from "./views/Movies";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/filmes",
        element: <Movies />,
      },
    ],
  },
]);
