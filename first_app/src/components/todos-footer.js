import { useSelector } from "react-redux";

const TodosFooter = () => {
  const todoItems = useSelector(state => state.todos);

  const handleSave = () => {
    localStorage.setItem('todos',JSON.stringify(todoItems))
  }

  return (
    <div className="card-footer">
      <button
        onClick={handleSave}
        className="btn btn-primary"
      >
        Save
      </button>
    </div>
  );
};

export default TodosFooter;