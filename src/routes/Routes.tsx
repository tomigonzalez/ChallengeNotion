import React from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";
// import Reservar from "../pages/Reservar/Reservar";

// import TurnosPag from "../pages/TurnosPag/TurnosPag";

const AppRoutes: React.FC = () => {
  // const [horarioSeleccionado, setHorarioSeleccionado] = useState<string | null>(
  //   null
  // );
  return (
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route
        path="/reservas"
        element={
          // <Reservar
          //   horarioSeleccionado={horarioSeleccionado}
          //   setHorarioSeleccionado={setHorarioSeleccionado}
          // />
          <div></div>
        }
      ></Route>
      <Route
        path="/misturnos"
        element={
          // <TurnosPag horarioSeleccionado={horarioSeleccionado} />
          <div></div>
        }
      ></Route>
      <Route path="*" element={<div />} />
    </Routes>
  );
};

export default AppRoutes;
