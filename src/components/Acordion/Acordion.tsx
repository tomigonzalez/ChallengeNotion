import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";

import { useContext } from "react";
import { StateContext } from "../../context/StateContext";

interface Props {
  category: string;
  services: Service[];
}
interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
}

const Acordion = (props: Props) => {
  const example = useContext(StateContext);

  const handleSelectService = (service: Service) => {
    if (example.selectedService?.id === service.id) {
      example.setSelectedService(null);
    } else {
      example.setSelectedService(service);
    }
  };

  return (
    <Accordion defaultIndex={[1]} allowMultiple className="text-black p-2">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <div className="bg-gray-200 w-full flex justify-between hover:bg-sky-100">
              <div className="flex-1 text-left border-none p-1">
                {props.category}
              </div>
              <AccordionIcon />
            </div>
          </AccordionButton>
        </h2>
        {props.services.map((service) => (
          <AccordionPanel pb={4} key={service.id} className="border m-1 p-2">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <div className="w-full text-right mt-6 text-white">
              <button
                onClick={() => handleSelectService(service)}
                className={`${
                  example.selectedService?.id === service.id
                    ? "bg-gray-300"
                    : "bg-gray-700"
                } border p-1 hover:bg-gray-500`}
              >
                {example.selectedService?.id === service.id
                  ? "Deseleccionar"
                  : "Seleccionar"}
              </button>
            </div>
          </AccordionPanel>
        ))}
      </AccordionItem>
    </Accordion>
  );
};

export default Acordion;
