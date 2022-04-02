import { StyleSheet } from "react-native";

const select = "#0066fd";

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
  },
  chartContainer: {
    alignItems: "center",
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
  dateFormatContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: 10,
  },
  dateFormatBox: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 3,
    padding: 6,
  },
  dateFormatSelectBox: {
    borderColor: select,
  },
  dateFormatSelectText: {
    color: select,
  },
});

export default styles;
