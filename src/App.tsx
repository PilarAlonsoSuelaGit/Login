import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import ToDoListApp from "./to-do-List/pages/to-do-list-app";

import "./app.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="to-do-list-app" element={<ToDoListApp />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
