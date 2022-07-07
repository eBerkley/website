import "./App.css";
import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import { ResponseProvider } from "./utils/useResponsiveView";


export default function App() {
  return (
    <ResponseProvider>
      <NavBar />
      <Outlet />
    </ResponseProvider>
  );
}
