import { Link } from "react-router-dom";

import { Login } from "../components/user";
import { User } from "../typings/user";

function HomePage() {
  const handleSubmit = (data: User) => {
    alert(`Usuario: ${data.email}`);
  };

  return (
    <div>
      <h1>Has hecho click</h1>
      <Link to="/login">Ir a "/login"</Link>
      <Link to="/to-do-list-app">Ir a "todolist"</Link>

      <div style={{ zoom: "0.5" }}>
        <Login onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default HomePage;
