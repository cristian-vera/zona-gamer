import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from './components/NavBar/NavBar';
import './components/ItemDetailContainer/ProductsAPI';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavBar />
      <h1>"Encuentra tu proxima aventura"</h1>
      <ItemListContainer texto="Bienvenidos:"/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
