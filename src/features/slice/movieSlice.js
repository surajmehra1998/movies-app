import { createSlice } from "@reduxjs/toolkit";
import data from "../utils/data.json";

const initialState = {
  loading: false,
  moviesList: data,
  searchTerm: "",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    updateSearchTerm: (state, { payload }) => {
      // console.log(payload);
      state.searchTerm = payload;
    },
  },
});

export const { updateSearchTerm } = movieSlice.actions;
export default movieSlice.reducer;
