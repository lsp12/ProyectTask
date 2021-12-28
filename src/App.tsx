import React from "react";
import "./App.css";
import Home from "./View/Home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Tasks from "./View/Tasks/Tasks";
import SideNav from "./Components/SideNav/SideNav";
import DrawerNav from "./Components/DrawerNav/DrawerNav";
import { Hidden } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  

  return (
    <div className="App">
      <BrowserRouter>
      <SideNav />
      <Hidden lgUp>
      <DrawerNav />
      </Hidden>
        <Routes>
          <Route path="/" element={<Home />} />
          {isAuthenticated ? (
            <Route path="/Tasks" element={<Tasks />} /> 
          ):(
            <Route path="/Tasks" element={<Navigate replace to="/" />} />
          )}
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
