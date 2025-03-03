import { RootLayout } from "./views/RootLayout";
import { Home } from "./views/Home";
import { Movies } from "./views/movies/Movies";
import { createBrowserRouter } from "react-router";
import { MovieDetails } from "./views/movieDetails/MovieDetails";
import { Favorites } from "./views/favorites/Favorites";

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
      {
        path: "/filmes/:id",
        element: <MovieDetails />,
      },
      {
        path: "/favoritos",
        element: <Favorites />,
      },
    ],
  },
]);
