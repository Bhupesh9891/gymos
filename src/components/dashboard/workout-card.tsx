import { StyleSheet, Text } from "react-native";

import { GymCard } from "@/components/ui/gym-card";
import { GymColors, Spacing, Typography } from "@/constants/theme";

type WorkoutCardProps = {
  workoutName: string;
  message: string;
};

export function WorkoutCard({ workoutName, message }: WorkoutCardProps) {
  return (
    <GymCard style={styles.card}>
      <Text style={styles.eyebrow}>TODAY'S WORKOUT</Text>

      <Text style={styles.title}>{workoutName}</Text>

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

  title: {
    color: GymColors.text.primary,
    fontSize: Typography.h2,
    fontWeight: "600",
  },

  message: {
    color: GymColors.text.secondary,
    fontSize: Typography.body,
    marginTop: Spacing.one,
  },
});
