const initialState = {
  news: [],
  newsLoadingStatus: "tohir",
}
const news = (state = initialState,action) => {
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
export default news;