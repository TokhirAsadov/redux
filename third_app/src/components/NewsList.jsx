import {useEffect,useCallback} from "react";
import {useHttp} from "../hook/useHttp";
import {useSelector,useDispatch} from "react-redux";
import {newsFetching, newsFetched, newsFetchingError, newsDeleted} from "../redux/actions";
import Spinner from "./Spinner"
import Error from "./error/Error";
import NewsListItem from "./NewsListItem";
import { CSSTransition,TransitionGroup } from "react-transition-group";
import './style/transition.css'

function NewsList(props) {
  const filteredNews = useSelector(state => {
    if (state.activeFilter === "all"){
      return state.news
    }
    else {
      return state.news.filter(s => s.category === state.activeFilter)
    }
  });
  const filterLoadingStatus = useSelector(state => state.filterLoadingStatus)
  const dispatch = useDispatch();
  const { request } = useHttp();
  console.log(filterLoadingStatus)

  useEffect(()=>{
    dispatch(newsFetching())
    request("http://localhost:3001/news")
      .then(data => dispatch(newsFetched(data)))
      .catch(()=> dispatch(newsFetchingError()))
  },[]);


  const onDeleted = useCallback((id) => {
    request(`http://localhost:3001/news/${id}`,"DELETE")
      .then(data => console.log(data+" deleted"))
      .then(dispatch(newsDeleted(id)))
      .catch(err=>console.log(err))
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