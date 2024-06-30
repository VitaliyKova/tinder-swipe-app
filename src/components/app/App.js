// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import FullInfo from "../FullInfo/FullInfo";
import Navigator from "../navigator/Navigator";
import "./app.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<MainPage />} />
        <Route path="/FullInfo/:id" element={<FullInfo />} />
      </Routes>
      <Navigator />
    </Router>
  );
}

export default App;
