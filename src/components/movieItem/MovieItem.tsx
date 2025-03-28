import { Link } from "react-router";
import { Movie } from "../../interfaces/movie.interface";
import style from "./MovieItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../../store/reducers/favorite";

interface MovieProps {
  movie: Movie;
}

export function MovieItem({ movie }: MovieProps) {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state: any) => state.favorite.movies);

  function handleFavoriteButton(): any {
    if (favoriteMovies.find((m: Movie) => m.id === movie.id)) {
      return (
        <button onClick={() => dispatch(removeMovie(movie))}>
          Remover dos favoritos
        </button>
      );
    }

    return (
      <button onClick={() => dispatch(addMovie(movie))}>
        Adicionar aos favoritos
      </button>
    );
  }

  return (
    <div className={style.movieItem}>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <h3>{movie.title}</h3>
      <p>
        <Link className={style.btnDetails} to={`/filmes/${movie.id}`}>
          Ver detalhes
        </Link>
        {handleFavoriteButton()}
      </p>
    </div>
  );
}
