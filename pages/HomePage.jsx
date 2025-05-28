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
        <Link to={`/species/${specie.id}`}>
          <div className="specie-card">
            <div className="specie" key={specie.id}>
              {specie.nombre}
            </div>
            <div className="specie" key={specie.id}>
              Número total de especies: {specie.numeroDeEspecies}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
