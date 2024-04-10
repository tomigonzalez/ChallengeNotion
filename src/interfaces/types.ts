export type Service = {
  id: number;
  name: string;
  description: string;
  category: string;
};

export type ServiceContextType = {
  selectedService: Service | null;
  setSelectedService: (value: Service | null) => void;
};

export interface CategorizedService {
  category: string;
  services: Service[];
}

export interface ServiceData {
  services: Service[];
  categorizedData: CategorizedService[];
}
