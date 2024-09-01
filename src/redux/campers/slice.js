import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers, fetchCamperById } from "./operations";

const initialState = {
  campers: [],
  camper: null,

  currentPage: 1,
  perPage: 4,
  totalVisible: 4,

  date: "",

  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    incrementVisible: (state) => {
      state.totalVisible += state.perPage;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.campers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllCampers.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.camper = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const { incrementVisible } = campersSlice.actions;

export default campersSlice.reducer;
