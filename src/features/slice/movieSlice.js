import { createSlice } from "@reduxjs/toolkit";
import data from "../utils/data.json";

// export const filter
const initialState = {
  loading: false,
  moviesList: data,
  error: null,
  singleMovie: null,
  searchTerm: "",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    filterMovie: (state, action) => {
      // console.log(action.payload);
      // const ii = state.movies.find((data) => data === action.payload);
      state.singleMovie = action.payload;
      // console.log(ii);
    },
    filterSearch: (state, { payload }) => {
      console.log(payload);
      // const singleMovie = state.movies.filter((data) => data.Title.toLowerCase().includes(payload));
      console.log(payload);
      if (payload) {
        // state.movies = state.movies;
        console.log("empty");
        state.movies = state.movies.filter((data) => data.Title.toLowerCase().includes(payload));
      } else {
        return state.movies;
      }
      // console.log(singleMovie);
    },
    updateSearchTerm: (state, { payload }) => {
      console.log(payload);
      state.searchTerm = payload;
    },
  },
});

export const { filterMovie, filterSearch, updateSearchTerm } = movieSlice.actions;
export default movieSlice.reducer;
