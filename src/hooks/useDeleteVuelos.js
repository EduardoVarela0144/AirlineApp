import { useMutation } from "react-query";
import VuelosRepository from "../repositories/VuelosRepository";

function useDeleteVuelos() {
  const mutation = useMutation((id) => VuelosRepository.deleteVuelo(id));

  const deleteVuelos = (id) => {
    mutation.mutate(id);
  };

  return { deleteVuelos, isLoading: mutation.isLoading };
}

export { useDeleteVuelos };
