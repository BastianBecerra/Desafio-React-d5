import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {} from "react-router-dom"
import NavBar from "./componentes/NavBar"
import Home from "./componentes/Home"
import Contacto from "./componentes/Contacto"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
