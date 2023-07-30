import React from "react";
import { Route, Routes } from 'react-router-dom';
import AudioPlayer from "./components/AudioPlayer";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import { Nav } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
