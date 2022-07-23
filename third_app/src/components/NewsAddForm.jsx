import React from 'react';

function NewsAddForm(props) {
  return (
    <form className="border p-4 shadow-lg rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">Name for new News</label>
        <input type="text" required name="name" className="form-control" id="name" placeholder="What is name of news?"/>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label fs-4">Description</label>
        <textarea required name="text" className="form-control" id="text" placeholder="What is your news about?" style={{height: "120px"}}/>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Choose category of news</label>
        <select required id="category" className="form-select" name="category">
          <option>News about...</option>
          <option value="hot">Hot News</option>
          <option value="sport">Sport News</option>
          <option value="world">World News</option>
        </select>
      </div>
      <button className="btn btn-dark text-white w-100 shadow-lg">Create News</button>
    </form>
  );
}

export default NewsAddForm;