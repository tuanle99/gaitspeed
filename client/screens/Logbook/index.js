import { useState } from "react";
import { Text, View, Picker } from "react-native";

import styles from "./style";
import Dateset from "../../data/data.json";

export default function Logbook() {
  const [selectedValue, setSelectedValue] = useState("java");

  let year = ["2020", "2021", "2022"];

  return (
    <View style={styles.container}>
      <View style={styles.dropdownStyle}>
        <Picker
          selectedValue={selectedValue}
          style={{
            height: 50,
            width: 180,
            color: "white",
          }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {year.map((e) => {
            let label = "Logbook - " + e;
            return <Picker.Item key={e} label={label} value={e} />;
          })}
        </Picker>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.leftContainer}>
          <Text style={[styles.textStyle, styles.leftText]}>Date</Text>
          {Dateset.reverse().map((e) => {
            return (
              <Text style={[styles.textStyle, styles.leftText]} key={e.date}>
                {e.date}
              </Text>
            );
          })}
        </View>
        <View style={styles.leftContainer}>
          <Text style={[styles.textStyle]}>Gaitspeed (m/s)</Text>
          {Dateset.reverse().map((e) => {
            return (
              <Text style={styles.textStyle} key={e.date}>
                {e.gaitspeed.toFixed(3)}
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
}
