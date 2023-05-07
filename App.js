import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import NavigationDrawer from "./src/navigation/NavigationDrawer";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <NavigationDrawer />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
