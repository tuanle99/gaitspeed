import { useState, useRef, forwardRef } from "react";
import {
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
// import TextInput from "react-native-textinput-with-icons";
import ProfilePicture from "react-native-profile-picture";
import { FontAwesome } from "react-native-vector-icons";
import styles from "./style";

export default function Profile() {
  const [user, setUser] = useState({
    firstName: "Wendy",
    lastName: "Langston",
    gender: "Female",
    age: 62,
    ethnicity: "White",
    weight: 105,
    height: 160,
    condition: ["condition 1", "condition 2", "condition 3"],
  });

  const weightRef = useRef();
  const heightRef = useRef();

  return (
    <View style={styles.container}>
      <ProfilePicture
        isPicture={false}
        user={user.firstName + " " + user.lastName}
        shape="circle"
        height={90}
        width={90}
      />
      <Text style={[styles.textStyle, { fontSize: 25, paddingTop: 5 }]}>
        {user.firstName}
      </Text>
      <ScrollView>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <View style={styles.leftContainer}>
            <Text style={[styles.textStyle]}>Gender</Text>
            <Text style={[styles.textStyle]}>Age</Text>
            <Text style={[styles.textStyle]}>Ethnicity</Text>
            <Text style={[styles.textStyle]}>Weight</Text>
            <Text style={[styles.textStyle]}>Height</Text>
          </View>
          <View style={styles.rightCotnainer}>
            <Text style={[styles.textStyle]}>{user.gender}</Text>
            <Text style={[styles.textStyle]}>{user.age}</Text>
            <Text style={[styles.textStyle]}>{user.ethnicity}</Text>

            {/* <TextInput
              label={user.weight + " lbs"}
              labelColor="white"
              rightIcon="pencil-square-o"
              rightIconType="awesome"
              rightIconColor="#ffffff"
              keyboardType="numeric"
              color="white"
              underlineHeight={1}
              containerMinWidth={50}
              containerWidth={50}
              value={user.weight}
              onChangeText={(e) => setUser({ ...user, weight: e })}
            /> */}

            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={[styles.textAlign, styles.textInputStyle]}
                onChangeText={(e) => {
                  setUser({ ...user, weight: e });
                }}
                ref={weightRef}
                keyboardType="numeric"
                value={user.weight}
                placeholder={user.weight + ""}
                placeholderTextColor="#ffffff"
              />

              <Text style={[styles.textStyle]}>
                {" "}
                lbs{" "}
                <FontAwesome name="pencil-square-o" color={"white"} size={20} />
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={[styles.textAlign, styles.textInputStyle]}
                onChangeText={(e) => {
                  setUser({ ...user, height: e });
                }}
                ref={weightRef}
                keyboardType="numeric"
                value={user.height}
                placeholder={user.height + ""}
                placeholderTextColor="#ffffff"
              />

              <Text style={[styles.textStyle]}>
                {" "}
                cm{" "}
                <FontAwesome name="pencil-square-o" color={"white"} size={20} />
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

//setUser({ ...user, weight: 10 })
