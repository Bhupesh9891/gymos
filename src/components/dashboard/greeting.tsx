import { StyleSheet, Text, View } from "react-native";

import { GymCard } from "@/components/ui/gym-card";
import { GymColors, Spacing, Typography, FontWeight } from "@/constants/theme";

type GreetingProps = {
  text: string;
};

export function Greeting({ text }: GreetingProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Good evening</Text>
      <Text style={styles.user}>Athlete</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.six,
  },
  greeting: {
    color: GymColors.text.tertiary,
    fontSize: Typography.bodySmall,
    fontWeight: FontWeight.medium,
    textTransform: "uppercase" as const,
    letterSpacing: 1.2,
    marginBottom: Spacing.two,
  },
  user: {
    color: GymColors.text.primary,
    fontSize: Typography.display,
    fontWeight: FontWeight.extrabold,
    letterSpacing: -0.5,
  },
});
