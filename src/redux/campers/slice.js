import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers } from "./operations.js";

const initialState = {
  items: [],

  loading: false,
  error: null,
};
const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
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
      }),
});

export default campersSlice.reducer;
