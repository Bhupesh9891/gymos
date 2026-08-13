import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>GymOS</Text>
      <Text style={styles.subtitle}>Progress, not perfection.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F10",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "700",
  },

  subtitle: {
    color: "#A0A0A5",
    fontSize: 16,
    marginTop: 8,
  },
});
