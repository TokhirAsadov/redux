import { createReducer } from "@reduxjs/toolkit";
import { newsFetching,newsFetched,newsFetchingError,newsCreated,newsDeleted } from "../actions";

const initialState = {
  news: [],
  newsLoadingStatus: "tohir",
}

const news = createReducer(initialState,{// redux-toolkit 2-view
  [newsFetching]: state => {state.newsLoadingStatus = 'loading'},
  [newsFetched]: (state,action) => {
      state.newsLoadingStatus = 'tohir';
      state.news = action.payload;
    },
  [newsFetchingError]: state => {state.newsLoadingStatus = "error"},
  [newsCreated]: (state,action) => {state.news.push(action.payload)},
  [newsDeleted]: (state,action) => {state.news = state.news.filter(s => s.id !== action.payload)}
},[],state =>state)

// const news = createReducer(initialState, builder => { // redux-toolkit 1-view
//   builder
//     .addCase(newsFetching,(state) => {state.newsLoadingStatus = 'loading';})
//     .addCase(newsFetched,(state,action) => {
//       state.newsLoadingStatus = 'tohir';
//       state.news = action.payload;
//     })
//     .addCase(newsFetchingError,state => {state.newsLoadingStatus = "error"})
//     .addCase(newsCreated, (state,action) => {state.news.push(action.payload)})
//     .addCase(newsDeleted,(state,action) => {state.news = state.news.filter(s => s.id !== action.payload)})
//     .addDefaultCase(() => {})
// });


// const news = (state = initialState,action) => {
//   switch (action.type){
//     case "NEWS_FETCHING":
//       return {
//         ...state,
//         newsLoadingStatus: 'loading'
//       }
//     case "NEWS_FETCHED":
//       return {
//         ...state,
//         news: action.payload,
//         newsLoadingStatus: "tohir",
//       }
//     case "NEWS_FETCHING_ERROR":
//       return {
//         ...state,
//         newsLoadingStatus: 'error'
//       }
//     case "NEWS_CREATED":
//       return {
//         ...state,
//         news: [...state.news,action.payload],
//       }
//     case "NEWS_DELETED":{
//       const newNewsList = state.news.filter(s => s.id !== action.payload);
//       return {
//         ...state,
//         news: newNewsList,
//       }
//     }
//     default:
//       return state;
//   }
// }

export default news;