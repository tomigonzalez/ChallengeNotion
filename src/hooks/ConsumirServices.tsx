import axios from "axios";
import { useEffect, useState } from "react";
import { CategorizedService, Service, ServiceData } from "../interfaces/types";

const useService = (): ServiceData => {
  const [services, setServices] = useState<Service[]>([]);
  const [categorizedData, setCategorizedData] = useState<CategorizedService[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesResponse = await axios.get(
          "https://c47b1fbc3fbc4bebab4202dcfaa1ee4c.api.mockbin.io/"
        );
        const servicesData: Service[] = servicesResponse.data.services;
        setServices(servicesData);

        // Categorizar los servicios
        const categories = servicesData
          .map((service: Service) => service.category)
          .filter(
            (category: string, index: number, array: string[]) =>
              array.indexOf(category) === index
          );

        const categorizedData = categories.map((category: string) => ({
          category,
          services: servicesData.filter(
            (service: Service) => service.category === category
          ),
        }));

        setCategorizedData(categorizedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return { services, categorizedData };
};

export default useService;
