import { Link } from "react-router-dom";
import { Login } from "../components/user";

function LoginPage() {
  return (
    <div>
      <Login />
      <Link to="/">Ir a "/"</Link>
    </div>
  );
}

export default LoginPage;
