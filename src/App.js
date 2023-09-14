// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './views/Home/Home';
import axios from 'axios';
import ResponsiveNavbar from './components/ResponsiveNavbar/ResponsiveNavbar';
import CartDetail from './views/CartDetail/CartDEtail';
import CartSidebar from './components/CartSidebar/CartSidebar';

axios.defaults.baseURL = "http://localhost:3001/" ;
// axios.defaults.baseURL = "https://vineart-backend-production.up.railway.app/" ;
function App() {
  return (
    <div className="App">
      <ResponsiveNavbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<CartDetail/>} />
      <Route path="/user" element={<CartSidebar/>} />
      </Routes>
    </div>
  );
}


export default App;




// Posibles 25 para Tucuman

// 1 rossi  
// 2 enzo
// 3 verce 
// 4 juani 
// 5 nahuelote
// 6 tucu (pre)
// 7 mono 
// 8 canepa(pre)
// 9 poki 
// 10 lorenzo 
// 11 leandro 
// 12 broglia 
// 13 igna baudino
// 14 igna barrionuevo
// 15 mateo frontera

// 16 panda 
// 17 masa 
// 18 scon 
// 19 juani 
// 20 ferraro (pre)
// 21 chop (pre)
// 22 luchi 
// 23 lalo 
// 24 fran moya 
// 25 toto 
// 26 julian mateo (pre)
// 27 lauti sanchez (pre)
// 28 feli baudino (pre)
// 29 agus roson 
// 30 nico visconti

// 14 forwards 
// 16 backs 

// 7 en pre esta fecha (4fwd 3back)

// Lesionados
// 1 Jairo
// 2 lancha 
// 3 igna gil 
// 4 nano 
// 5 juampi 
// 6 chino ferraro

// NO ESTAN
// 1 chocha
// 2 jenaro
// 3 martin quiño
// 4 carlos bautista

// 40 jugadores y no queremos ir a tucuman?

