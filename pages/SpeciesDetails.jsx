import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SpeciesDetails() {
  const params = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/species/${params.speciesId}`
      );
      setDetails(response.data);
    } catch (error) {
      console.log(error); //poner una página de error
    }
  };

  if (details === null) {
    return <h3>... buscando detalles</h3>;
  }
  return (
    <div>
      <h1>{details.nombre}</h1>
      <p> Número de especies: {details.numeroDeEspecies}</p>
      <p>Géneros: {details.generos}</p>
    </div>
  );
}
export default SpeciesDetails;
