import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./PlantsDetails.css";

function PlantsDetails() {
  const params = useParams();
  const [plantDetails, setPlantDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/plants/${
          params.plantsId
        }?_embed=plants`
      );
      setPlantDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      navigate("/error");
      //poner una página de error
    }
  };

  if (plantDetails === null) {
    return <h3>... buscando detalles</h3>;
  }

  return (
    <div className="plants-container">
      <h1>{plantDetails.nombre}</h1>
      <img className="plants-img" src={plantDetails.imagen}></img>
      <p className="text-plants">
        <strong>Color de mi planta: </strong>
        {plantDetails.colorDeMiPlanta}
      </p>
      <p className="text-plants">
        <strong>¿De donde es su origen? </strong>
        {plantDetails.localizacion}
      </p>
      <p className="text-plants">
        <strong>Características principales: </strong>
        {plantDetails.características}
      </p>
      <p className="text-plants">
        <strong>Comentarios de otros usuarios:</strong> "
        {plantDetails.comentarios}"
      </p>

      <Link to={`/plants/${params.plantsId}/edit`}>
        <button className="edit-button">Edita esta planta</button>
      </Link>
    </div>
  );
}
export default PlantsDetails;
