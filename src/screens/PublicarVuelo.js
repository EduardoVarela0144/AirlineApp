import { Text, TextInput, SafeAreaView, View, Button } from "react-native";
import { styles } from "../styles/styles";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { usePostVuelos } from "../hooks/usePostVuelos";

export default function PublicarVuelo() {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [aereolina, setAereolina] = useState("");
  const [precio, setPrecio] = useState("");
  const [salida, setSalida] = useState(new Date());
  const [entrada, setEntrada] = useState(new Date());
  const { postVuelos } = usePostVuelos();

  const nuevoVuelo = {
    origen: origen,
    destino: destino,
    fecha_hora_salida: salida,
    fecha_hora_entrada: entrada,
    aereolinea: aereolina,
    precio: precio,
  };

  const handlePost = () => {
    postVuelos(nuevoVuelo);
  };

  return (
    <SafeAreaView style={styles.container_form}>
      <Text>Origen</Text>
      <TextInput
        value={origen}
        onChangeText={setOrigen}
        style={styles.input}
        placeholder="Ingresa el origen"
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
        value={aereolina}
        onChangeText={setAereolina}
        style={styles.input}
        placeholder="Ingresa la aerolinea"
      />
      <Text>Precio</Text>
      <TextInput
        value={precio}
        style={styles.input}
        onChangeText={setPrecio}
        placeholder="Ingresa el precio"
        keyboardType="numeric"
      />
      <View style={styles.date}>
        <Text>Hora de salida</Text>
        <DateTimePicker
          style={styles.date_input}
          mode="datetime"
          value={salida}
          onChange={(event, date) => setSalida(date)}
        />
        <Text>Hora de entrada</Text>
        <DateTimePicker
          style={styles.date_input}
          mode="datetime"
          value={entrada}
          onChange={(event, date) => setEntrada(date)}
        />
        <Button onPress={handlePost} title="Enviar" />
      </View>
    </SafeAreaView>
  );
}
