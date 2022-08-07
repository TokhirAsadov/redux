import { createAction } from "@reduxjs/toolkit";
import {newsFetching,newsFetched,newsFetchingError,newsCreated,newsDeleted} from '../components/NewsList/news_slice'


export const fetchFilter = (request) => (dispatch) => {
  dispatch(filtersFetching());
  request("http://localhost:3001/filters")
    .then(data => dispatch(filtersFetched(data)))
    .catch(err => filtersFetchingError(err))
}
export const fetchNewsAdd = (request,newNews) => (dispatch) => {
  request("http://localhost:3001/news","POST",JSON.stringify(newNews))
    .then(res => console.log(res))
    .then(dispatch(newsCreated(newNews)))
    .catch(err => console.log(err))
}
export const fetchNews = (request) => (dispatch) => {
  dispatch(newsFetching())
  request("http://localhost:3001/news")
    .then(data => dispatch(newsFetched(data)))
    .catch(()=> dispatch(newsFetchingError()))
}
export const fetchDelete = (request,id) => (dispatch) => {
  request(`http://localhost:3001/news/${id}`,"DELETE")
    .then(data => console.log(data+" deleted"))
    .then(dispatch(newsDeleted(id)))
    .catch(err=>console.log(err))
}


export const filtersFetching = createAction("FILTERS_FETCHING");
export const filtersFetched = createAction("FILTERS_FETCHED");
export const filtersFetchingError = createAction("FILTERS_FETCHING_ERROR");
export const activeFilteredChanged = createAction("ACTIVE_FILTER_CHANGED");



// export const newsFetching = createAction("NEWS_FETCHING"); // redux-toolkit
// // export const newsFetching = () => {
// //   return {
// //     type: "NEWS_FETCHING"
// //   }
// // }
//
// export const newsFetched = createAction("NEWS_FETCHED");// redux-toolkit, *payload ni uzi quyib ketaveradi alohida yozish shart emas!
// // export const newsFetched = (news) => {
// //   return {
// //     type: "NEWS_FETCHED",
// //     payload: news
// //   }
// // }
//
// export const newsFetchingError = createAction("NEWS_FETCHING_ERROR_NEWS_FETCHING_ERROR");// redux-toolkit
// // export const newsFetchingError = () => {
// //   return {
// //     type: "NEWS_FETCHING_ERROR_NEWS_FETCHING_ERROR"
// //   }
// // }
//
// export const newsCreated = createAction("NEWS_CREATED");// redux-toolkit
// // export const newsCreated = news => {
// //   return {
// //     type: "NEWS_CREATED",
// //     payload: news
// //   }
// // }
//
// export const newsDeleted = createAction("NEWS_DELETED");// redux-toolkit
// // export const newsDeleted = (id) => {
// //   return {
// //     type: "NEWS_DELETED",
// //     payload: id
// //   }
// // }
//
// export const filtersFetching = createAction("FILTERS_FETCHING");// redux-toolkit
// // export const filtersFetching = () => {
// //   return {
// //     type: "FILTERS_FETCHING",
// //   }
// // }
//
// export const filtersFetched = createAction("FILTERS_FETCHED");// redux-toolkit
// // export const filtersFetched = (filters) => {
// //   return {
// //     type: "FILTERS_FETCHED",
// //     payload: filters
// //   }
// // }
//
// export const filtersFetchingError = createAction("FILTERS_FETCHING_ERROR");// redux-toolkit
// // export const filtersFetchingError = () => {
// //   return{
// //     type: "FILTERS_FETCHING_ERROR"
// //   }
// // }
//
// export const activeFilteredChanged = createAction("ACTIVE_FILTER_CHANGED");// redux-toolkit
// // export const activeFilteredChanged = (filter) => {
// //   return {
// //     type: "ACTIVE_FILTER_CHANGED",
// //     payload: filter
// //   }
// // }

// export const activeFilteredChanged = (filter) => (dispatch) => {// dispatch redux-thunk dan keladi
//   setTimeout(() => {
//     dispatch( {
//       type: "ACTIVE_FILTER_CHANGED",
//       payload: filter
//     })
//   },1000)
// }