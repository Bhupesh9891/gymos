import { StyleSheet, Text, View } from 'react-native';

import { GymColors, Radius, Spacing, Typography } from '@/constants/theme';

type ProgressBarProps = {
  current: number;
  target: number;
  unit: string;
};

export function ProgressBar({
  current,
  target,
  unit,
}: ProgressBarProps) {
  const progress = Math.min(current / target, 1);

  const status =
    current >= target
      ? 'Completed'
      : current > 0
        ? 'In progress'
        : 'Pending';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.value}>
          {current.toFixed(1)} / {target.toFixed(1)} {unit}
        </Text>

        <Text
          style={[
            styles.status,
            current >= target && styles.completed,
          ]}>
          {current >= target ? '✓ ' : ''}
          {status}
        </Text>
      </View>

      <View style={styles.track}>
        <View
          style={[
            styles.fill,
            { width: `${progress * 100}%` },
            current >= target && styles.completedFill,
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.one,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  value: {
    color: GymColors.text.primary,
    fontSize: Typography.body,
  },

  status: {
    color: GymColors.text.secondary,
    fontSize: Typography.caption,
  },

  completed: {
    color: GymColors.semantic.success,
  },

  track: {
    height: 6,
    borderRadius: Radius.medium,
    backgroundColor: GymColors.background.surface,
    overflow: 'hidden',
  },

  fill: {
    height: '100%',
    backgroundColor: GymColors.semantic.accent,
    borderRadius: Radius.medium,
  },

  completedFill: {
    backgroundColor: GymColors.semantic.success,
  },
});

