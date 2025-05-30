import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditPlants.css";
function EditPlants() {
  const navigate = useNavigate();
  const { plantsId } = useParams();

  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [origen, setOrigen] = useState("");
  const [caracteristicas, setCaracteristicas] = useState("");
  const [imagen, setImagen] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [speciesId, setSpeciesId] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/plants/${plantsId}`)
      .then((response) => {
        const data = response.data;
        setNombre(data.nombre);
        setColor(data.colorDeMiPlanta);
        setOrigen(data.localizacion);
        setCaracteristicas(data.características);
        setImagen(data.imagen);
        setComentarios(data.comentarios);
        setSpeciesId(data.speciesId);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [plantsId]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const updatedPlant = {
      nombre,
      colorDeMiPlanta: color,
      localizacion: origen,
      características: caracteristicas,
      comentarios,
      imagen,
      speciesId,
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_SERVER_URL}/plants/${plantsId}`,
        updatedPlant
      );

      navigate(`/species/${speciesId}`);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  //Botón de borrar aqui

  const deletePlant = () => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/plants/${plantsId}`)
      .then(() => {
        navigate(`/species/${speciesId}`);
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };
  //termina boton de borrar
  return (
    <div className="edit-plants">
      <h3>🪴Edita esta planta: 🪴</h3>

      <div className="edit-form">
        <form onSubmit={handleFormSubmit}>
          <label className="edit-form">
            {" "}
            <strong>Nombre:</strong>
          </label>
          <input
            className="edit-form"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label className="edit-form">
            <strong>Color:</strong>
          </label>
          <input
            className="edit-form"
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />

          <label className="edit-form">
            <strong>Origen:</strong>
          </label>
          <input
            className="edit-form"
            type="text"
            value={origen}
            onChange={(e) => setOrigen(e.target.value)}
          />

          <label className="edit-form">
            <strong>Comentario:</strong>
          </label>
          <input
            className="edit-form"
            type="text"
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
          />

          <label className="edit-form">
            <strong>Características:</strong>
          </label>
          <textarea
            className="edit-form"
            value={caracteristicas}
            onChange={(e) => setCaracteristicas(e.target.value)}
          />

          <label className="edit-form">
            <strong>Foto (URL): </strong>
          </label>
          <input
            className="edit-form"
            type="url"
            name="imagen"
            placeholder="https://example.com/foto.jpg"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
          {/*Añadimos vista previa en la página tanto de editar como de crear, asi queda mejor */}
          <p>Vista previa de la imagen</p>
          {imagen && (
            <div style={{ margin: "10px 0" }}>
              <img
                src={imagen}
                alt="Vista previa"
                style={{ width: "200px", borderRadius: "8px" }}
              />
            </div>
          )}

          <button className="button" type="submit">
            Editar
          </button>
        </form>
      </div>
      <button className="button-delete" onClick={deletePlant}>
        Eliminar planta
      </button>
    </div>
  );
}
console.log("editplants cargando"); //funcionar, funciona, pero no se ve en pantalla---------voy a llorar
export default EditPlants;
