import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container_principal: {
    flex: 1,
  },
  container_form: {
    padding: 16,
    margin: 16,
  },
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 16,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 8,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    color: "#1474F1",
    borderRadius: 5,
    width: "auto",
    height: 40,
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
  },
  date: {
    alignItems: "center",
    marginTop: 10,
    marginRight: 7,
  },
  date_input: {
    marginTop: 20,
    marginBottom: 15,
  },
  eliminar_button: {
    color: "#ff5c5c",
  },
  enlinea: {
    flexDirection: "row",
    marginTop: 10,
  },
  select:{
    backgroundColor:"#FFFFFF",
    borderRadius:6,
    width:'auto',
    marginBottom:30
  },
  search_form: {
    padding: 16,
    margin: 16,
    alignItems:'center',
  },
});
