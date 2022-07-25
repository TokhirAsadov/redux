const initialState = {
  news: [],
  newsLoadingStatus: "tohir",
  filters: [],
  filterLoadingStatus: "tohir",
  activeFilter: "all",
  filteredNews: []
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
        // news: action.payload,
        newsLoadingStatus: "tohir",
        filteredNews: state.activeFilter === "all" ? action.payload : action.payload.filter(s=>s.category === state.activeFilter)
      }
    case "NEWS_FETCHING_ERROR":
      return {
        ...state,
        newsLoadingStatus: 'error'
      }
    case "NEWS_CREATED":
      const newsCreatedNewsList = [...state.news,action.payload];
      return {
        ...state,
        news: newsCreatedNewsList
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
        filteredNews: action.payload === "all" ? state.news : state.news.filter(s => s.category === action.payload)
      }
    }
    default:
      return state;
  }
}
export default reducer;