import { Text, TextInput, SafeAreaView, View, Button } from "react-native";
import { styles } from "../styles/styles";
import React, { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { usePostVuelos } from "../hooks/usePostVuelos";
import { useGetVuelosById } from "../hooks/useGetVuelosById";
import { useRoute } from "@react-navigation/native";

export default function EditarVuelo({ navigation }) {
  const route = useRoute();
  const { itemId } = route.params;
  const { data, refetch } = useGetVuelosById(itemId);
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [aereolinea, setAereolinea] = useState("");
  const [precio, setPrecio] = useState("");
  const [salida, setSalida] = useState(new Date());
  const [entrada, setEntrada] = useState(new Date());
  const { postVuelos } = usePostVuelos();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refetch();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (data) {
      // Establece el valor predeterminado del DateTimePicker
      setSalida(new Date(data.fecha_hora_salida));
      setEntrada(new Date(data.fecha_hora_entrada));
      setOrigen(data.origen);
      setDestino(data.destino);
      setAereolinea(data.aereolinea);
      setPrecio(String(data.precio));
    }
  }, [data]);

  const nuevoVuelo = {
    origen: origen,
    destino: destino,
    fecha_hora_salida: salida,
    fecha_hora_entrada: entrada,
    aereolinea: aereolinea,
    precio: precio,
  };

  const handlePost = () => {
    // postVuelos(nuevoVuelo);
    console.log(nuevoVuelo);
  };

  return (
    <SafeAreaView style={styles.container_form}>
      <Text>Origen prueba</Text>
      <TextInput
        value={origen}
        onChangeText={setOrigen}
        style={styles.input}
        placeholder="Ingresa el origens"
      />
      <Text>Destino</Text>
      <TextInput
        value={destino}
        onChangeText={setDestino}
        style={styles.input}
        placeholder="Ingresa el destino"
      />
      <Text>Aereolinea</Text>
      <TextInput
        value={aereolinea}
        onChangeText={setAereolinea}
        style={styles.input}
        placeholder="Ingresa la aerolinea"
      />
      <Text>Precio</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPrecio}
        placeholder="Ingresa el precio"
        keyboardType="numeric"
        value={precio}
      />
      <View style={styles.date}>
        <Text>Hora de salida</Text>
        <DateTimePicker
          style={styles.date_input}
          mode="datetime"
          //value={new Date(data?.fecha_hora_salida ?? new Date())}
          value={salida}
          onChange={(event, date) => setSalida(date)}
        />
        <Text>Hora de entrada</Text>
        <DateTimePicker
          style={styles.date_input}
          mode="datetime"
          //value={new Date(data?.fecha_hora_entrada ?? new Date())}
          value={entrada}
          onChange={(event, date) => setEntrada(date)}
        />
        <Button onPress={handlePost} title="Enviar" />
      </View>
    </SafeAreaView>
  );
}
