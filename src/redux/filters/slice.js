import { createSelector, createSlice } from "@reduxjs/toolkit";

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

  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
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

    addFavorite: (state, action) => {
      const camperId = action.payload;
      if (!state.favorites.includes(camperId)) {
        state.favorites.push(camperId);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },

    deleteFavorite: (state, action) => {
      const camperId = action.payload;
      state.favorites = state.favorites.filter((id) => id !== camperId);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const selectFiltredCampers = createSelector(
  [(state) => state.campers.campers, (state) => state.filters],
  (campers, filters) => {
    return campers.filter((camper) => {
      const matchesLocation = camper.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());
      const matchesTypeTruck = filters.typeTruck
        ? camper.form === filters.typeTruck
        : true;
      const matchesFeatures = Object.keys(filters.features).every((feature) =>
        filters.features[feature]
          ? camper[feature] === filters.features[feature]
          : true
      );

      return matchesLocation && matchesTypeTruck && matchesFeatures;
    });
  }
);

export const {
  setLocation,
  setTypeTruck,
  toggleFeature,
  addFavorite,
  deleteFavorite,
} = filtersSlice.actions;

export default filtersSlice.reducer;
