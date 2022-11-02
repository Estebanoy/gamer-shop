
import './App.css';
import NavBar from './components/NavBar/NavBar';
import  ItemListContainer  from './components/Contenedor/ItemListContainer';

function App() {

  return (
    <div className="App">
        <NavBar>
          
        </NavBar>
        <ItemListContainer greeting="Bienvenido!"></ItemListContainer>
        
    </div>
  );
}

export default App;
