const initialState = {
  news: [],
  newsLoadingStatus: "tohir",
  filters: [],
  filterLoadingStatus: "tohir",
  activeFilter: "all",
}
const reducer = (state = initialState,action) => {
  switch (action.type){
    case "NEWS_FETCHING":
      return {
        ...state,
        newsLoadingStatus: 'loading'
      }
    case "NEWS_FETCHED":
      return {
        ...state,
        news: action.payload,
        newsLoadingStatus: "tohir",
      }
    case "NEWS_FETCHING_ERROR":
      return {
        ...state,
        newsLoadingStatus: 'error'
      }
    case "NEWS_CREATED":
      return {
        ...state,
        news: [...state.news,action.payload],
      }
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
    case "NEWS_DELETED":{
      const newNewsList = state.news.filter(s => s.id !== action.payload);
      return {
        ...state,
        news: newNewsList,
      }
    }
    default:
      return state;
  }
}
export default reducer;