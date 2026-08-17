import { StyleSheet, Text, View } from "react-native";

import { GymCard } from "@/components/ui/gym-card";
import { GymColors, Spacing, Typography, FontWeight, Radius } from "@/constants/theme";

type WorkoutCardProps = {
  workoutName: string;
  message: string;
};

export function WorkoutCard({ workoutName, message }: WorkoutCardProps) {
  return (
    <GymCard style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconBadge}>
          <Text style={styles.icon}>💪</Text>
        </View>
        <View style={styles.textContent}>
          <Text style={styles.eyebrow}>TODAY'S WORKOUT</Text>
          <Text style={styles.title}>{workoutName}</Text>
        </View>
      </View>

      <Text style={styles.message}>{message}</Text>
      
      <View style={styles.startButton}>
        <Text style={styles.startButtonText}>Start Workout →</Text>
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
    marginBottom: Spacing.three,
  },

  iconBadge: {
    width: 48,
    height: 48,
    borderRadius: Radius.large,
    backgroundColor: GymColors.semantic.accent + '20',
    alignItems: "center",
    justifyContent: "center",
    marginRight: Spacing.three,
  },

  icon: {
    fontSize: 24,
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

  title: {
    color: GymColors.text.primary,
    fontSize: Typography.h1,
    fontWeight: FontWeight.bold,
  },

  message: {
    color: GymColors.text.secondary,
    fontSize: Typography.body,
    lineHeight: 24,
  },

  startButton: {
    marginTop: Spacing.four,
    paddingVertical: Spacing.twoAndHalf,
    paddingHorizontal: Spacing.four,
    backgroundColor: GymColors.semantic.accent,
    borderRadius: Radius.medium,
    alignItems: "center",
  },

  startButtonText: {
    color: "#FFFFFF",
    fontSize: Typography.body,
    fontWeight: FontWeight.semibold,
  },
});
