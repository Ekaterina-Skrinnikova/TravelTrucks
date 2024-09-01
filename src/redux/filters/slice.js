import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  typeTruck: "",
  features: {
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },

    setTypeTruck: (state, action) => {
      state.typeTruck = action.payload;
    },

    toggleFeature: (state, action) => {
      const feature = action.payload;
      state.features[feature] = !state.features[feature];
    },
  },
});

export const { setLocation, setTypeTruck, toggleFeature } =
  filtersSlice.actions;

export default filtersSlice.reducer;
