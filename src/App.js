import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contacto from './components/pages/Contacto';
import Banner from './components/Banner/Banner';
import { CartProvider } from './context/CartProvider';
import { Cart } from './components/Cart/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <div>
              <Banner/>  
              <ItemListContainer texto="Bienvenidos:"/>
            </div>
          } />
          <Route path="/productos/:categoryId" element={ <ItemListContainer/> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
          <Route path="/cart" element={ <Cart/> }/>
          <Route path="/contacto" element={ <Contacto/> }/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
