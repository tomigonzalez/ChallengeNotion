import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import { Box } from "@chakra-ui/react";
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
  // const [selectedService, setSelectedService] = useState<Service | null>(null);

  const example = useContext(StateContext);

  const handleSelectService = (service: Service) => {
    if (example.selectedService?.id === service.id) {
      example.setSelectedService(null);
    } else {
      example.setSelectedService(service);
    }
  };

  return (
    <Accordion defaultIndex={[1]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <div className="bg-gray-200 w-full flex justify-between">
              <Box as="span" flex="1" textAlign="left" border="none">
                {props.category}
              </Box>
              <AccordionIcon />
            </div>
          </AccordionButton>
        </h2>
        {props.services.map((service) => (
          <AccordionPanel pb={4} key={service.id} className="border m-1">
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <div className="w-full text-right mt-">
              <button
                onClick={() => handleSelectService(service)}
                className={`${
                  example.selectedService?.id === service.id
                    ? "bg-gray-500"
                    : "bg-gray-300"
                } border p-1`}
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
