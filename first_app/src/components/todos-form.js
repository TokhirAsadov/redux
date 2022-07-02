import React from 'react';

const TodosForm = () => {
  return (
    <form className="mb-3 d-flex justify-content-between align-item-center">
      <div>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="e.g. By book" />
      </div>
      <button className="btn btn-success">Add</button>
    </form>
  );
};

export default TodosForm;