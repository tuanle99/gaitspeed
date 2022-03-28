import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  titleContainer: {
    flex: 1,
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 150,
    width: 150,
    backgroundColor: "#bbb",
    borderRadius: 75,
    marginBottom: 10,

    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  nextButtonStyle: {
    width: 220,
    height: 60,
    backgroundColor: "#0166ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textInputStyle: {
    fontSize: 22,
    color: "white",
    borderBottomWidth: 2,
    borderBottomColor: "white",
    width: 250,
    marginBottom: 50,
  },
  textAlign: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    lineHeight: 30,
  },
  genderContainer: {
    width: "40%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
  },
  genderBtn: {
    borderColor: "#0166ff",
    backgroundColor: "rgba(1, 103, 255, 0.1)",
  },
});

export default styles;
