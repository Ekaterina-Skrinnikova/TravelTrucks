import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  typeTruck: "",
  features: {
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
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

    resetFilters: (state) => {
      state.location = "";
      state.typeTruck = "";
      state.features = {
        ac: false,
        automatic: false,
        kitchen: false,
        tv: false,
        bathroom: false,
      };
    },
  },
});

export const { setLocation, setTypeTruck, toggleFeature, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;
