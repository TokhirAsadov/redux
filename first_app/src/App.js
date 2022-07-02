import TodosHeader from "./components/todos-header";
import TodosForm from "./components/todos-form";
import TodosFooter from "./components/todos-footer";
import TodosItems from "./components/todos-items";

function App() {
  return (
    <div className="container">
      <div className="row col-md-6 offset-md-3">
        <div className="card mt-5">
          <TodosHeader />
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
