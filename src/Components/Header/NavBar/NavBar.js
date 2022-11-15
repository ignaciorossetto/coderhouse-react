import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import Carrito from "./Carrito/Carrito";
import { NavLink } from "react-router-dom";



function NavBar() {
  return (
    <nav style={styles.container}>
      <ul style={styles.ul} className="header__nav__menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Nosotros</NavLink>
        </li>
        <li>
            <NavDropdown
              title="Productos"
              id="basic-nav-dropdown"
              style={styles.navdropdown}
            >
              <NavLink className='navlinks' to="/products/category/almohadon">
                  <p>Almohadones</p>
              </NavLink>
              <NavLink className='navlinks' to="/products/category/bolso">
                  <p>Bolsos</p>
              </NavLink>
              <NavLink className='navlinks' to="/products/category/ropadeCama">
                  <p>Ropa de cama</p>
              </NavLink>
            </NavDropdown>
        </li>
        <li>
          <NavLink to="/contact">Contacto</NavLink>
        </li>
        <li>
          <Carrito />
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    textAlign: "right",
    padding: "5px 0 5px 0",
    marginLeft: "15px",
    marginRight: "15px",
  },
  ul: {
    width: "auto",
    height: "40px",
    padding: "7px",
    display: "flex",
    backgroundColor: "rgba(255, 255, 255, 0.645)",
    borderRadius: "20px",
  },
  navdropdown: {
    borderRadius: "20px",
  },
};

export default NavBar;
