import React from 'react';

function NewsFilter(props) {
  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Filter by category</p>
        <div className="btn-group">
          <button className="btn btn-outline-dark active">All</button>
          <button className="btn btn-outline-danger">Hot News</button>
          <button className="btn btn-outline-primary">Sport News</button>
          <button className="btn btn-outline-success">World News</button>
        </div>
      </div>
    </div>
  );
}

export default NewsFilter;