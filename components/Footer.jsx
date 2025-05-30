import "./Footer.css";
import imagen from "../src/assets/miplantika.png";
function Footer() {
  return (
    <footer className="footer">
      <img className="imagen" src={imagen} />
      <p>"Cuidar una planta es cuidar la vida." 🌱</p>
      <p>&copy; 2025 MiPlantika. Todos los derechos reservados.</p>
    </footer>
  );
}
export default Footer;
