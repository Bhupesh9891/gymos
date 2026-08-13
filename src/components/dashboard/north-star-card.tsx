import { StyleSheet, Text } from "react-native";

import { GymCard } from "@/components/ui/gym-card";
import { GymColors, Spacing, Typography } from "@/constants/theme";

type NorthStarCardProps = {
  goal: string;
  current: string;
  target: string;
};

export function NorthStarCard({ goal, current, target }: NorthStarCardProps) {
  return (
    <GymCard style={styles.card}>
      <Text style={styles.eyebrow}>NORTH STAR</Text>

      <Text style={styles.title}>{goal}</Text>

      <Text style={styles.progress}>
        {current} → {target}
      </Text>
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

  title: {
    color: GymColors.text.primary,
    fontSize: Typography.h2,
    fontWeight: "600",
  },

  progress: {
    color: GymColors.text.secondary,
    fontSize: Typography.body,
    marginTop: Spacing.one,
  },
});
