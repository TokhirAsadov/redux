const initialState = {
  news: [],
  newsLoadingStatus: "tohir",
  filters: []
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
        newsLoadingStatus: "tohir"
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
    default:
      return state;
  }
}
export default reducer;