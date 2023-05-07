import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import PublicarVuelo from "../screens/PublicarVuelo";
import EliminarEditarVuelo from "../screens/EliminarEditarVuelo";
import EditarVuelo from "../screens/EditarVuelo";
import CorridasAutobuses from "../screens/CorridasAutobuses";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Vuelos" component={HomeScreen} />
      <Drawer.Screen name="Publicar vuelo" component={PublicarVuelo} />
      <Drawer.Screen name="Editar vuelo" component={EliminarEditarVuelo} />
      <Drawer.Screen name="Modificar vuelo" component={EditarVuelo} />
      <Drawer.Screen name="Corridas Autobuses" component={CorridasAutobuses} />
    </Drawer.Navigator>
  );
}
