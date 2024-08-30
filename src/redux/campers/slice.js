import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers, fetchCamperById } from "./operations.js";

const initialState = {
  items: [],
  item: null,

  perPage: 4,
  currentPage: 1,
  totalVisible: 4,

  loading: false,
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
        state.loading = true;
      })
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllCampers.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

export const { incrementVisible } = campersSlice.actions;

export default campersSlice.reducer;
