
import './App.css';
import Home from './Home';
import { Login } from './User';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path="Home" element={ <Home/> } />
      </Routes>
        
        <Login />
      </header>
    </div>
  );
}

export default App;
