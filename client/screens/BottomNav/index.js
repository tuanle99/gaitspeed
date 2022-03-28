import { Text, View, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Report" component={Report} />
        <Tab.Screen
          name="Pay"
          component={Record}
          options={{
            tabBarButton: () => <Record />,
          }}
        />
        <Tab.Screen name="Logbook" component={Logbook} />
        <Tab.Screen name="Me" component={Profile} />
      </Tab.Navigator>
    </View>
  );
}
