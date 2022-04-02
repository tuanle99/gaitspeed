import { useState } from "react";
import { Text, View, Dimensions, Pressable } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { Svg, Text as TextSVG, Rect } from "react-native-svg";

import styles from "./style";

export default function Home() {
  const chartWidth = Dimensions.get("window").width * 0.9;
  const chartHeight = 200;

  const [dateFormat, setDateFormat] = useState("week");

  let [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });

  let [tooltipPos2, setTooltipPos2] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });

  const currentDate = () => {
    var month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Augt",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var date_array = [];
    var dateString = "";
    for (let i = 0; i < 7; i++) {
      var date = new Date();

      if (dateFormat === "week") {
        date.setDate(date.getDate() - i);
        dateString = date.toDateString();
        dateString = dateString.substring(3, dateString.length - 4);
      } else if (dateFormat === "month") {
        date.setMonth(date.getMonth() - i);
        dateString = month[date.getMonth()];
      }

      date_array.push(dateString);
    }

    return date_array.reverse();
  };

  const data = {
    labels: currentDate(),
    datasets: [
      {
        data: [1, 2, 3, 4, 5, 2, 5],
      },
    ],
  };
  const data2 = {
    labels: currentDate(),
    datasets: [
      {
        data: [1, 2, 1, 2, 1, 2, 1],
      },
    ],
  };

  const config = {
    backgroundGradientFrom: "#2c0012",
    backgroundGradientTo: "#c31064",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };

  const config2 = {
    backgroundGradientFrom: "#0b4732",
    backgroundGradientTo: "#14a772",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateFormatContainer}>
        <Pressable
          style={[
            styles.dateFormatBox,
            dateFormat === "week"
              ? styles.dateFormatSelectBox
              : { borderColor: "white" },
          ]}
          onPress={() => setDateFormat("week")}
        >
          <Text
            style={[
              styles.textStyle,
              dateFormat === "week"
                ? styles.dateFormatSelectText
                : { color: "white" },
            ]}
          >
            Weekly
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.dateFormatBox,
            dateFormat === "month"
              ? styles.dateFormatSelectBox
              : { borderColor: "white" },
          ]}
          onPress={() => setDateFormat("month")}
        >
          <Text
            style={[
              styles.textStyle,
              dateFormat === "month"
                ? styles.dateFormatSelectText
                : { color: "white" },
            ]}
          >
            Monthly
          </Text>
        </Pressable>
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.textStyle}>Manually logged gaitspeed data</Text>
        <LineChart
          data={data}
          width={chartWidth}
          height={chartHeight}
          yAxisInterval={1}
          xLabelsOffset={2}
          chartConfig={config}
          bezier
          style={styles.chartStyle}
          decorator={() => {
            return tooltipPos.visible ? (
              <View>
                <Svg>
                  <TextSVG
                    x={tooltipPos.x + 5}
                    y={tooltipPos.y + 25}
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {tooltipPos.value}
                  </TextSVG>
                </Svg>
              </View>
            ) : null;
          }}
          onDataPointClick={(data) => {
            let isSamePoint =
              tooltipPos.x === data.x && tooltipPos.y === data.y;

            isSamePoint
              ? setTooltipPos((previousState) => {
                  return {
                    ...previousState,
                    value: data.value,
                    visible: !previousState.visible,
                  };
                })
              : setTooltipPos({
                  x: data.x,
                  value: data.value,
                  y: data.y,
                  visible: true,
                });
          }}
        />
      </View>
      <View style={styles.chartContainer}>
        <Text style={styles.textStyle}>
          Automatically logged gaitspeed data
        </Text>
        <LineChart
          data={data2}
          width={chartWidth}
          height={chartHeight}
          yAxisInterval={1}
          xLabelsOffset={2}
          chartConfig={config2}
          bezier
          style={styles.chartStyle}
          decorator={() => {
            return tooltipPos2.visible ? (
              <View>
                <Svg>
                  <TextSVG
                    x={tooltipPos2.x + 5}
                    y={tooltipPos2.y + 25}
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {tooltipPos2.value}
                  </TextSVG>
                </Svg>
              </View>
            ) : null;
          }}
          onDataPointClick={(data) => {
            let isSamePoint =
              tooltipPos2.x === data.x && tooltipPos2.y === data.y;

            isSamePoint
              ? setTooltipPos2((previousState) => {
                  return {
                    ...previousState,
                    value: data.value,
                    visible: !previousState.visible,
                  };
                })
              : setTooltipPos2({
                  x: data.x,
                  value: data.value,
                  y: data.y,
                  visible: true,
                });
          }}
        />
      </View>
    </View>
  );
}
