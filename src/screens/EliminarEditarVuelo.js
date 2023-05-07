import { FlatList } from "react-native";
import React, { useEffect } from "react";
import Ticket from "../components/ticket";
import { useGetVuelos } from "../hooks/useGetVuelos";

export default function EliminarEditarVuelo({ navigation }) {
  const { data, refetch } = useGetVuelos();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refetch();
    });

    return unsubscribe;
  }, [navigation]);

  // const refreshData = () => {
  //   refetch();
  //   console.log("Refrescando data");
  //   console.log(data);
  // };

  const refreshData = async () => {
    try {
      const { data: newData } = await refetch();
      setState({ data: newData });
      console.log("Datos actualizados:", newData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Ticket
          id={item.id}
          origen={item.origen}
          destino={item.destino}
          aereolinea={item.aereolinea}
          precio={item.precio}
          button={true}
          refreshData={refreshData}
          navigation={navigation}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled={true}
    />
  );
}
