import logo from "../src/assets/logo.png";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="nav-bar">
      <img className="img-logo" src={logo}></img>
      <h1 className="titulo-navbar">MiPlantika</h1>
    </nav>
  );
}
export default NavBar;
