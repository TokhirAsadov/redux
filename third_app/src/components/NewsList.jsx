import {useEffect} from "react";
import {useHttp} from "../hook/useHttp";
import {useSelector,useDispatch} from "react-redux";
import { newsFetching,newsFetched,newsFetchingError } from "../redux/actions";
import Spinner from "./Spinner"
import Error from "./error/Error";
import NewsListItem from "./NewsListItem";

function NewsList(props) {
  const {news,newsLoadingStatus} = useSelector(state => state)
  const dispatch = useDispatch();
  const { request } = useHttp();
  console.log(newsLoadingStatus)

  useEffect(()=>{
    dispatch(newsFetching())
    request("http://localhost:3001/news")
      .then(data => dispatch(newsFetched(data)))
      .catch(()=> dispatch(newsFetchingError()))
  },[]);

  if (newsLoadingStatus === 'loading'){
    return <Spinner />
  }else if (newsLoadingStatus === 'error'){
    return <Error />
  }

  const renderNewsList = (arr) => {
    if (!arr){
      return <h4 className="text-center mt-5">News does not exist</h4>
    }
    return arr.map(({id,...props}) => {
      return <NewsListItem key={id} {...props} />
    })
  }

  const element = renderNewsList(news);

  return(
    <ul>{element}</ul>
  )
}

export default NewsList;