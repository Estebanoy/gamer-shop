import './NavBar.css';
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    
  return (
    <ul>
        <a href='#'><li>Gamer Now</li></a>
        <li><input placeholder="Que buscas?"></input><button>Buscar</button></li>
        <a href='#'><li>Usuario</li></a>
        <a href='#'><li className='liCarrito'><CartWidget/></li></a>
        
    </ul>
  )
}

export default NavBar