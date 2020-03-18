import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import StatisticScreen from "./StatisticScreen";
import InstructionScreen from "./InstructionScreen";
import ReportScreen from "./ReportScreen";
import AboutScreen from "./AboutScreen";

const Tab = createBottomTabNavigator();

const getTitle = route => {
  switch (route.name) {
    case "Report":
      return "تقارير";
    case "Instruction":
      return "أسئلة وأجوبة";
    case "About":
      return "عن كورونا";
    default:
      return "إحصائيات";
  }
};

const HomeScreen = () => {
  const selected = useSelector(state => state.virus.selectedCntry);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            //console.log(route);
            let icon;
            if (route.name === "Report") {
              icon = "chart-line";
            } else if (route.name === "Instruction") {
              icon = "book-reader";
            } else if (route.name === "About") {
              icon = "bug";
            } else {
              icon = "globe";
            }
            return <FontAwesome5 name={icon} size={size} color={color} />;
          },
          title: getTitle(route)
        })}
        tabBarOptions={{
          activeTintColor: "green",
          tabStyle: {},
          style: {
            paddingBottom: 9,
            height: 80
          },
          labelStyle: {
            margin: -10
          }
        }}
      >
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen
          options={{
            headerShown: false
          }}
          name="Statistic"
          component={StatisticScreen}
        />
        <Tab.Screen name="Report" component={ReportScreen} />
        <Tab.Screen name="Instruction" component={InstructionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
