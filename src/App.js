
import './App.css';
import NavBar from './components/NavBar/NavBar';
import  ItemListContainer  from './components/Contenedor/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
          <NavBar>
            
          </NavBar>
          <ItemListContainer></ItemListContainer>
          
      </div>
    </BrowserRouter>
  );
}

export default App;
