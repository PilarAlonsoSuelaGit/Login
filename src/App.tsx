import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";

import "./app.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
