import { createContext, ReactNode, useState } from "react";
import { Service, ServiceContextType } from "../interfaces/types";

// Creamos el contexto con createContext y proporcionamos un valor inicial vacío
const StateContext = createContext<ServiceContextType>({
  selectedService: null,
  setSelectedService: () => {}, // Por defecto, establecemos una función vacía
});

interface props {
  children: ReactNode;
}
// Creamos un componente que actuará como proveedor del contexto
const StateProvider = ({ children }: props) => {
  // Definimos el estado del servicio seleccionado
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Proporcionamos el contexto a todos los componentes hijos
  return (
    <StateContext.Provider value={{ selectedService, setSelectedService }}>
      {children}
    </StateContext.Provider>
  );
};
// Exportamos tanto el contexto como el proveedor para que puedan ser utilizados en otros componentes
export { StateContext, StateProvider };
