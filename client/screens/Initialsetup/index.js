import { useState } from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import { RadioButton } from "react-native-paper";
import { StatusBar } from "react-native";
import * as Progress from "react-native-progress";
import { Icon } from "react-native-elements";
import styles from "./style";

export default function Initialsetup({ navigation }) {
  const [pages, setPages] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [condition, setCondition] = useState([]);
  const [add, setAdd] = useState("");
  const [hide, setHide] = useState(false);

  const [maleBtn, setMaleBtn] = useState(false);
  const [femaleBtn, setFemaleBtn] = useState(false);

  function nextSkip(type) {
    return (
      <View>
        <Pressable
          style={[styles.nextButtonStyle, { marginBottom: 30 }]}
          onPress={() => setPages(pages + 1)}
        >
          <Text style={[styles.textAlign, { fontSize: 25 }]}>Next</Text>
        </Pressable>
        <Pressable onPress={() => (setPages(pages + 1), skip(type))}>
          <Text style={[styles.textAlign, { fontSize: 25 }]}>Skip for now</Text>
        </Pressable>
      </View>
    );
  }

  function prevPage() {
    return (
      <Pressable onPress={() => setPages(pages - 1)}>
        <Text
          style={[
            styles.textAlign,
            {
              fontSize: 25,
              marginTop: 10,
              textAlign: "left",
            },
          ]}
        >
          {"<"} Back
        </Text>
      </Pressable>
    );
  }

  function skip(type) {
    switch (type) {
      case "name":
        setName("");
        break;
      case "age":
        setAge(null);
        break;
      case "gender":
        setGender("");
        break;
      case "ethnicity":
        setEthnicity("");
        break;
      case "weight":
        setWeight(null);
        setHeight(null);
        break;
      case "condition":
        setCondition([]);
      default:
        break;
    }
  }

  function nextPage() {
    switch (pages) {
      case 0: //start
        return (
          <View style={styles.container}>
            <StatusBar />
            <View style={styles.titleContainer}>
              <View style={styles.logo}>
                <Text>Gait Speed Logo</Text>
              </View>
              <Text style={[styles.textAlign, { fontSize: 15 }]}>
                A short deascription of our product
              </Text>

              <Pressable
                style={[styles.nextButtonStyle, { top: 120 }]}
                onPress={() => setPages(pages + 1)}
              >
                <Text style={[styles.textAlign, { fontSize: 25 }]}>
                  Get Started
                </Text>
              </Pressable>
            </View>
          </View>
        );
      case 1: //initial info
        return (
          <View style={styles.container}>
            <StatusBar />
            <View style={[styles.titleContainer]}>
              <Text style={[styles.textAlign, { fontSize: 22 }]}>
                We will start with a quick survey to collect some basic
                information from you. This will help us better understand your
                health situation.
              </Text>
              <Text style={[styles.textAlign, { color: "#1662cf" }]}>
                Your privacy is important to us
              </Text>
              <Text style={[styles.textAlign, { marginBottom: 100 }]}>
                All information you enter is securely store and HIPAA complaint
              </Text>

              {nextSkip("none")}
            </View>
          </View>
        );
      case 2: //name
        return (
          <View style={styles.container}>
            <StatusBar />
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Progress.Bar progress={1 / 6} width={null} />
              {prevPage()}
            </View>

            <View style={styles.titleContainer}>
              <View style={{ height: "30%", justifyContent: "center" }}>
                <Text style={[styles.textAlign, { fontSize: 22 }]}>
                  1. How should we call you?
                </Text>
              </View>
              <TextInput
                style={[styles.textAlign, styles.textInputStyle]}
                onChangeText={setName}
                value={name}
                placeholder="You name here"
                placeholderTextColor="#9f9f9f"
              />

              <View style={styles.container}>{nextSkip("name")}</View>
            </View>
          </View>
        );
      case 3: //age
        return (
          <View style={styles.container}>
            <StatusBar />
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Progress.Bar progress={2 / 6} width={null} />
              {prevPage()}
            </View>
            <View style={styles.titleContainer}>
              <View style={{ height: "30%", justifyContent: "center" }}>
                <Text style={[styles.textAlign, { fontSize: 22 }]}>
                  2. What is your age?
                </Text>
              </View>
              <TextInput
                style={[styles.textAlign, styles.textInputStyle]}
                onChangeText={setAge}
                value={age}
                placeholder="Your age here"
                placeholderTextColor="#9f9f9f"
                keyboardType="numeric"
              />

              <View style={styles.container}>{nextSkip("age")}</View>
            </View>
          </View>
        );
      case 4: //gender
        return (
          <View style={styles.container}>
            <StatusBar />
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Progress.Bar progress={3 / 6} width={null} />
              <Pressable onPress={() => setPages(pages - 1)}>
                <Text
                  style={[
                    styles.textAlign,
                    {
                      fontSize: 25,
                      marginTop: 10,
                      textAlign: "left",
                    },
                  ]}
                >
                  {"<"} Back
                </Text>
              </Pressable>
            </View>
            <View style={[styles.titleContainer]}>
              <View
                style={{
                  height: "30%",
                  justifyContent: "center",
                }}
              >
                <Text style={[styles.textAlign, { fontSize: 22 }]}>
                  3. What is your gender?
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Pressable
                  style={[
                    styles.genderContainer,
                    maleBtn ? styles.genderBtn : { backgroundColor: "black" },
                  ]}
                  onPress={() => (
                    setMaleBtn(true), setFemaleBtn(false), setGender("male")
                  )}
                >
                  <Text
                    style={[
                      styles.textAlign,
                      {
                        fontSize: 25,
                        marginTop: 10,
                        textAlign: "left",
                      },
                    ]}
                  >
                    Male
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.genderContainer,
                    femaleBtn ? styles.genderBtn : { backgroundColor: "black" },
                  ]}
                  onPress={() => (
                    setFemaleBtn(true), setMaleBtn(false), setGender("female")
                  )}
                >
                  <Text
                    style={[
                      styles.textAlign,
                      {
                        fontSize: 25,
                        marginTop: 10,
                        textAlign: "left",
                      },
                    ]}
                  >
                    Female
                  </Text>
                </Pressable>
              </View>

              <View style={styles.container}>{nextSkip("gender")}</View>
            </View>
          </View>
        );
      case 5: //ethnicity
        return (
          <View style={styles.container}>
            <StatusBar />
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Progress.Bar progress={4 / 6} width={null} />
              {prevPage()}
            </View>
            <View style={[styles.titleContainer]}>
              <View
                style={{
                  height: "30%",
                  justifyContent: "center",
                }}
              >
                <Text style={[styles.textAlign, { fontSize: 22 }]}>
                  4. What is your ethnicity?
                </Text>
              </View>

              <View style={{ justifyContent: "flex-start", marginBottom: 30 }}>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <RadioButton
                    value="indian"
                    status={ethnicity === "indian" ? "checked" : "unchecked"}
                    onPress={() => setEthnicity("indian")}
                    color="white"
                    uncheckedColor="white"
                  />
                  <Text style={styles.textAlign}>
                    American Indian or Alaska Native
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <RadioButton
                    value="asian"
                    status={ethnicity === "asian" ? "checked" : "unchecked"}
                    onPress={() => setEthnicity("asian")}
                    color="white"
                    uncheckedColor="white"
                  />
                  <Text style={styles.textAlign}>Asian</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <RadioButton
                    value="black"
                    status={ethnicity === "black" ? "checked" : "unchecked"}
                    onPress={() => setEthnicity("black")}
                    color="white"
                    uncheckedColor="white"
                  />
                  <Text style={styles.textAlign}>Black or African Amerian</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <RadioButton
                    value="white"
                    status={ethnicity === "white" ? "checked" : "unchecked"}
                    onPress={() => setEthnicity("white")}
                    color="white"
                    uncheckedColor="white"
                  />
                  <Text style={styles.textAlign}>Caucasian</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <RadioButton
                    value="native"
                    status={ethnicity === "native" ? "checked" : "unchecked"}
                    onPress={() => setEthnicity("native")}
                    color="white"
                    uncheckedColor="white"
                  />
                  <Text style={[styles.textAlign, { textAlign: "left" }]}>
                    Native Hawaiian or {"\n"} Other Pacific Islander
                  </Text>
                </View>
              </View>

              <View style={styles.container}>{nextSkip("ethnicity")}</View>
            </View>
          </View>
        );
      case 6: //weight and height
        return (
          <View style={styles.container}>
            <StatusBar />
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Progress.Bar progress={5 / 6} width={null} />
              {prevPage()}
            </View>
            <View style={[styles.titleContainer]}>
              <View style={{ height: "30%", justifyContent: "center" }}>
                <Text style={[styles.textAlign, { fontSize: 22 }]}>
                  5. What is your weight and height?
                </Text>
              </View>

              <TextInput
                style={[
                  styles.textAlign,
                  {
                    fontSize: 22,
                    color: "white",
                    borderBottomWidth: 2,
                    borderBottomColor: "white",
                    width: 250,
                  },
                ]}
                onChangeText={setWeight}
                value={weight}
                placeholder="Your weight here (kg)"
                placeholderTextColor="#9f9f9f"
                keyboardType="numeric"
              />
              <TextInput
                style={[
                  styles.textAlign,
                  {
                    fontSize: 22,
                    color: "white",
                    borderBottomWidth: 2,
                    borderBottomColor: "white",
                    width: 250,
                    marginTop: 20,
                    marginBottom: 68,
                  },
                ]}
                onChangeText={setHeight}
                value={height}
                placeholder="Your height here (cm)"
                placeholderTextColor="#9f9f9f"
                keyboardType="numeric"
              />

              <View style={styles.container}>{nextSkip("weight")}</View>
            </View>
          </View>
        );
      case 7: //condition
        return (
          <View style={styles.container}>
            <StatusBar />
            <View
              style={{
                marginTop: 10,
              }}
            >
              <Progress.Bar progress={6 / 6} width={null} />
              {prevPage()}
            </View>
            <View style={[styles.titleContainer]}>
              <View
                style={{
                  height: "30%",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <Text style={[styles.textAlign, { fontSize: 22 }]}>
                  6. Do you have any health conditions that we should be aware
                  of?
                </Text>
              </View>

              <TextInput
                style={[
                  styles.textAlign,
                  {
                    fontSize: 22,
                    color: "white",
                    borderBottomWidth: 2,
                    borderBottomColor: "white",
                    width: 250,
                    marginBottom: 20,
                  },
                ]}
                onChangeText={setAdd}
                value={add}
                placeholder="Enter you condition here"
                placeholderTextColor="#9f9f9f"
                onFocus={() => setHide(true)}
                onBlur={() => setHide(false)}
              />
              <View style={{ marginBottom: 30 }}>
                {!hide && (
                  <Icon
                    type="font-awesome"
                    name="plus-circle"
                    color="white"
                    size={100}
                    onPress={() => {
                      setCondition([...condition, add]);
                      setAdd("");
                    }}
                  />
                )}
              </View>
              <View style={styles.container}>{nextSkip("condition")}</View>
            </View>
          </View>
        );
      default:
        return (
          <View style={styles.container}>
            <StatusBar />
            <View
              style={{
                marginTop: 10,
              }}
            >
              {prevPage()}
            </View>
            <View style={[styles.titleContainer, { flex: 1 }]}>
              <Pressable onPress={() => navigation.navigate("Main")}>
                <Text
                  style={[
                    styles.textAlign,
                    {
                      fontSize: 25,
                      marginTop: 10,
                      textAlign: "left",
                    },
                  ]}
                >
                  (Go To Home)
                </Text>
              </Pressable>
              <View style={{ height: "50%" }}>
                <Text style={[styles.textAlign, { fontSize: 22 }]}>
                  Name: {name}
                </Text>
                <Text style={[styles.textAlign, { fontSize: 22 }]}>
                  Age: {age}
                </Text>
                <Text style={[styles.textAlign, { fontSize: 22 }]}>
                  Gender: {gender}
                </Text>
                <Text style={[styles.textAlign, { fontSize: 22 }]}>
                  Ethnicity: {ethnicity}
                </Text>
                <Text style={[styles.textAlign, { fontSize: 22 }]}>
                  Weight: {weight} (lbs)
                </Text>
                <Text style={[styles.textAlign, { fontSize: 22 }]}>
                  Height: {height} (cm)
                </Text>
                <Text style={[styles.textAlign, { fontSize: 22 }]}>
                  Condition:
                </Text>
                {condition.map((c) => {
                  return (
                    <Text
                      style={[styles.textAlign, { fontSize: 22, color: "red" }]}
                      key={c}
                    >
                      {c}
                    </Text>
                  );
                })}
              </View>
            </View>
            {/* <View style={styles.container}>{nextSkip("ethnicity")}</View> */}
          </View>
        );
    }
  }

  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  // const [gender, setGender] = useState("");
  // const [ethnicity, setEthnicity] = useState("");
  // const [weight, setWeight] = useState(0);
  // const [height, setHeight] = useState(0);

  return nextPage(0);
}
