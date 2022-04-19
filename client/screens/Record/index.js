import { useState, useRef, useEffect } from "react";
import { Text, View, Pressable, Button } from "react-native";
import Modal from "react-native-modal";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Timer, FlipNumber } from "react-native-flip-timer";

import styles from "./style";

export default function Record() {
  const [modalVisible, setModalVisible] = useState(false);
  const [countDown, setCountDown] = useState(false);

  const [timerState, setTimerState] = useState(true);
  const [countDownActive, setCountDownActive] = useState(true);

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
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: "20%" }}></View>
              <View style={{ width: "60%" }}>
                <Text style={[styles.contentTitle, { fontSize: 28 }]}>
                  Log new data
                </Text>
              </View>
              <View style={{ width: "20%" }}>
                <Pressable
                  onPress={() => setModalVisible(false)}
                  style={{ backgroundColor: "black" }}
                >
                  <Text style={styles.contentTitle}>X</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.center}>
              <Text style={[styles.contentTitle, { width: "80%" }]}>
                If you are in the hallway and ready for a short walk, tap on the
                button below!
              </Text>
              <Pressable
                style={styles.bigButton}
                onPress={() => {
                  setCountDown(true);
                }}
              >
                {!countDown ? (
                  <Text style={styles.timeText}>Press to Start</Text>
                ) : countDownActive ? (
                  <CountdownCircleTimer
                    isPlaying
                    duration={3}
                    colors={["#004777", "#F7B801", "#A30000"]}
                    colorsTime={[3, 2, 1]}
                    onComplete={() => setCountDownActive(false)}
                  >
                    {({ remainingTime }) => (
                      <Text style={styles.timeText}>{remainingTime}</Text>
                    )}
                  </CountdownCircleTimer>
                ) : (
                  <View style={{}}>
                    <Timer
                      time={0}
                      play={timerState}
                      FlipNumberProps={{ size: 20 }}
                    />
                    <Button title="Stop" onPress={() => setTimerState(false)} />
                  </View>
                )}
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
