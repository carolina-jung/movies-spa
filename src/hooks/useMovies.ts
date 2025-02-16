import { useEffect, useState } from "react";
import { Movie } from "../interfaces/movie.interface";
import { getMovieDetails, getPopularMovies } from "../services/movies.service";

export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getPopularMovies().then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  return movies;
}

export function useMovieDetails(movieId: number) {
  const [movieDetails, setMovieDetails] = useState<Movie>();

  useEffect(() => {
    getMovieDetails(movieId).then(({ data }) => {
      setMovieDetails(data);
    });
  }, [movieId]);

  return movieDetails;
}
