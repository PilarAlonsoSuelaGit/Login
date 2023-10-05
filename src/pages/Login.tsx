import { Link } from "react-router-dom";
import { Login } from "../components/User";

function LoginPage() {
  return (
    <div>
      <Login />
      <Link to="/home">Ir a "/home"</Link>
    </div>
  );
}

export default LoginPage;
