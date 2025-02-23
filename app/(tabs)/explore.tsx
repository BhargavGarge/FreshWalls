import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Explore() {
  return (
    <SafeAreaView>
      <Text>Explore</Text>
      <Link href={"/(nobottombar)/accountinfo"}>
        <Text>Account Info</Text>
      </Link>
    </SafeAreaView>
  );
}
