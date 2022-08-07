import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
  filterLoadingStatus: "tohir",
  activeFilter: "all",
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers:{
    filtersFetching: state => {state.filterLoadingStatus = 'loading'},
    filtersFetched: (state,action) => {
      state.filterLoadingStatus = 'tohir';
      state.filters = action.payload;
    },
    filtersFetchingError: state => {state.filterLoadingStatus = "error"},
    activeFilteredChanged: (state,action) => { state.activeFilter = action.payload }
  }
})

const {actions,reducer} = filterSlice;

export default reducer;
export const { filtersFetching,filtersFetched,filtersFetchingError,activeFilteredChanged } = actions;
