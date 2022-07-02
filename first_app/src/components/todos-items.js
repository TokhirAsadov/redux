import {useSelector} from "react-redux";
import TodoItem from "./todo-item";

const TodosItems = () => {
  const todos = useSelector(state => state.todos);
  return (
    <ul className="list-group list-group-flush">
      {
        todos.length !== 0 ?
        todos.map((item) => {
          return <TodoItem key={item.id} text={item.text}/>
        }) : <h1 className="text-center mt-3 mb-3">Not fount todos...</h1>
      }
    </ul>
  );
};

export default TodosItems;