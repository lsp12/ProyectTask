import React from "react";
import "./App.css";
import Home from "./View/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./View/Tasks/Tasks";
import Layout from "./Components/Layout/Layout";
import SideNav from "./Components/SideNav/SideNav";
import DrawerNav from "./Components/DrawerNav/DrawerNav";
import { Hidden } from "@mui/material";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SideNav />
      <Hidden lgUp>
      <DrawerNav />
      </Hidden>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tasks" element={<Tasks />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
