import { RootLayout } from "./views/RootLayout";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        lazy: async () => {
          const { Home } = await import("./views/Home");
          return {
            Component: Home,
          };
        },
      },
      {
        path: "/filmes",
        lazy: async () => {
          const { Movies } = await import("./views/movies/Movies");
          return {
            Component: Movies,
          };
        },
      },
      {
        path: "/filmes/:id",
        lazy: async () => {
          const { MovieDetails } = await import(
            "./views/movieDetails/MovieDetails"
          );
          return {
            Component: MovieDetails,
          };
        },
      },
      {
        path: "/favoritos",
        lazy: async () => {
          const { Favorites } = await import("./views/favorites/Favorites");
          return {
            Component: Favorites,
          };
        },
      },
    ],
  },
]);
