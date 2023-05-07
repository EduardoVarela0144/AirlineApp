import { useMutation } from "react-query";
import VuelosRepository from "../repositories/VuelosRepository";
import { Alert } from "react-native";

function usePostVuelos() {
  const postVuelosMutation = useMutation(VuelosRepository.postVuelos);

  const postVuelos = async (vuelo) => {
    try {
      await postVuelosMutation.mutateAsync(vuelo);
      Alert.alert("Se guardo con exito el registro");
    } catch (error) {
      Alert.alert("Ocurrio un error al guardar el registro");
    }
  };

  return { postVuelos, isLoading: postVuelosMutation.isLoading };
}

export { usePostVuelos };
