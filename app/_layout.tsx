import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="(nobottombar)/accountinfo"
          options={{
            headerShown: true,
            headerTitle: "Account Info",
            headerBackTitle: "Go Back",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
