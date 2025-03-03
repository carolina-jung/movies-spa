import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../interfaces/movie.interface";

interface InitialState {
  movies: Movie[];
}

export const favoriteSlice: any = createSlice({
  name: "favorite",
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

export const { addMovie, removeMovie } = favoriteSlice.actions;
export default favoriteSlice.reducer;
