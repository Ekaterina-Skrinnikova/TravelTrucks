import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "../redux/campers/slice";
import filtersReducer from "../redux/filters/slice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    campers: campersReducer,
  },
});
