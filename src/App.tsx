import "./App.css";
import Home from "./pages/Home";
import { Login } from "./components/User";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="Home" element={<Home />} />
        </Routes>

        <Login />
      </header>
    </div>
  );
}

export default App;
