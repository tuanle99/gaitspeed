import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    paddingTop: 10,
  },
  textStyle: {
    color: "white",
    fontSize: 15,
    textAlign: "left",
  },
  reportContainer: {
    width: "90%",
    padding: 15,
    borderTopColor: "white",
    borderWidth: 2,
    flexDirection: "row",
  },
  lastReport: {
    borderWidth: 2,
    borderBottomColor: "white",
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default styles;
