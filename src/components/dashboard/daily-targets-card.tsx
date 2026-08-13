import { StyleSheet, Text, View } from "react-native";

import { GymCard } from "@/components/ui/gym-card";
import { GymColors, Spacing, Typography } from "@/constants/theme";

type DailyTargetsCardProps = {
  water: string;
  sleep: string;
  steps: string;
};

export function DailyTargetsCard({
  water,
  sleep,
  steps,
}: DailyTargetsCardProps) {
  return (
    <GymCard style={styles.card}>
      <Text style={styles.eyebrow}>DAILY TARGETS</Text>

      <TargetRow label="Water" value={water} />
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

  eyebrow: {
    color: GymColors.text.tertiary,
    fontSize: Typography.caption,
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
