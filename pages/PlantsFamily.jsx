import { useEffect, useState } from "react";

function PlantsFamily() {
  const [families, setFamilies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/species")
      .then((respons) => respons.json())
      .then((families) => {
        setFamilies(families);
      });
  }, []);

  return (
    <div className="family-page">
      {families.map((family) => (
        <div className="family-card">
          <div className="family" key={family.id}>
            {family.nombre}
          </div>
        </div>
      ))}
    </div>
  );
}
export default PlantsFamily;
