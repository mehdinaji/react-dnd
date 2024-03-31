import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DND from "@/pages/DND";
import Side from "@/pages/Side";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DND />} path="/dnd" />
        <Route element={<Side />} path="/side" />
      </Routes>
    </Router>
  );
};

export default MainRoutes;