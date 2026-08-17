import { StyleSheet, Text, View } from "react-native";

import { GymCard } from "@/components/ui/gym-card";
import { GymColors, Spacing, Typography, FontWeight, Radius } from "@/constants/theme";

type SuggestionCardProps = {
  message: string;
};

export function SuggestionCard({ message }: SuggestionCardProps) {
  return (
    <GymCard style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconBadge}>
          <Text style={styles.icon}>💡</Text>
        </View>
        <View style={styles.textContent}>
          <Text style={styles.eyebrow}>SUGGESTION</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </GymCard>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: Spacing.six,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBadge: {
    width: 40,
    height: 40,
    borderRadius: Radius.medium,
    backgroundColor: GymColors.semantic.warning + '15',
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.three,
  },

  icon: {
    fontSize: 20,
  },

  textContent: {
    flex: 1,
  },

  eyebrow: {
    color: GymColors.text.tertiary,
    fontSize: Typography.caption,
    fontWeight: FontWeight.semibold,
    letterSpacing: 1,
    marginBottom: Spacing.half,
  },

  message: {
    color: GymColors.text.primary,
    fontSize: Typography.body,
    lineHeight: 22,
  },
});
