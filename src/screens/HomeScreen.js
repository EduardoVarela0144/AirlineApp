import { SafeAreaView, FlatList } from "react-native";
import React, { useEffect } from "react";
import Ticket from "../components/ticket";
import { useGetVuelos } from "../hooks/useGetVuelos";

export default function HomeScreen({ navigation }) {
  const { data, refetch } = useGetVuelos();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refetch();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Ticket
          origen={item.origen}
          destino={item.destino}
          aereolinea={item.aereolinea}
          precio={item.precio}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled={true}
    />
  );
}
