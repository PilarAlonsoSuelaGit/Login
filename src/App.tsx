import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
