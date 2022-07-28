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

export const newsFetching = () => {
  return {
    type: "NEWS_FETCHING"
  }
}

export const newsFetched = (news) => {
  return {
    type: "NEWS_FETCHED",
    payload: news
  }
}

export const newsFetchingError = () => {
  return {
    type: "NEWS_FETCHING_ERRORNEWS_FETCHING_ERROR"
  }
}

export const newsCreated = news => {
  return {
    type: "NEWS_CREATED",
    payload: news
  }
}

export const filtersFetching = () => {
  return {
    type: "FILTERS_FETCHING",
  }
}

export const filtersFetched = (filters) => {
  return {
    type: "FILTERS_FETCHED",
    payload: filters
  }
}

export const filtersFetchingError = () => {
  return{
    type: "FILTERS_FETCHING_ERROR"
  }
}

export const activeFilteredChanged = (filter) => {
  return {
    type: "ACTIVE_FILTER_CHANGED",
    payload: filter
  }
}

// export const activeFilteredChanged = (filter) => (dispatch) => {// dispatch redux-thunk dan keladi
//   setTimeout(() => {
//     dispatch( {
//       type: "ACTIVE_FILTER_CHANGED",
//       payload: filter
//     })
//   },1000)
// }

export const newsDeleted = (id) => {
  return {
    type: "NEWS_DELETED",
    payload: id
  }
}