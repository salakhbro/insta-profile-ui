import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/signup/Signup.jsx";
import Pagina from "./components/pagina/Pagina.jsx";
import Stories from "./components/storiesPage/Stories.jsx";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pagina />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/stories" element={<Stories />} />
    </Routes>
  );
}

export default App;