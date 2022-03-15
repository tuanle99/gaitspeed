import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./style";

export default function Initialsetup() {
  const [pages, setPages] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [condition, setCondition] = useState([]);

  function nextPage() {
    switch (pages) {
      case 0:
        return (
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <View style={styles.logo}>
                <Text>Gait Speed Logo</Text>
              </View>
              <Text style={[styles.textAlign, { fontSize: 15 }]}>
                A short deascription of our product
              </Text>
            </View>
            <Pressable
              style={[styles.nextButtonStyle, { marginBottom: 30 }]}
              onPress={() => setPages(pages + 1)}
            >
              <Text style={[styles.textAlign, { fontSize: 25 }]}>
                Get Started
              </Text>
            </Pressable>
          </View>
        );
      case 1:
        return (
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={[styles.textAlign, { fontSize: 22 }]}>
                We will start with a quick survey to collect some basic
                information from you. This will help us better understand your
                health situation.
              </Text>
              <Text
                style={[styles.textAlign, { color: "#1662cf", marginTop: 50 }]}
              >
                Your privacy is important to us
              </Text>
              <Text style={[styles.textAlign]}>
                All information you enter is securely store and HIPAA complaint
              </Text>
            </View>

            <Pressable
              style={[styles.nextButtonStyle, { marginBottom: 30 }]}
              onPress={() => setPages(0)}
            >
              <Text style={[styles.textAlign, { fontSize: 25 }]}>Next</Text>
            </Pressable>
            <Pressable>
              <Text style={[styles.textAlign, { fontSize: 25 }]}>
                Skip for now
              </Text>
            </Pressable>
          </View>
        );
      default:
        return (
          <View>
            <Text>default</Text>
          </View>
        );
    }
  }

  return nextPage(0);
}
