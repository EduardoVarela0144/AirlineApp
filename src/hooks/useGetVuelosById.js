import { useQuery } from "react-query";
import VuelosRepository from "../repositories/VuelosRepository";

function useGetVuelosById(id) {
  return useQuery(["useGetVuelosById"], () =>
    VuelosRepository.getVueloById(id)
  );
}
export { useGetVuelosById };
