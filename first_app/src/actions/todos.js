import {TODO} from "../constante/todos";

export const addTodo = (todoItem) => {
  console.log(todoItem)
  return{
    type: TODO.ADD_TODO,
    payload: {
      ...todoItem
    }
  }
}

export const removeTodo = (id) => {
  console.log(id)
  return{
    type: TODO.REMOVE_TODO,
    payload:{
      id,
    }
  }
}

export const markTodoDone = (todoItem) => {
  console.log(todoItem)
  return{
    type: TODO.MARK_TODO_DONE,
    payload:{
      ...todoItem
    }
  }
}

export const initializeTodos = (todos) => {
  return{
    type: TODO.INITIALIZE_TODO,
    payload: todos,
  }
}