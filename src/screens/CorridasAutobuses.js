import { FlatList, Text, SafeAreaView , Picker} from "react-native";
import { styles } from "../styles/styles";
import React, { useEffect, useState } from "react";
import SelectDropdown from 'react-native-select-dropdown'
import { Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function CorridasAutobuses() {
  const countries = ["Oaxaca", "Distrito Federal", "Puebla", "Quintana Roo"]
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [salida, setSalida] = useState(new Date());
  const [entrada, setEntrada] = useState(new Date());

  const [corridas, setCorridas] = useState([
    { origen: "Oaxaca", destino: "Distrito Federal", horaSalida: "2023-05-01T08:00:00.000Z", horaLlegada: "2023-05-01T14:00:00.000Z", precio: 500 },
    { origen: "Oaxaca", destino: "Puebla", horaSalida: "2023-05-01T10:00:00.000Z", horaLlegada: "2023-05-01T16:00:00.000Z", precio: 400 },
    { origen: "Distrito Federal", destino: "Oaxaca", horaSalida: "2023-05-01T12:00:00.000Z", horaLlegada: "2023-05-01T18:00:00.000Z", precio: 550 },
    { origen: "Puebla", destino: "Quintana Roo", horaSalida: "2023-05-01T14:00:00.000Z", horaLlegada: "2023-05-01T20:00:00.000Z", precio: 600 },
    { origen: "Quintana Roo", destino: "Oaxaca", horaSalida: "2023-05-01T16:00:00.000Z", horaLlegada: "2023-05-01T22:00:00.000Z", precio: 700 },
  ]);
  
const buscarCorridas = () => {
    const corridasFiltradas = corridas.filter(corrida =>
      corrida.origen === origen &&
      corrida.destino === destino &&
      corrida.horaSalida === salida.toISOString() &&
      corrida.horaLlegada === entrada.toISOString()
    );
    console.log(corridasFiltradas);
    console.log(salida.toISOString());
    console.log(entrada.toISOString())
    setCorridas(corridasFiltradas);
  };

  return (
    <SafeAreaView style={styles.search_form}>
        <Text  style={styles.title} >Origen</Text>
        <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                setOrigen(selectedItem);
            }}
            buttonStyle={styles.select}
        />
        <Text  style={styles.title} >Origen</Text>
        <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                setDestino(selectedItem);
            }}
            buttonStyle={styles.select}
        />
        <Text>Hora de entrada</Text>
        <DateTimePicker
          style={styles.date_input}
          mode="datetime"
          value={entrada}
          onChange={(event, date) => setEntrada(date)}
        />
        <Text>Hora de Salida</Text>
        <DateTimePicker
          style={styles.date_input}
          mode="datetime"
          value={salida}
          onChange={(event, date) => setSalida(date)}
        />
        <Button title="Buscar" onPress={buscarCorridas}/>
        <FlatList
            data={corridas}
            renderItem={({ item }) => (
                <Ticket
                    origen={item.origen}
                    destino={item.destino}
                    salida={item.horaSalida.toLocaleString()}
                    llegada={item.horaLlegada.toLocaleString()}
                    aereolinea={item.aereolinea}
                    precio={item.precio}
                />
            )}
            scrollEnabled={true}
        />
  
    </SafeAreaView>
    
  );
}
