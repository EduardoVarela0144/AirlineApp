import { useQuery } from "react-query";
import VuelosRepository from "../repositories/VuelosRepository";

function useGetVuelos() {
  return useQuery(["useGetVuelos"], () => VuelosRepository.getVuelos());
}
export { useGetVuelos };
