import { StyleSheet, Text, View, Pressable } from "react-native";

import { GymCard } from "@/components/ui/gym-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { GymColors, Spacing, Typography, FontWeight, Radius } from "@/constants/theme";

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
        <View style={styles.titleRow}>
          <Text style={styles.eyebrow}>DAILY TARGETS</Text>
          {isWaterGoalMet && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>🎉 Goal Met</Text>
            </View>
          )}
        </View>
        {onWaterReset && water > 0 && (
          <Pressable onPress={onWaterReset} style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </Pressable>
        )}
      </View>

      <ProgressBar current={water} target={3.5} unit="L" showCelebration={isWaterGoalMet} />
      
      <View style={styles.statsGrid}>
        <StatItem label="Sleep" value={sleep} icon="🌙" />
        <View style={styles.statDivider} />
        <StatItem label="Steps" value={steps} icon="👟" />
      </View>
    </GymCard>
  );
}

type StatItemProps = {
  label: string;
  value: string;
  icon: string;
};

function StatItem({ label, value, icon }: StatItemProps) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statIcon}>{icon}</Text>
      <View style={styles.statContent}>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statLabel}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: Spacing.six,
    overflow: "hidden" as const,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: Spacing.three,
  },

  titleRow: {
    flex: 1,
  },

  eyebrow: {
    color: GymColors.text.tertiary,
    fontSize: Typography.caption,
    fontWeight: FontWeight.semibold,
    letterSpacing: 1,
  },

  badge: {
    backgroundColor: GymColors.semantic.success,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Radius.full,
    marginTop: Spacing.oneAndHalf,
    alignSelf: "flex-start",
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: Typography.tiny,
    fontWeight: FontWeight.bold,
  },

  resetButton: {
    paddingVertical: Spacing.half,
    paddingHorizontal: Spacing.two,
    borderRadius: Radius.medium,
    backgroundColor: GymColors.background.surface,
  },

  resetButtonText: {
    color: GymColors.text.tertiary,
    fontSize: Typography.caption,
    fontWeight: FontWeight.medium,
  },

  statsGrid: {
    flexDirection: "row",
    marginTop: Spacing.four,
    paddingTop: Spacing.four,
    borderTopWidth: 1,
    borderTopColor: GymColors.background.surface,
  },

  statItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.two,
  },

  statIcon: {
    fontSize: 20,
  },

  statContent: {
    flex: 1,
  },

  statValue: {
    color: GymColors.text.primary,
    fontSize: Typography.h3,
    fontWeight: FontWeight.bold,
  },

  statLabel: {
    color: GymColors.text.tertiary,
    fontSize: Typography.caption,
    marginTop: Spacing.half,
  },

  statDivider: {
    width: 1,
    backgroundColor: GymColors.background.surface,
    marginHorizontal: Spacing.three,
  },
});
