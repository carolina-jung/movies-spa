import { useEffect, useState } from "react";
import { Movie } from "../interfaces/movie.interface";
import { getMovieDetails, getPopularMovies } from "../services/movies.service";
import { useQuery } from "@tanstack/react-query";

export function useMovies() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data } = await getPopularMovies();
      return data.results;
    },
  });
}

export function useMovieDetails(movieId: number) {
  return useQuery({
    queryKey: ["movies", movieId],
    queryFn: async () => {
      const { data } = await getMovieDetails(movieId);
      return data;
    },
  });
}
