import { View, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  Ionicons,
  Feather,
} from "react-native-vector-icons";

import Home from "../Home";
import Report from "../Report";
import Logbook from "../Logbook";
import Profile from "../Profile";
import Record from "../Record";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#0068fa",
          inactiveTintColor: "white",
          activeBackgroundColor: "black",
          inactiveBackgroundColor: "black",
          style: {
            backgroundColor: "#CE4418",
            paddingBottom: 3,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Report"
          component={Report}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="clipboard" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Pay"
          component={Record}
          options={{
            tabBarButton: () => <Record />,
          }}
        />
        <Tab.Screen
          name="Logbook"
          component={Logbook}
          options={{
            tabBarIcon: ({ color, size }) => (
              <SimpleLineIcons name="notebook" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Me"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
