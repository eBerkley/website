import "./App.css";
import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}
