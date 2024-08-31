export const selectCampers = (state) => state.campers.items;

export const selectCamper = (state) => state.campers.item;

export const selectPerPage = (state) => state.campers.perPage;

export const selectTotalVisible = (state) => state.campers.totalVisible;

export const selectDate = (state) => state.campers.date;

export const selectLoading = (state) => state.campers.loading;

export const selectError = (state) => state.campers.error;
