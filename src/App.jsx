import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import HomePage from "../pages/HomePage";
import Footer from "../components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
