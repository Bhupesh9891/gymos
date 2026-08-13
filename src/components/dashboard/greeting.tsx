import { StyleSheet, Text } from "react-native";

import { GymColors, Spacing, Typography } from "@/constants/theme";

type GreetingProps = {
  text: string;
};

export function Greeting({ text }: GreetingProps) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: GymColors.text.primary,
    fontSize: Typography.display,
    fontWeight: "700",
    marginBottom: Spacing.three,
  },
});
