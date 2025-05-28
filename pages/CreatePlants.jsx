import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreatePlants() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [color, setColor] = useState("");
  const [origen, setOrigen] = useState("");
  const [caracteristicas, setCaracteristicas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPlant = {
      nombre,
      color,
      origen,
      caracteristicas,
    };

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/plants`, newPlant)
      .then(() => navigate("/plants"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="CreatePlant">
      <h3>Añadir nueva planta</h3>

      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label>Color:</label>
        <input
          type="text"
          name="color"
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

        <label>Características:</label>
        <textarea
          value={caracteristicas}
          onChange={(e) => setCaracteristicas(e.target.value)}
        />

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default CreatePlants;
