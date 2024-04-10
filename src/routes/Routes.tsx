import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";
import Reservar from "../pages/Reservar/Reservar";
import Turnos from "../pages/Turnos/Turnos";

const AppRoutes: React.FC<object> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/reservas" element={<Reservar />}></Route>
        <Route path="/misturnos" element={<Turnos />}></Route>
        <Route path="*" element={<Inicio />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
