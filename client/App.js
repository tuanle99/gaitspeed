import { View, StyleSheet } from "react-native";
import { StatusBar } from "react-native";

import Initialsetup from "./screens/Initialsetup.js";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Initialsetup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});
