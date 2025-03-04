import { useSelector } from "react-redux";
import { Link } from "react-router";
import style from "./Header.module.css";

export function Header() {
  const totalFavoritesMovies = useSelector(
    (state: any) => state.favorite.movies.length
  );

  return (
    <header>
      <div className={style.logo}>
        <h1>Movies SPA</h1>
      </div>
      <nav>
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
      </nav>
    </header>
  );
}
