import Acordion from "../../components/Acordion/Acordion";
import useService from "../../hooks/ConsumirServices";

import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { StateContext } from "../../context/StateContext";
import Turnos from "../Turnos/Turnos";
import Confirmar from "../../components/Confirmar/Confirmar";
import useTurnos from "../../hooks/ConsumirTurnos";
import Stepper from "../../components/Stepper/Stepper";
import Loading from "../../components/ui/Loading/Loading";

interface Props {
  horarioSeleccionado: string | null;
  setHorarioSeleccionado: Dispatch<SetStateAction<string | null>>;
}

const Reservar = (props: Props) => {
  const { categorizedData } = useService();
  const example = useContext(StateContext);

  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  const date = useTurnos();

  useEffect(() => {
    if (!date) {
      setLoading(true); // Si categorizedData es nulo, aún estamos cargando
    } else {
      setLoading(false); // Si categorizedData tiene datos, la carga ha finalizado
    }
  }, [date]);

  const fecha = date?.date;

  const handleNextPage = () => {
    if (currentPage != 2) setCurrentPage(currentPage + 1);
    setCurrentStep(currentStep + 1);
  };

  const handleBackPage = () => {
    setCurrentPage(currentPage - 1);
    setCurrentStep(currentStep - 1);
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center pb-4">
      <div className="w-4/5 h-40 flex flex-col justify-center sm:w-2/5">
        <Stepper currentStep={currentStep}></Stepper>
      </div>
      <div className="w-3/5  border">
        {currentPage === 0 && (
          <h2 className="text-black p-2 font-bold text-xl"> Categorias</h2>
        )}
        {currentPage === 1 && (
          <h2 className="text-black p-2 font-bold text-xl"> Turnos</h2>
        )}
        {currentPage === 2 && (
          <h2 className="text-black p-2 font-bold text-xl"> Confirmar</h2>
        )}

        {currentPage === 0 && (
          <>
            ({loading && <Loading></Loading>})
            {!loading &&
              categorizedData.map((services) => (
                <Acordion key={services.category} {...services}></Acordion>
              ))}
          </>
        )}
        {currentPage === 1 && (
          <Turnos
            horarioSeleccionado={props.horarioSeleccionado}
            setHorarioSeleccionado={props.setHorarioSeleccionado}
            handleNextPage={handleNextPage}
            handleBackPage={handleBackPage}
          ></Turnos>
        )}
        {currentPage === 2 && (
          <Confirmar
            handleBackPage={handleBackPage}
            horarioSeleccionado={props.horarioSeleccionado}
            servicio={example.selectedService}
            fecha={fecha}
          ></Confirmar>
        )}
        {currentPage == 0 && (
          <div className="  w-full p-4 flex flex-row justify-around">
            <div className="pt-20">
              <button
                className={`border p-2 pl-5 pr-5 text-white bg-gray-700 hover:bg-gray-500 ${
                  !example.selectedService
                    ? "opacity-50 cursor-not-allowed disabled"
                    : ""
                } `}
                onClick={example.selectedService ? handleNextPage : () => {}}
              >
                Siguiente
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reservar;
