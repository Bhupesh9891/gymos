import { StyleSheet, View, type ViewProps } from "react-native";

import { GymColors, Radius, Spacing } from "@/constants/theme";

export type GymCardProps = ViewProps;

export function GymCard({ style, ...otherProps }: GymCardProps) {
  return (
    <View 
      style={[styles.card, style]} 
      {...otherProps}
    >
      {otherProps.children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: GymColors.background.card,
    borderRadius: Radius.large,
    padding: Spacing.four,
    borderWidth: 1,
    borderColor: GymColors.background.surface,
  },
});
