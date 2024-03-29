import React from 'react';
import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {useHttp} from "../../hook/useHttp";
import Spinner from "../Spinner";
import classNames from "classnames";
import Error from "../error/Error";
import { activeFilteredChanged } from "./filter_slice";
import { fetchFilter } from "../../redux/actions";

function NewsFilter(props) {
  const {filters,filterLoadingStatus,activeFilter} = useSelector(state=>state.filter);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(()=>{
    dispatch(fetchFilter(request)) // redux-thunk
    // dispatch(filtersFetching());
    // request("http://localhost:3001/filters")
    //   .then(data => dispatch(filtersFetched(data)))
    //   .catch(err => filtersFetchingError(err))
    //eslint-disable-next-line
  },[])

  if (filterLoadingStatus === "loading"){
    return <Spinner />
  }
  else if (filterLoadingStatus === "error"){
    return <Error />
  }

  const renderFilters = (arr) => {
    if (arr?.length === 0) {
      return (
        <h5 className="text-center mt-5">Filters does not found</h5>
      )
    }
    if(arr?.length > 0) {
      return arr.map(({name, className, label}) => {
        const btnClasses = classNames("btn", className, {
          "active": name === activeFilter
        })
        return(
          <button
            key={name}
            id={name}
            className={btnClasses}
            onClick={() => dispatch(activeFilteredChanged(name))}
         >
          {label}
         </button>
        )
      })
    }
  }

  const elements = renderFilters(filters)

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Filter by category</p>
        <div className="btn-group">
          {elements}
        </div>
      </div>
    </div>
  );
}

export default NewsFilter;