import "./App.css";
import TodoList from "./components/todoList/TodoList";
import Form from "./components/form/Form";

function App() {
  return (
    <div className="App">
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
