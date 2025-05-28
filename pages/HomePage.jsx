import { useEffect, useState } from "react";
import "./HomePage.css";
import imgPrincipal from "../src/assets/img-principal.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/species") //poner el import mediavite!
      .then((response) => response.json())
      .then((species) => {
        setSpecies(species);
      });
  }, []);

  return (
    <div className="home-page">
      <h1>Home page</h1>
      <img className="img-principal" src={imgPrincipal}></img>
      {species.map((specie) => (
        <Link to={`/species/${specie.id}`} key={specie.id}>
          <div className="specie-card">
            <h2 className="specie">{specie.nombre}</h2>
            <img className="image-specie" src={specie.imagen}></img>
            <div className="specie">
              Número total de especies: {specie.numeroDeEspecies}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
