import dayjs from "dayjs";
import useTurnos from "../../hooks/ConsumirTurnos";
import Turno from "./Turno";
import { useEffect, useState } from "react";
import Loading from "../../components/ui/Loading/Loading";

function obtenerHora(horario: string): number {
  return parseInt(horario.split(":")[0]);
}

interface Props {
  setHorarioSeleccionado: React.Dispatch<React.SetStateAction<string | null>>;
  handleNextPage: () => void;
  handleBackPage: () => void;
  horarioSeleccionado: string | null;
}

const Turnos = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const turnos = useTurnos();

  useEffect(() => {
    if (turnos) {
      setLoading(false);
    }
  }, [turnos]);

  const horarios = turnos?.availableTimeslots;
  const fecha = dayjs(turnos?.date);
  const fechaFormateada = fecha.format("DD MMMM");

  const horariosManana = horarios?.filter(
    (horario) => obtenerHora(horario) < 12
  );
  const horariosTarde = horarios?.filter(
    (horario) => obtenerHora(horario) >= 12
  );

  const handleHorarioClick = (horario: string) => {
    if (props.horarioSeleccionado === horario) {
      props.setHorarioSeleccionado(null);
    } else {
      props.setHorarioSeleccionado(horario);
    }
  };

  return (
    <div className=" text-black p-2">
      {loading && <Loading></Loading>}
      {!loading && (
        <>
          <p>{fechaFormateada}</p>

          <div className="grid grid-cols-3 gap-5 justify-items-center text-white  m-4">
            {horariosManana?.map((horario, index) => (
              <Turno
                key={index}
                horarios={horario}
                onClick={() => handleHorarioClick(horario)}
                horarioSeleccionado={props.horarioSeleccionado}
              />
            ))}
          </div>
        </>
      )}

      <div className="">
        {!loading && (
          <>
            <p>{fechaFormateada}</p>

            <div className="grid grid-cols-3 gap-5 justify-items-center text-white  m-4">
              {horariosTarde?.map((horario, index) => (
                <Turno
                  key={index}
                  horarios={horario}
                  onClick={() => handleHorarioClick(horario)}
                  horarioSeleccionado={props.horarioSeleccionado}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className=" w-full p-4 flex flex-row justify-around">
        <button
          className={`border p-2 pl-5 pr-5 text-white bg-gray-700 hover:bg-gray-500 `}
          onClick={props.handleBackPage}
        >
          Volver
        </button>

        <button
          className={`border p-2 pl-5 pr-5 text-white bg-gray-700 hover:bg-gray-500 ${
            !props.horarioSeleccionado
              ? "opacity-50 cursor-not-allowed disabled"
              : ""
          }`}
          onClick={props.horarioSeleccionado ? props.handleNextPage : () => {}}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Turnos;
