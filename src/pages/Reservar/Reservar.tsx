import Acordion from "../../components/Acordion/Acordion";
import useService from "../../hooks/ConsumirServices";
import Steppers from "../../components/Stepper/Stepper";
import { useContext, useState } from "react";
import { StateContext } from "../../context/StateContext";

const Reservar = () => {
  const { categorizedData } = useService();
  const example = useContext(StateContext);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleBackPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center pb-4">
      <div className="w-2/5 h-40 flex flex-col justify-center">
        <Steppers></Steppers>
      </div>
      <div className="w-3/5   border">
        {categorizedData.map((services) => (
          <Acordion key={services.category} {...services}></Acordion>
        ))}
      </div>

      <div className=" flex flex-col justify-between text-right">
        <div className="pt-20">
          {example.selectedService && (
            <button className="border p-2 pl-5 pr-5 text-white bg-gray-500">
              Siguiente
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservar;
