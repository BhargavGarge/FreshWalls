import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Suggested from "../suggested";
import Liked from "../liked";
import Library from "../library";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Tab.Navigator>
        <Tab.Screen name="Suggested" component={Suggested} />
        <Tab.Screen name="Liked" component={Liked} />
        <Tab.Screen name="Library" component={Library} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
