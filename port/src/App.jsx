import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayProject from "./pages/DisplayProject";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/project" element={<DisplayProject />} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
