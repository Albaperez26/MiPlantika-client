import { useEffect, useState } from "react";
import "./HomePage.css";
import imgPrincipal from "../src/assets/img-principal.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  const [species, setSpecies] = useState([]);
  const [specieName, setSpecieName] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5005/species?q=${specieName}`) //poner el import mediavite!
      .then((response) => response.json())
      .then((species) => {
        setSpecies(species);
      });
  }, [specieName]);

  const handleSpecieName = (e) => {
    setSpecieName(e.target.value);
  };

  return (
    <div className="home-page">
      <h1>Mi Plantika</h1>
      <h3>Explora. Comparte. Cultiva.</h3>
      <img className="img-principal" src={imgPrincipal}></img>
      <div className="buscador-home-page">
        <input
          className="buscador-style"
          type="text"
          placeholder="Buscar familia..."
          onChange={handleSpecieName}
        />
      </div>

      {species.map((specie) => (
        <div className="home-page-card">
          <Link to={`/species/${specie.id}`} key={specie.id}>
            <div className="specie-card">
              <h2 className="specie">{specie.nombre}</h2>
              <img className="image-specie" src={specie.imagen}></img>
              <div className="specie">
                Número total de especies: {specie.numeroDeEspecies}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
