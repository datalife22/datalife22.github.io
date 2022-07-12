import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Team from "./pages/Team";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="results" element={<Results />} />
          <Route path="team" element={<Team />} />
          <Route path="about" element={<About />} />
        </Routes>

    </div>
  );
}


export default App;
