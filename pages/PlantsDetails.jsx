import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./PlantsDetails.css";

function PlantsDetails() {
  const params = useParams();
  const [plantDetails, setPlantDetails] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/plants/${params.plantsId}?_embed=plants`
      );
      setPlantDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error); //poner una página de error
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
        Color de mi planta: {plantDetails.colorDeMiPlanta}
      </p>
      <p className="text-plants">
        ¿De donde es su origen? {plantDetails.localizacion}
      </p>
      <p className="text-plants">
        Características principales: {plantDetails.características}
      </p>
      <p className="text-plants">
        Comentarios de otros usuarios: "{plantDetails.comentarios}"
      </p>
    </div>
  );
}
export default PlantsDetails;
