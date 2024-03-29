import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DND from "@/pages/DND";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<DND />} path="/dnd" />
      </Routes>
    </Router>
  );
};

export default MainRoutes;