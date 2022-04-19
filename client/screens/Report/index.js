import { useState } from "react";
import { Text, View, Pressable, Picker } from "react-native";
import { AntDesign } from "react-native-vector-icons";

import styles from "./style";

export default function Home() {
  const [report, setReport] = useState({ month: "", year: "" });

  let arr = [
    { month: "January", year: "2022" },
    { month: "February", year: "2022" },
    { month: "March", year: "2022" },
    { month: "April", year: "2022" },
  ];

  return (
    <View style={styles.container}>
      {arr.map((e) => {
        return (
          <View
            style={[
              styles.reportContainer,
              e === arr[arr.length - 1] ? styles.lastReport : {},
            ]}
            key={e.month}
          >
            <Pressable
              onPress={() => {
                setReport(e);
              }}
            >
              <Text style={styles.textStyle}>
                Report for {e.month}, {e.year}
              </Text>
              <View style={styles.iconContainer}>
                <AntDesign name="right" color={"white"} size={20} />
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}
