import { DailyTargetsCard } from "@/components/dashboard/daily-targets-card";
import { Greeting } from "@/components/dashboard/greeting";
import { NorthStarCard } from "@/components/dashboard/north-star-card";
import { SuggestionCard } from "@/components/dashboard/suggestion-card";
import { WorkoutCard } from "@/components/dashboard/workout-card";
import { GymFAB } from "@/components/fab/gym-fab";
import { GymColors, Spacing } from "@/constants/theme";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const [water, setWater] = useState(2.1);
  return (
    <View style={styles.container}>
      <Greeting text="Good evening" />

      <WorkoutCard workoutName="Push" message="Pick up where you left off." />

      <NorthStarCard goal="Gain muscle" current="64.8 kg" target="75 kg" />

      <DailyTargetsCard water={`${water.toFixed(1)} / 3.5 L`} sleep="7h 12m" steps="6,430" />

      <SuggestionCard message="Today's workout is Push." />
      <GymFAB
        onWaterAdd={(amount) => {
        setWater((current) => current + amount);
        }
      }
      />
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
