// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Turnos } from "../interfaces/types";

// const useTurnos = () => {
//   const [turnos, setTurnos] = useState<Turnos | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const turnosResponse = await axios.get(
//           "https://8b3c31d353ed4e0e8696eb6c28434b1f.api.mockbin.io/"
//         );
//         const turnos: Turnos = turnosResponse.data;

//         setTurnos(turnos);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return turnos;
// };

// export default useTurnos;
