import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 10,
  },
  textStyle: {
    color: "white",
    fontSize: 15,
    textAlign: "left",
    paddingVertical: 5,
  },
  leftContainer: {
    width: "50%",
  },
  leftText: {
    paddingLeft: 10,
  },
  rightContainer: {
    width: "50%",
  },
  dropdownStyle: {
    alignSelf: "center",
    borderBottomWidth: 2,
    borderColor: "white",
    marginBottom: 10,
  },
});

export default styles;
