import { MovieItem } from "../../components/movieItem/MovieItem";
import { useMovies } from "../../hooks/useMovies";
import style from "./Movies.module.css";

export function Movies() {
  const movies = useMovies();

  if (!movies) {
    return <p>Carregando...</p>;
  }

  return (
    <section>
      <h1>Filmes populares</h1>
      <div className={style.moviesList}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
