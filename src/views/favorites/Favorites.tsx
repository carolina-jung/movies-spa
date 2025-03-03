import { useSelector } from "react-redux";
import style from "./Favorites.module.css";
import { MovieItem } from "../../components/movieItem/MovieItem";
import { Movie } from "../../interfaces/movie.interface";

export function Favorites() {
  const movies = useSelector((state: any) => state.favorite?.movies || []);

  return (
    <section>
      <h1>Meus filmes favoritos</h1>
      <div className={style.moviesList}>
        {movies?.map((movie: Movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
