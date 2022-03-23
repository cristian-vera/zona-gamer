import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route,
} from "react-router-dom";
import Contacto from "./components/pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <div>  
            <h1>"Encuentra tu proxima aventura"</h1>
            <ItemListContainer texto="Bienvenidos:"/>
            <ItemDetailContainer/>
          </div>
        }/>
        <Route path="/productos/:categoryId" element={ <ItemListContainer/> }/>
        <Route path= "/detail/:itemId" element={ <ItemDetailContainer/> }/>
        <Route path="/contacto" element={ <Contacto/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
