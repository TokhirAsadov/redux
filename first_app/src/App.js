import {useSelector,useDispatch} from 'react-redux'
import TodosHeader from "./components/todos-header";
import TodosForm from "./components/todos-form";
import TodosFooter from "./components/todos-footer";
import TodosItems from "./components/todos-items";
import {useEffect} from "react";
import {initializeTodos} from "./actions/todos";

function App() {
  const dispatch = useDispatch();
  const todoItems = useSelector(state => state.todos)
  useEffect(()=>{
    const oldItems = JSON.parse(localStorage.getItem('todos'));
    console.log(oldItems);
    dispatch(initializeTodos(oldItems))
  },[])

  return (
    <div className="container">
      <div className="row col-md-6 offset-md-3">
        <div className="card mt-5">
          <TodosHeader length={todoItems.length}/>
          <div className="card-body">
            <TodosForm />
          </div>
          <TodosItems />
          <TodosFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
