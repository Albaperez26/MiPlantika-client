import image404 from "../public/error404.png";
import "./ErrorPage.css";
function ErrorPage() {
  return (
    <div className="error-style">
      <img className="img-error" src={image404}></img>
      <div className="texto-error">
        <h1>¡Vaya! ¡Parece que ha habido un error!</h1>
        <h3>Esta ruta no existe o está en construcción, vuelve a la Home</h3>
      </div>
    </div>
  );
}
export default ErrorPage;
