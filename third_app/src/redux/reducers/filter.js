import {createReducer} from "@reduxjs/toolkit";
import {filtersFetching,filtersFetched,filtersFetchingError,activeFilteredChanged} from "../actions";

const initialState = {
  filters: [],
  filterLoadingStatus: "tohir",
  activeFilter: "all",
}

const filter = createReducer(initialState,{
  [filtersFetching]: state => {state.filterLoadingStatus = 'loading'},
  [filtersFetched]: (state,action) => {
    state.filterLoadingStatus = 'tohir';
    state.filters = action.payload;
  },
  [filtersFetchingError]: state => {state.filterLoadingStatus = "error"},
  [activeFilteredChanged]: (state,action) => { state.activeFilter = action.payload }
},[],state => state);

// const filter = (state = initialState,action) => {
//   switch (action.type){
//     case "FILTERS_FETCHING":
//       return {
//         ...state,
//         filterLoadingStatus: "loading"
//       }
//     case "FILTERS_FETCHED":
//       return {
//         ...state,
//         filters: action.payload,
//         filterLoadingStatus: "tohir"
//       }
//     case "FILTERS_FETCHING_ERROR":{
//       return {
//         ...state,
//         filterLoadingStatus: "error"
//       }
//     }
//     case "ACTIVE_FILTER_CHANGED":{
//       return {
//         ...state,
//         activeFilter: action.payload,
//       }
//     }
//     default:
//       return state;
//   }
// }

export default filter;