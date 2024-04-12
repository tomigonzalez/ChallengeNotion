import { useNavigate } from "react-router-dom";
import { Service } from "../../interfaces/types";

type Props = {
  horarioSeleccionado: string | null;
  servicio: Service | null;
  fecha: string | undefined;
  handleBackPage: () => void;
};

const Confirmar = (props: Props) => {
  const navigate = useNavigate();
  const handleConfirm = () => {
    navigate("/misturnos"); // Navigate to /misturnos without reloading
  };

  return (
    <div className="text-black p-2">
      <div>
        <div className="flex flex-row gap-2">
          <p>Servicio: </p>
          <p>{props.servicio?.name}</p>
        </div>
        <div className="flex flex-row gap-2">
          <p className="">Fecha: </p>
          <p>{props.fecha}</p>
          <p>{props.horarioSeleccionado}</p>
        </div>
      </div>
      <div className=" w-full p-4 flex flex-row justify-around">
        <button
          className={`border p-2 pl-5 pr-5 text-white bg-gray-700 hover:bg-gray-500 `}
          onClick={props.handleBackPage}
        >
          Volver
        </button>
        <button
          className={`border p-2 pl-5 pr-5 text-white bg-gray-700 hover:bg-gray-500 `}
          onClick={handleConfirm}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default Confirmar;
