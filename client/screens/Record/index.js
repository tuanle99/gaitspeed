import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Modal from "react-native-modal";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Record() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ backgroundColor: "black" }}>
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        style={{ bottom: 20 }}
      >
        <Ionicons
          name="md-add-circle"
          size={70}
          color="#0365fb"
          style={{ marginBottom: -20 }}
        />
      </Pressable>
      <View style={styles.container}>
        <Modal
          backdropOpacity={0.3}
          isVisible={modalVisible}
          style={styles.contentView}
        >
          <View style={styles.content}>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.contentTitle}>X</Text>
            </Pressable>
            <Text style={styles.contentTitle}>Hi 👋!</Text>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
    color: "white",
  },
  contentView: {
    justifyContent: "flex-end",
    margin: 0,
  },
});
