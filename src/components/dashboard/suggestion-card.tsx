import { StyleSheet, Text } from "react-native";

import { GymCard } from "@/components/ui/gym-card";
import { GymColors, Spacing, Typography } from "@/constants/theme";

type SuggestionCardProps = {
  message: string;
};

export function SuggestionCard({ message }: SuggestionCardProps) {
  return (
    <GymCard style={styles.card}>
      <Text style={styles.eyebrow}>SUGGESTION</Text>

      <Text style={styles.message}>{message}</Text>
    </GymCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: Spacing.two,
  },

  eyebrow: {
    color: GymColors.text.tertiary,
    fontSize: Typography.caption,
    marginBottom: Spacing.one,
  },

  message: {
    color: GymColors.text.secondary,
    fontSize: Typography.body,
  },
});
