import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CovidPrediction from "./CovidPrediction";
import Report from "./pages/Report";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<CovidPrediction />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
