import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemDetailContainer from "./components/ItemListContainer/Item/ItemDetailContainer/ItemDetailContainer"



function App() {
  return (
      <div className='App'>
        <NavBar/>
        <ItemListContainer greeting='Nuestros productos' item='item'/>
      </div>
  );
}

export default App;
