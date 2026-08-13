import { StyleSheet, View } from "react-native";

import { DailyTargetsCard } from "@/components/dashboard/daily-targets-card";
import { Greeting } from "@/components/dashboard/greeting";
import { NorthStarCard } from "@/components/dashboard/north-star-card";
import { SuggestionCard } from "@/components/dashboard/suggestion-card";
import { WorkoutCard } from "@/components/dashboard/workout-card";
import { GymColors, Spacing } from "@/constants/theme";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Greeting text="Good evening" />

      <WorkoutCard workoutName="Push" message="Pick up where you left off." />

      <NorthStarCard goal="Gain muscle" current="64.8 kg" target="75 kg" />

      <DailyTargetsCard water="2.1 / 3.5 L" sleep="7h 12m" steps="6,430" />

      <SuggestionCard message="Today's workout is Push." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GymColors.background.primary,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.five,
  },
});
