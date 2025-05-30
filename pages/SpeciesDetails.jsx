import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./SpeciesDetails.css";
import { useNavigate } from "react-router-dom";

function SpeciesDetails() {
  const params = useParams();
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/species/${
          params.speciesId
        }?_embed=plants`
      );
      setDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
      //poner una página de error
    }
  };

  if (details === null) {
    return <h3>... buscando detalles</h3>;
  }

  return (
    <div>
      <div className="species-details">
        <div className="species-details-container">
          <h1>{details.nombre}</h1>
          <img className="species-image" src={details.imagen}></img>
          <p>
            {" "}
            <strong>Descripción: </strong>
            {details.descripcion}
          </p>
          <p>
            {" "}
            <strong>Número de especies: </strong>
            {details.numeroDeEspecies}
          </p>
          <p>
            {" "}
            <strong>Géneros: </strong>
            {details.generos}
          </p>
        </div>
      </div>

      {/*Crear una planta nueva :) */}

      <div className="plants-container">
        <Link to={`/species/${details.id}/create-plant`}>
          <button className="add-plant">Añade tu planta</button>
        </Link>
        <div className="plants-cards">
          {details.plants.map((plant) => (
            <Link to={`/plants/${plant.id}`} key={plant.id}>
              <div className="card-plants">
                <img className="plant-image" src={plant.imagen}></img>
                <h3 className="plant">{plant.nombre}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SpeciesDetails;
