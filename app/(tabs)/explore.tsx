import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { Link } from "expo-router";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpaper";
import { ImageCard } from "@/components/ImageCard";
import { ThemedView } from "@/components/ThemedView";
import { DownloadPicture } from "@/components/BottomSheet";
import { SplitView } from "@/components/SplitView";

export default function Explore() {
  const wallpapers = useWallpapers();
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(
    null
  );
  return (
    <SafeAreaView style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={{
          dark: "#000",
          light: "#fff",
        }}
        headerImage={
          <Image
            source={{
              uri: wallpapers[0]?.url ?? "",
            }}
            style={{
              flex: 1,
            }}
          />
        }
      >
        <SplitView wallpapers={wallpapers} />
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    paddingVertical: 10,
  },
});
