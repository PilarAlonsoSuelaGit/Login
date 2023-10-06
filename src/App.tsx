import { Routes, Route } from "react-router-dom";


import Home from "./pages/home";
import Login from "./pages/login";

import "./app.css";
import ToDoList from "./to-do-List/components/to-do-list";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="to-do-list" element={<ToDoList />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
