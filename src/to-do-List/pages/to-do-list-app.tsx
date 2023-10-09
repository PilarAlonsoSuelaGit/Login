import { Link } from "react-router-dom";
import { ToDoList } from "../components/to-do-list";

export default function ToDoListPage() {
  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <ToDoList />

      <Link to="/">Ir a Home"/"</Link>
    </div>
  );
}
