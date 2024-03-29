import React from 'react';
import { useState } from "react";
import { useHttp } from "../hook/useHttp";
import { useSelector,useDispatch } from "react-redux";
import {v4} from 'uuid';
import {fetchNewsAdd} from "../redux/actions";
import {logDOM} from "@testing-library/react";

function NewsAddForm(props) {
  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [category, setCategory] = useState("");
  const {filters,filterLoadingStatus} = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const { request } = useHttp();

  const onSubmitHandler = e => {
    e.preventDefault();
    const newNews = {
      id: v4(),
      name,
      description,
      category
    }
    dispatch(fetchNewsAdd(request,newNews));// redux-thunk
    // request("http://localhost:3001/news","POST",JSON.stringify(newNews))
    //       .then(res => console.log(res))
    //       .then(dispatch(newsCreated(newNews)))
    //       .catch(err => console.log(err))

    setName("");
    setCategory("");
    setDescription("");
  }

  const renderFilters = (filters,status) => {
    if (status === "loading"){
      return <option>Loading options</option>
    }
    else if (status === "error"){
      return <option>Error options</option>
    }

    if (filters?.length>0){
      return filters.map(({name,label})=>{
        if (name === "all") return;
        return <option key={name} value={name}>{label}</option>
      })
    }
  }

  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">Name for new News</label>
        <input
          type="text"
          required
          name="name"
          className="form-control"
          id="name"
          placeholder="What is name of news?"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label fs-4">Description</label>
        <textarea
          required
          name="text"
          className="form-control"
          id="text"
          placeholder="What is your news about?" style={{height: "120px"}}
          value={description}
          onChange={e=>setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Choose category of news</label>
        <select
          required
          id="category"
          className="form-select"
          name="category"
          value={category}
          onChange={e=>setCategory(e.target.value)}
        >
          <option>Category of News...</option>
          {renderFilters(filters,filterLoadingStatus)}
        </select>
      </div>
      <button className="btn btn-dark text-white w-100 shadow-lg">Create News</button>
    </form>
  );
}

export default NewsAddForm;