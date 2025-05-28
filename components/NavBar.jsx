import { Link } from "react-router-dom";
import logo from "../src/assets/logo.png";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="nav-bar">
      <img className="img-logo" src={logo}></img>
      <Link to="/">
        <h1 className="titulo-navbar">MiPlantika</h1>
      </Link>
    </nav>
  );
}
export default NavBar;
