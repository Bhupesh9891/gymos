import { StyleSheet, Text, View, Pressable } from "react-native";

import { GymCard } from "@/components/ui/gym-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { GymColors, Spacing, Typography } from "@/constants/theme";

type DailyTargetsCardProps = {
  water: number;
  sleep: string;
  steps: string;
  onWaterReset?: () => void;
};

export function DailyTargetsCard({
  water,
  sleep,
  steps,
  onWaterReset,
}: DailyTargetsCardProps) {
  const waterPercent = Math.min((water / 3.5) * 100, 100);
  const isWaterGoalMet = water >= 3.5;

  return (
    <GymCard style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>DAILY TARGETS</Text>
        {onWaterReset && water > 0 && (
          <Pressable onPress={onWaterReset} style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Reset Water</Text>
          </Pressable>
        )}
      </View>

      <ProgressBar current={water} target={3.5} unit="L" />
      {isWaterGoalMet && (
        <Text style={styles.goalMetText}>🎉 Water goal met!</Text>
      )}
      <TargetRow label="Sleep" value={sleep} />
      <TargetRow label="Steps" value={steps} />
    </GymCard>
  );
}

type TargetRowProps = {
  label: string;
  value: string;
};

function TargetRow({ label, value }: TargetRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: Spacing.two,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.one,
  },

  eyebrow: {
    color: GymColors.text.tertiary,
    fontSize: Typography.caption,
  },

  resetButton: {
    paddingVertical: Spacing.half,
    paddingHorizontal: Spacing.one,
  },

  resetButtonText: {
    color: GymColors.text.tertiary,
    fontSize: Typography.caption,
  },

  goalMetText: {
    color: GymColors.semantic.success,
    fontSize: Typography.caption,
    fontWeight: '600',
    marginTop: Spacing.half,
    marginBottom: Spacing.one,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Spacing.one,
  },

  label: {
    color: GymColors.text.primary,
    fontSize: Typography.body,
  },

  value: {
    color: GymColors.text.secondary,
    fontSize: Typography.body,
  },
});
