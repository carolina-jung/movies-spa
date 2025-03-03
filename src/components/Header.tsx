import { useSelector } from "react-redux";
import { Link } from "react-router";

export function Header() {
  const totalFavoritesMovies = useSelector(
    (state: any) => state.favorite.movies.length
  );

  return (
    <>
      <h1>Aplicação de filmes</h1>
      <ul>
        <li>
          <Link to={"/"}>Início</Link>
        </li>
        <li>
          <Link to={"/filmes"}>Filmes</Link>
        </li>
        <li>
          <Link to={"/favoritos"}>Favoritos ({totalFavoritesMovies})</Link>
        </li>
      </ul>
    </>
  );
}
