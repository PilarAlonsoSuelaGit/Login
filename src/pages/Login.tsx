import { Link } from "react-router-dom";

import { Login } from "../components/user";
import { User } from "../typings/user";

function LoginPage() {
  const handleSubmit = (data: User) => {
    console.log(data);
  };

  return (
    <div>
      <Login onSubmit={handleSubmit} />
      <Link to="/">Ir a "/"</Link>
    </div>
  );
}

export default LoginPage;
