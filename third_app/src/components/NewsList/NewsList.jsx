import {useEffect,useCallback} from "react";
import {useHttp} from "../../hook/useHttp";
import {useSelector,useDispatch} from "react-redux";
import {fetchDelete, fetchNews} from "../../redux/actions";
import Spinner from "../Spinner"
import Error from "../error/Error";
import NewsListItem from "../NewsListItem";
import { CSSTransition,TransitionGroup } from "react-transition-group";
import {createSelector} from 'reselect'
import '../style/transition.css'

function NewsList(props) {
  const filteredNewsSelected = createSelector(
    (state) => state.filter.activeFilter,
    (state) => state.news.news,
    (filter,news) =>{
      if (filter === "all"){
        return news
      }
      else {
        return news.filter(s => s.category === filter)
      }
    }
  )

  // const filteredNews = useSelector(state => {
  //   if (state.filter.activeFilter === "all"){
  //     return state.news.news
  //   }
  //   else {
  //     return state.news.news.filter(s => s.category === state.filter.activeFilter)
  //   }
  // });

  const filteredNews = useSelector(filteredNewsSelected);

  const filterLoadingStatus = useSelector(state => state.filter.filterLoadingStatus)
  const dispatch = useDispatch();
  const { request } = useHttp();
  console.log(filterLoadingStatus)

  useEffect(()=>{
    dispatch(fetchNews(request));
    // dispatch(newsFetching) // 3-usul redux-thunk
    // // dispatch("NEWS_FETCHING") 2-usul
    // // dispatch(newsFetching()) 1-usul
    // request("http://localhost:3001/news")
    //   .then(data => dispatch(newsFetched(data)))
    //   .catch(()=> dispatch(newsFetchingError()))
  },[]);

  const onDeleted = useCallback((id) => {
    dispatch(fetchDelete(request,id));// redux-thunk
    // request(`http://localhost:3001/news/${id}`,"DELETE")
    //   .then(data => console.log(data+" deleted"))
    //   .then(dispatch(newsDeleted(id)))
    //   .catch(err=>console.log(err))
  },[])

  if (filterLoadingStatus === 'loading'){
    return <Spinner />
  }else if (filterLoadingStatus === 'error'){
    return <Error />
  }

  const renderNewsList = (arr) => {
    if (arr?.length===0){
      return (
        <CSSTransition timeout={400} classNames="item">
          <h4 className="text-center mt-5">News does not exist</h4>
        </CSSTransition>
      )
    }
    return arr.map(({id,...props}) => {
      return (
        <CSSTransition key={id} timeout={400} classNames="item">
          <NewsListItem key={id} {...props} onDelete={()=>onDeleted(id)}/>
        </CSSTransition>
      )
    }).reverse();
  }

  const element = renderNewsList(filteredNews);

  return(
    <TransitionGroup component="ul">
      {element}
    </TransitionGroup>
  )
}

export default NewsList;