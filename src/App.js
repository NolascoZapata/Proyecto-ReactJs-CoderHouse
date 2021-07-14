import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting='Item List Container' item='item'/>
      
    </div>
  );
}

export default App;
