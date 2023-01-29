import { createSlice } from "@reduxjs/toolkit";
import data from "../utils/data.json";

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    loading: false,
    movies: data,
    error: null,
    singleMovie: [],
  },
  reducers: {
    filterMovie: (state, action) => {
      console.log(action.payload);
      // const ii = state.movies.find((data) => data === action.payload);
      state.singleMovie = action.payload;
      // console.log(ii);
    },
  },
});

export const { filterMovie } = movieSlice.actions;
export default movieSlice.reducer;
