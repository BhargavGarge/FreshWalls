import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DownloadPicture } from "@/components/BottomSheet";

export default function Account() {
  const [picutureOpen, setPictureOpen] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text>Account Hello</Text>
        <Button
          title="Open Bottom Sheet"
          onPress={() => {
            setPictureOpen(true);
          }}
        ></Button>
        {picutureOpen && (
          <DownloadPicture
            onClose={() => {
              setPictureOpen(false);
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
