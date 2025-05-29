import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./SpeciesDetails.css";

function SpeciesDetails() {
  const params = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/species/${params.speciesId}?_embed=plants`
      );
      setDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error); //poner una página de error
    }
  };

  if (details === null) {
    return <h3>... buscando detalles</h3>;
  }

  return (
    <div>
      <div className="species-details">
        <h1>{details.nombre}</h1>
        <img className="species-image" src={details.imagen}></img>
        <p> Número de especies: {details.numeroDeEspecies}</p>
        <p>Géneros: {details.generos}</p>
      </div>
      {/*Crear una planta nueva :) */}
      <div className="card-plants">
        <Link to={`/species/${details.id}/create-plant`}>Añade tu planta</Link>

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
  );
}
export default SpeciesDetails;
