import React, {useRef} from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todos";
import {v4 as uuid} from 'uuid'

const TodosForm = () => {
  const inputRef = useRef(null);
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo({
      id: uuid(),
      isDone: false,
      title: inputRef.current.value,
    }))
    formRef.current.reset();
  }


  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="mb-3 d-flex justify-content-between align-item-center"
    >
      <div>
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="e.g. By book"
        />
      </div>
      <button className="btn btn-success">Add</button>
    </form>
  );
};

export default TodosForm;