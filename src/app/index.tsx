import { DailyTargetsCard } from "@/components/dashboard/daily-targets-card";
import { Greeting } from "@/components/dashboard/greeting";
import {
  NorthStarCard,
  type NorthStar,
} from "@/components/dashboard/north-star-card";
import { SuggestionCard } from "@/components/dashboard/suggestion-card";
import { WorkoutCard } from "@/components/dashboard/workout-card";
import { GymFAB } from "@/components/fab/gym-fab";
import { GymColors, Spacing } from "@/constants/theme";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const [water, setWater] = useState(2.1);
  const northStar: NorthStar = {
    title: "18 inch biceps",
    metric: {
      name: "Biceps",
      current: 16.2,
      target: 18,
      unit: "in",
    },
    why: "Build the physique I want.",
  };

  const handleResetWater = () => {
    setWater(0);
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Greeting text="Good evening" />

      <WorkoutCard workoutName="Push" message="Pick up where you left off." />

      <NorthStarCard northStar={northStar} />

      <DailyTargetsCard 
        water={water} 
        sleep="7h 12m" 
        steps="6,430"
        onWaterReset={handleResetWater}
      />

      <SuggestionCard message="Today's workout is Push." />
      
      <View style={styles.bottomPadding} />
      
      <GymFAB
        onWaterAdd={(amount) => {
          setWater((current) => current + amount);
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GymColors.background.primary,
  },
  content: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.six,
    paddingBottom: Spacing.twenty,
  },
  bottomPadding: {
    height: Spacing.twelve,
  },
});
