import { MovieItem } from "../../components/movieItem/MovieItem";
import { useMovies } from "../../hooks/useMovies";
import { Movie } from "../../interfaces/movie.interface";
import style from "./Movies.module.css";

export function Movies() {
  const { data: movies, isLoading } = useMovies();

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <section>
      <h1>Filmes populares</h1>
      <div className={style.moviesList}>
        {movies.map((movie: Movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
