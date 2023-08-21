// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './views/Home';
import axios from 'axios';
// axios.defaults.baseURL = "http://localhost:3001/" ;
axios.defaults.baseURL = "https://vineart-backend-production.up.railway.app/" ;
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
