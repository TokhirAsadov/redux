const initialState = {
  filters: [],
  filterLoadingStatus: "tohir",
  activeFilter: "all",
}
const filter = (state = initialState,action) => {
  switch (action.type){
    case "FILTERS_FETCHING":
      return {
        ...state,
        filterLoadingStatus: "loading"
      }
    case "FILTERS_FETCHED":
      return {
        ...state,
        filters: action.payload,
        filterLoadingStatus: "tohir"
      }
    case "FILTERS_FETCHING_ERROR":{
      return {
        ...state,
        filterLoadingStatus: "error"
      }
    }
    case "ACTIVE_FILTER_CHANGED":{
      return {
        ...state,
        activeFilter: action.payload,
      }
    }
    default:
      return state;
  }
}
export default filter;