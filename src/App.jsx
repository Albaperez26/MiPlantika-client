import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer";
import "./App.css";
import SpeciesDetails from "../pages/SpeciesDetails";
import PlantsDetails from "../pages/PlantsDetails";
import CreatePlants from "../pages/CreatePlants";
import EditPlants from "../pages/EditPlants";
import AboutUs from "../components/AboutUs";
import ErrorPage from "../pages/ErrorPage";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/species/:speciesId" element={<SpeciesDetails />} />
        <Route path="plants/:plantsId" element={<PlantsDetails />} />
        <Route
          path="/species/:speciesId/create-plant"
          element={<CreatePlants />}
        />
        <Route path="/plants/:plantsId/edit" element={<EditPlants />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
