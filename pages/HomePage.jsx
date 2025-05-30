import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import imgPrincipal from "../src/assets/img-principal.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const navigate = useNavigate();
  const [species, setSpecies] = useState([]);
  const [specieName, setSpecieName] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/species?q=${specieName}`) //poner el import mediavite!
      .then((response) => {
        setSpecies(response.data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
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

      <div className="species-container">
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
    </div>
  );
}

export default HomePage;
