import { Link } from "react-router-dom";
import logo from "../src/assets/logo.png";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="titulo">
        <img className="img-logo" src={logo}></img>
        <h1 className="titulo-navbar">MiPlantika</h1>
      </div>
      <div className="nav-elements">
        <Link to="/" className="link-nav">
          <h4 className="nav-elements">Home</h4>
        </Link>

        <Link to="/aboutUs" className="link-nav">
          <h4 className="nav-elements">About us</h4>
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
