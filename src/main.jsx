import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  </>
);
