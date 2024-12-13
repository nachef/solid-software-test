import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useChangeColor } from "../../hooks/useChangeColor";

export default function HomeScreen() {
  const [backgroundColor, changeColor] = useChangeColor();

  useEffect(() => {
    StatusBar.setBackgroundColor(backgroundColor);
  }, [backgroundColor]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <TouchableOpacity style={styles.touchable} onPress={changeColor} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Hello there</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  touchable: {
    ...StyleSheet.absoluteFillObject,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
