import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import './NavBar.css'
import Carrito from "./Carrito/Carrito";

function NavBar() {
  return (
    <nav style={styles.container}>
      <ul style={styles.ul} className='header__nav__menu'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
        <a href="#"> 
          <NavDropdown title="Productos" id="basic-nav-dropdown" style={styles.navdropdown}>
            <NavDropdown.Item href="#action/3.1"><p>Almohadones</p></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"><p>Bolsos</p></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"><p>Ropa de cama</p></NavDropdown.Item>
          </NavDropdown>
            </a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
        <li>
          <Carrito/>
        </li>
      </ul>
    </nav>
  );
}



const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        textAlign: 'right',
        padding: '5px 0 5px 0',
        marginLeft: '15px',
        marginRight: '15px',
    },
    ul: {
        width: 'auto',
        height: '40px',
        padding: '7px',
        display: 'flex',
        backgroundColor: 'rgba(255, 255, 255, 0.645)',
        borderRadius: '20px'
    },
    navdropdown:{    
        borderRadius: '20px'
    }

}

export default NavBar;
