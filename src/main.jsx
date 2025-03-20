import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./AppLayout/AppLayout";
import Home from "./pages/Home";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import AdvancedFullStack from "./pages/AdvancedFullStack";
import DSARoadmap from "./pages/DSARoadmap";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/*for enable client side routing */}{" "}
      <Routes>
        {/*Routing Structure */}{" "}
        <Route path="/" element={<App />}>
          {/*map URLs to components */} {/* Top-level route */}
          <Route element={<AppLayout />}>
            {/* Nested routes inside AppLayout */}{" "}
            <Route index element={<Home />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/backend" element={<Backend />} />
            <Route path="/fullstack" element={<AdvancedFullStack />} />
            <Route path="/dsa" element={<DSARoadmap />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
