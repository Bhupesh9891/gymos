import * as Haptics from "expo-haptics";
import {
    BookOpen,
    Camera,
    Droplets,
    Dumbbell,
    Moon,
    Plus,
    Scale,
    Utensils,
    X,
} from "lucide-react-native";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

import { GymColors, Radius, Spacing, Typography, FontWeight, Shadows } from "@/constants/theme";

type GymFABProps = {
  onWaterAdd?: (amount: number) => void;
};

const actions = [
  { label: "Workout", icon: Dumbbell, color: GymColors.semantic.accent },
  { label: "Meal", icon: Utensils, color: GymColors.semantic.warning },
  { label: "Water", icon: Droplets, color: "#3B82F6" },
  { label: "Sleep", icon: Moon, color: "#8B5CF6" },
  { label: "Weight", icon: Scale, color: GymColors.semantic.error },
  { label: "Journal", icon: BookOpen, color: GymColors.semantic.success },
  { label: "Photo", icon: Camera, color: "#EC4899" },
];

export function GymFAB({ onWaterAdd }: GymFABProps) {
  const [open, setOpen] = useState(false);
  const [waterSheetOpen, setWaterSheetOpen] = useState(false);

  async function openSheet() {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setOpen(true);
  }

  async function closeSheet() {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setOpen(false);
  }

  async function handleAction(label: string) {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setOpen(false);

    if (label === "Water") {
      setWaterSheetOpen(true);
      return;
    }

    console.log(`GymOS quick action: ${label}`);
  }

  async function handleWaterAdd(amount: number) {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onWaterAdd?.(amount / 1000);
    setWaterSheetOpen(false);
  }

  return (
    <>
      {/* FAB */}
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Open quick add"
        onPress={openSheet}
        style={[styles.fab, Shadows.large]}
      >
        <Plus size={28} color="#FFFFFF" strokeWidth={2.5} />
      </Pressable>

      {/* Main Quick Add Sheet */}
      <Modal
        visible={open}
        transparent
        animationType="slide"
        onRequestClose={closeSheet}
      >
        <View style={styles.modal}>
          <Pressable style={styles.backdrop} onPress={closeSheet} />

          <View style={styles.sheet}>
            <View style={styles.sheetHeader}>
              <Text style={styles.title}>Quick add</Text>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Close quick add"
                onPress={closeSheet}
                style={styles.closeButton}
              >
                <X size={22} color={GymColors.text.secondary} />
              </Pressable>
            </View>

            <View style={styles.grid}>
              {actions.map(({ label, icon: Icon, color }) => (
                <Pressable
                  key={label}
                  onPress={() => handleAction(label)}
                  style={styles.action}
                >
                  <View style={[styles.iconContainer, { backgroundColor: color + '15' }]}>
                    <Icon size={24} color={color} strokeWidth={2} />
                  </View>

                  <Text style={styles.actionLabel}>{label}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </Modal>

      {/* Water Sheet */}
      <Modal
        visible={waterSheetOpen}
        transparent
        animationType="slide"
        onRequestClose={() => setWaterSheetOpen(false)}
      >
        <View style={styles.modal}>
          <Pressable
            style={styles.backdrop}
            onPress={() => setWaterSheetOpen(false)}
          />

          <View style={styles.sheet}>
            <View style={styles.sheetHeader}>
              <Text style={styles.title}>Add water</Text>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Close water quick add"
                onPress={() => setWaterSheetOpen(false)}
                style={styles.closeButton}
              >
                <X size={22} color={GymColors.text.secondary} />
              </Pressable>
            </View>

            <View style={styles.waterOptions}>
              {[250, 500, 750, 1000].map((amount) => (
                <Pressable
                  key={amount}
                  style={styles.waterButton}
                  onPress={() => handleWaterAdd(amount)}
                >
                  <Text style={styles.waterText}>
                    {amount >= 1000 ? `${amount / 1000} L` : `${amount} mL`}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: Spacing.five,
    bottom: Spacing.five,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: GymColors.semantic.accent,
    alignItems: "center",
    justifyContent: "center",
  },

  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },

  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: GymColors.background.overlay,
  },

  sheet: {
    backgroundColor: GymColors.background.surface,
    borderTopLeftRadius: Radius.extraLarge,
    borderTopRightRadius: Radius.extraLarge,
    paddingHorizontal: Spacing.five,
    paddingTop: Spacing.six,
    paddingBottom: Spacing.eight,
  },

  sheetHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: Spacing.six,
  },

  title: {
    color: GymColors.text.primary,
    fontSize: Typography.h2,
    fontWeight: FontWeight.bold,
  },

  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GymColors.background.card,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Spacing.four,
  },

  action: {
    width: "30%",
    alignItems: "center",
    gap: Spacing.two,
  },

  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: Radius.large,
    alignItems: "center",
    justifyContent: "center",
  },

  actionLabel: {
    color: GymColors.text.secondary,
    fontSize: Typography.caption,
    fontWeight: FontWeight.medium,
    textAlign: "center",
  },

  waterOptions: {
    gap: Spacing.twoAndHalf,
  },

  waterButton: {
    backgroundColor: GymColors.background.card,
    borderRadius: Radius.medium,
    paddingVertical: Spacing.four,
    alignItems: "center",
    borderWidth: 1,
    borderColor: GymColors.background.surface,
  },

  waterText: {
    color: GymColors.text.primary,
    fontSize: Typography.body,
    fontWeight: FontWeight.semibold,
  },
});
