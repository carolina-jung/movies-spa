import { Link } from "react-router";
import { Movie } from "../../interfaces/movie.interface";
import style from "./MovieItem.module.css";
import { useDispatch } from "react-redux";
import { addMovie } from "../../store/reducers/favorito";

interface MovieProps {
  movie: Movie;
}

export function MovieItem({ movie }: MovieProps) {
  const dispatch = useDispatch();

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
        <button onClick={() => dispatch(addMovie(movie))}>
          Adicionar aos favoritos
        </button>
      </p>
    </div>
  );
}
