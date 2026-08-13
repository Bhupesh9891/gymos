import { X } from "lucide-react-native";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

import { GymCard } from "@/components/ui/gym-card";
import { GymColors, Radius, Spacing, Typography } from "@/constants/theme";

type NorthStarCardProps = {
  goal: string;
  current: string;
  target: string;
};

export function NorthStarCard({ goal, current, target }: NorthStarCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Pressable onPress={() => setOpen(true)}>
        <GymCard style={styles.card}>
          <Text style={styles.eyebrow}>NORTH STAR</Text>

          <Text style={styles.title}>{goal}</Text>

          <Text style={styles.progress}>
            {current} → {target}
          </Text>
        </GymCard>
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType="slide"
        onRequestClose={() => setOpen(false)}
      >
        <View style={styles.modal}>
          <Pressable style={styles.backdrop} onPress={() => setOpen(false)} />

          <View style={styles.sheet}>
            <View style={styles.header}>
              <Text style={styles.sheetTitle}>North Star</Text>

              <Pressable
                onPress={() => setOpen(false)}
                style={styles.closeButton}
                accessibilityRole="button"
                accessibilityLabel="Close North Star"
              >
                <X size={22} color={GymColors.text.secondary} />
              </Pressable>
            </View>

            <Text style={styles.goal}>{goal}</Text>

            <View style={styles.detail}>
              <Text style={styles.detailLabel}>Current weight</Text>

              <Text style={styles.detailValue}>{current}</Text>
            </View>

            <View style={styles.detail}>
              <Text style={styles.detailLabel}>Target weight</Text>

              <Text style={styles.detailValue}>{target}</Text>
            </View>

            <Text style={styles.note}>
              North Star represents direction, not completion.
            </Text>
          </View>
        </View>
      </Modal>
    </>
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

  title: {
    color: GymColors.text.primary,
    fontSize: Typography.h2,
    fontWeight: "600",
  },

  progress: {
    color: GymColors.text.secondary,
    fontSize: Typography.body,
    marginTop: Spacing.one,
  },

  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },

  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.55)",
  },

  sheet: {
    backgroundColor: GymColors.background.surface,
    borderTopLeftRadius: Radius.extraLarge,
    borderTopRightRadius: Radius.extraLarge,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
    paddingBottom: Spacing.five,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: Spacing.four,
  },

  sheetTitle: {
    color: GymColors.text.primary,
    fontSize: Typography.h2,
    fontWeight: "600",
  },

  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  goal: {
    color: GymColors.text.primary,
    fontSize: Typography.h1,
    fontWeight: "700",
    marginBottom: Spacing.four,
  },

  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Spacing.two,
    borderBottomWidth: 1,
    borderBottomColor: GymColors.background.card,
  },

  detailLabel: {
    color: GymColors.text.secondary,
    fontSize: Typography.body,
  },

  detailValue: {
    color: GymColors.text.primary,
    fontSize: Typography.body,
    fontWeight: "600",
  },

  note: {
    color: GymColors.text.tertiary,
    fontSize: Typography.caption,
    marginTop: Spacing.four,
  },
});
