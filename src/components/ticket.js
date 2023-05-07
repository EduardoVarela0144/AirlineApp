import React, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { styles } from "../styles/styles";
import { useDeleteVuelos } from "../hooks/useDeleteVuelos";

Ticket = (props) => {
  const { deleteVuelos } = useDeleteVuelos();

  setEliminar = (e) => {
    const id = e;
    Alert.alert("Eliminar vuelo", "¿Quieres elimnar este vuelo?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      ,
      {
        text: "Eliminar",
        onPress: () => {
          deleteVuelos(id);
          props.refreshData();
          // deleteVuelos(id).then(() => {
          //   props.refreshData();
          // });
        },
      },
    ]);
  };
  setEditar = (e) => {
    const id = e;
    props.navigation.navigate("Modificar vuelo", {
      itemId: id,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {props.origen} - {props.destino}
      </Text>
      <Text style={styles.subtitle}>{props.aereolinea}</Text>
      <Text style={styles.subtitle}>Llegada {props.llegada}</Text>
      <Text style={styles.subtitle}>Salida {props.salida}</Text>
      <View style={styles.separator} />
      <View style={styles.content}>
        <Text>$ {props.precio}</Text>
      </View>
      {props.button ? (
        <View style={styles.enlinea}>
          <Button
            id={props.id}
            onPress={() => this.setEditar(props.id)}
            style={styles.eliminar_button}
            title="Editar"
          />
          <Button
            id={props.id}
            onPress={() => this.setEliminar(props.id)}
            style={styles.eliminar_button}
            title="Eliminar"
          />
        </View>
      ) : null}
    </View>
  );
};

export default Ticket;
