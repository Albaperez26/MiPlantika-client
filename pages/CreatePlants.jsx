import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function CreatePlants() {
  const navigate = useNavigate();
  const { speciesId } = useParams();

  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [origen, setOrigen] = useState("");
  const [caracteristicas, setCaracteristicas] = useState("");
  const [imagen, setImagen] = useState("");
  const [comentarios, setComentarios] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPlant = {
      nombre,
      colorDeMiPlanta: color,
      localizacion: origen,
      características: caracteristicas,
      comentarios: "",
      imagen,
      speciesId,
    };

    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/plants`, newPlant);
      navigate(`/species/${speciesId}`);
    } catch (error) {
      console.error("Error al crear planta:", error);
    }
  };

  return (
    <div className="CreatePlant">
      <h3>Añade una nueva planta</h3>

      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Color:</label>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />

        <label>Origen:</label>
        <input
          type="text"
          value={origen}
          onChange={(e) => setOrigen(e.target.value)}
        />

        <label>Comentario:</label>
        <input
          type="text"
          value={comentarios}
          onChange={(e) => setComentarios(e.target.value)}
        />

        <label>Características:</label>
        <textarea
          value={caracteristicas}
          onChange={(e) => setCaracteristicas(e.target.value)}
        />

        <label>Foto (URL): </label>
        <input
          type="url"
          name="imagen"
          placeholder="https://example.com/foto.jpg"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          required
        />
        {imagen && (
          <div style={{ marginTop: "10px" }}>
            <img
              src={imagen}
              alt="Vista previa"
              style={{ width: "200px", borderRadius: "8px" }}
            />
          </div>
        )}

        <button type="submit">Guardar planta</button>
      </form>
    </div>
  );
}

export default CreatePlants;
