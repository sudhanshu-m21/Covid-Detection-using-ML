// // import React from "react";
// // import ReactDOM from "react-dom";
// // import "./index.css";
// // import CovidPrediction from "./CovidPrediction";

// // ReactDOM.render(<CovidPrediction />, document.getElementById("root"));
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import CovidPrediction from "./CovidPrediction";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<CovidPrediction />);

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
