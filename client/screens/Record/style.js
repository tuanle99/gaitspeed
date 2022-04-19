import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "black",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  contentTitle: {
    fontSize: 23,
    marginBottom: 12,
    color: "white",
    textAlign: "center",
  },
  contentView: {
    justifyContent: "flex-end",
    margin: 0,
  },
  bigButton: {
    width: 250,
    height: 250,
    backgroundColor: "white",
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  timeText: {
    fontSize: 28,
  },
  timer: {
    marginVertical: 10,
  },
  timerText: {
    fontSize: 20,
  },
});

export default styles;
