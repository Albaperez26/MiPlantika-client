import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer";
import PlantsFamily from "../pages/PlantsFamily";
import "./App.css";
import SpeciesDetails from "../pages/SpeciesDetails";
import PlantsDetails from "../pages/PlantsDetails";
import CreatePlants from "../pages/CreatePlants";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/species" element={<PlantsFamily />} />
        <Route path="/species/:speciesId" element={<SpeciesDetails />} />
        <Route path="plants/:plantsId" element={<PlantsDetails />} />
        <Route exact path="/plants/create" element={<CreatePlants />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
