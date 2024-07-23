import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import FullInfo from "../FullInfo/FullInfo";
import AgentPage from "../pages/AgentPage";
import "./app.css";
import CountryPage from "../pages/CountryPage/CountryPage";
import { qr } from "../resorces/resources";
import FullAgentPage from "../pages/FullAgentPage";
import Chat from "../pages/Chat/Chat";
import ObjectsFullPage from "../pages/ObjectsFullPage";

function App() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobileView ? (
        <Router>
          <Routes>
            {/* <Route path="/" element={<CountryPage />} /> */}
            {/* <Route path="/home" element={<MainPage />} /> */}
            {/* <Route path="/agent/:id" element={<AgentPage />} /> */}
            <Route path="/full_agent" element={<FullAgentPage />} />
            <Route path="/" element={<AgentPage />} />
            <Route path="/FullInfo/:id" element={<FullInfo />} />
            <Route path="/chat/:id" element={<Chat />} />
            <Route path="/full_objects" element={<ObjectsFullPage />} />
          </Routes>
        </Router>
      ) : (
        <div className="qr-container">
          <img src={qr} alt="QR Code" className="qr-image" />
        </div>
      )}
    </div>
  );
}

export default App;
