import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../interfaces/movie.interface";

interface InitialState {
  movies: Movie[];
}

export const favoritoSlice: any = createSlice({
  name: "favorito",
  initialState: { movies: [] } as InitialState,
  reducers: {
    addMovie: (state, action) => {
      if (!state.movies.find((movie) => movie.id === action.payload.id)) {
        state.movies = state.movies.concat(action.payload);
      }
    },
    removeMovie: (state, action) => {
      if (state.movies.find((movie) => movie.id === action.payload.id)) {
        state.movies = state.movies.filter(
          (movie) => movie.id !== action.payload.id
        );
      }
    },
  },
});

export const { addMovie, removeMovie } = favoritoSlice.actions;
export default favoritoSlice.reducer;
