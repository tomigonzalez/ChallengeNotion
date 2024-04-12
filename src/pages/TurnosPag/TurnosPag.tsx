import { useContext, useEffect, useState } from "react";

import { StateContext } from "../../context/StateContext";
import useTurnos from "../../hooks/ConsumirTurnos";
import Loading from "../../components/ui/Loading/Loading";

interface Props {
  horarioSeleccionado: string | null;
}
const TurnosPag = (props: Props) => {
  const example = useContext(StateContext);
  const [loading, setLoading] = useState<boolean>(true);
  const date = useTurnos();
  useEffect(() => {
    if (date) {
      setLoading(false);
    }
  }, [date]);
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-white  text-black ">
      <h2 className="font-bold text-3xl mt-8">Mis turnos</h2>

      {props.horarioSeleccionado ? (
        <>
          <div className="flex flex-col w-3/5 h-full m-10 items-center border p-4">
            {loading && <Loading></Loading>}
            {!loading && (
              <>
                <div className="flex flex-row gap-2">
                  <p className="flex gap-2">
                    <p className="font-bold">Fecha: </p>
                    {date?.date}
                  </p>
                  <p>{props.horarioSeleccionado}</p>
                </div>
                <div>
                  <p className="flex gap-2">
                    <p className="font-bold">Servicio: </p>
                    {example.selectedService?.name}
                  </p>
                </div>
                <div>
                  <p>{example.selectedService?.description}</p>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <div className="mt-16 text-xl">
          <p>No tenes turnos activos</p>
        </div>
      )}
    </div>
  );
};

export default TurnosPag;
