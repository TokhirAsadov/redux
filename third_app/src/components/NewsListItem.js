import React from 'react';
import Error from "./error/Error";

function NewsListItem({name,description,category}) {
  let elementClassName;
  switch (category){
    case "Hot News":
      elementClassName = "bg-danger bg-gradient";
      break;
    case "Sport News":
      elementClassName = "bg-primary bg-gradient";
      break;
    case "World News":
      elementClassName = "bg-secondary bg-gradient";
      break;
    default:
      elementClassName = "bg-info bg-gradient"
  }
  return (
    <li className={`card flex-row my-2 shadow-lg text-white ${elementClassName}`}>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
      </div>
      <span className="position-absolute top-0 end-90 translate-middle badge border rounded-pill bg-light">
        <button type="button" className="btn-close" aria-label="Close"></button>
      </span>
      <img
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D"
        alt="News Img"
        className="img-fluid w-25 d-inline"
        style={{objectFit: "cover"}}
      />
    </li>
  );
}

export default NewsListItem;