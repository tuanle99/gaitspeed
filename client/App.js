import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {/* <Text>Gait Speed</Text> */}
        <View style={styles.logo}></View>
        <Text>A short deascription of our product</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Get Started" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

//don't put number in quote unless using %
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 100,
    width: 100,
    backgroundColor: "#bbb",
    borderRadius: 50,
    marginBottom: 10,
  },
  buttonContainer: {},
});
