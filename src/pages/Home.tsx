import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Has hecho click</h1>
      <Link to="/login">Ir a "/login"</Link>
    </div>
  );
}

export default HomePage;
