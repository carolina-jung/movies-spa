import { queryClient } from "../../App";
import { MovieItem } from "../../components/movieItem/MovieItem";
import { useMovies } from "../../hooks/useMovies";
import { Movie } from "../../interfaces/movie.interface";
import { getMovieDetails } from "../../services/movies.service";
import style from "./Movies.module.css";

export function Movies() {
  const { data: movies, isLoading } = useMovies();

  async function prefetchMovie(movieId: number) {
    await queryClient.prefetchQuery({
      queryKey: ["movies", movieId],
      queryFn: async () => {
        const { data } = await getMovieDetails(movieId);
        return data;
      },
    });
  }

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <section>
      <h1>Filmes populares</h1>
      <div className={style.moviesList}>
        {movies.map((movie: Movie) => (
          <div
            key={movie.id}
            onMouseEnter={async () => await prefetchMovie(movie.id)}
          >
            <MovieItem movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
}
