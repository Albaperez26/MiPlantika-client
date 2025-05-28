import { useEffect, useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    //poner axios.get en vez de fetch
    fetch("http://localhost:5005/species") //poner el import mediavite!
      .then((response) => response.json())
      .then((species) => {
        setSpecies(species);
      });
  }, []);

  return (
    <div className="home-page">
      <h1>Home page</h1>
      {species.map((specie) => (
        <div key={specie.id}>{specie.nombre}</div>
      ))}
    </div>
  );
}

export default HomePage;
