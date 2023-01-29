import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
    filterData: (state, action) => {
      // const data= movies.filter((data)=>data===action.payload)
      // state.singleMovie = state.singleMovie.filter((data) => data === action.payload);
      console.log(action.payload);
      const movieData = state.movies.filter((data) => data === action.payload);
      // state.singleMovie = action.payload;
      console.log(movieData);
      // console.log(movieData);
      // console.log(singleMovie)
    },
    searchFilter: (state, action) => {
      // state.movies = state.movies.includes(action.payload.Title.toLowerCase());
      console.log(action);
    },
  },
});

export const { filterData, searchFilter } = movieSlice.actions;
export default movieSlice.reducer;
