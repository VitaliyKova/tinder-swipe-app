// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import FullInfo from "../FullInfo/FullInfo";
import AgentPage from "../pages/AgentPage";
import "./app.css";
import CountryPage from "../pages/CountryPage/CountryPage";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountryPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/FullInfo/:id" element={<FullInfo />} />
        <Route path="/agent/:id" element={<AgentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
