import { StyleSheet, Text, View } from 'react-native';

import { GymColors, Radius, Spacing, Typography, FontWeight } from '@/constants/theme';

type ProgressBarProps = {
  current: number;
  target: number;
  unit: string;
  showCelebration?: boolean;
};

export function ProgressBar({
  current,
  target,
  unit,
  showCelebration = false,
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
        <View style={styles.valueContainer}>
          <Text style={styles.currentValue}>{current.toFixed(1)}</Text>
          <Text style={styles.unitText}> / {target.toFixed(1)} {unit}</Text>
        </View>

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
        {/* Animated shimmer effect overlay */}
        {current < target && (
          <View style={styles.shimmer} />
        )}
      </View>
      
      {showCelebration && (
        <View style={styles.celebrationContainer}>
          <Text style={styles.celebrationText}>🎉 Awesome! You crushed it!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.two,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  currentValue: {
    color: GymColors.text.primary,
    fontSize: Typography.h2,
    fontWeight: FontWeight.bold,
  },

  unitText: {
    color: GymColors.text.secondary,
    fontSize: Typography.body,
  },

  status: {
    color: GymColors.text.secondary,
    fontSize: Typography.caption,
    fontWeight: FontWeight.medium,
  },

  completed: {
    color: GymColors.semantic.success,
  },

  track: {
    height: 8,
    borderRadius: Radius.full,
    backgroundColor: GymColors.background.surface,
    overflow: 'hidden',
    position: 'relative' as const,
  },

  fill: {
    height: '100%',
    backgroundColor: GymColors.semantic.accent,
    borderRadius: Radius.full,
    transition: 'width 0.3s ease',
  },

  completedFill: {
    backgroundColor: GymColors.semantic.success,
  },

  shimmer: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)`,
  },

  celebrationContainer: {
    marginTop: Spacing.oneAndHalf,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    backgroundColor: GymColors.semantic.success + '20',
    borderRadius: Radius.medium,
    alignItems: 'center' as const,
  },

  celebrationText: {
    color: GymColors.semantic.success,
    fontSize: Typography.bodySmall,
    fontWeight: FontWeight.semibold,
  },
});

