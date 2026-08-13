import { X } from "lucide-react-native";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Modal,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import { GymCard } from "@/components/ui/gym-card";
import { GymColors, Radius, Spacing, Typography } from "@/constants/theme";

export type NorthStar = {
  title: string;
  metric?: {
    name: string;
    current?: number;
    target?: number;
    unit?: string;
  };
  why?: string;
};

type NorthStarCardProps = {
  northStar: NorthStar;
};

export function NorthStarCard({ northStar }: NorthStarCardProps) {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);

  const [title, setTitle] = useState(northStar.title);
  const [metricName, setMetricName] = useState(northStar.metric?.name ?? "");
  const [current, setCurrent] = useState(
    northStar.metric?.current?.toString() ?? "",
  );
  const [target, setTarget] = useState(
    northStar.metric?.target?.toString() ?? "",
  );
  const [unit, setUnit] = useState(northStar.metric?.unit ?? "");
  const [why, setWhy] = useState(northStar.why ?? "");

  function openEditor() {
    setEditing(true);
    setOpen(false);
  }

  function save() {
    setEditing(false);
    setOpen(true);
  }

  return (
    <>
      {/* North Star Card */}
      <Pressable onPress={() => setOpen(true)}>
        <GymCard style={styles.card}>
          <Text style={styles.eyebrow}>NORTH STAR</Text>

          <Text style={styles.title}>{title}</Text>

          {current && target && (
            <Text style={styles.progress}>
              {current} → {target}
              {unit ? ` ${unit}` : ""}
            </Text>
          )}
        </GymCard>
      </Pressable>

      {/* Details Sheet */}
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
              >
                <X size={22} color={GymColors.text.secondary} />
              </Pressable>
            </View>

            <Text style={styles.goal}>{title}</Text>

            {current && target && (
              <>
                <DetailRow
                  label={`Current ${metricName}`}
                  value={`${current}${unit ? ` ${unit}` : ""}`}
                />

                <DetailRow
                  label={`Target ${metricName}`}
                  value={`${target}${unit ? ` ${unit}` : ""}`}
                />
              </>
            )}

            {why && (
              <View style={styles.whySection}>
                <Text style={styles.detailLabel}>Why</Text>
                <Text style={styles.why}>{why}</Text>
              </View>
            )}

            <Pressable style={styles.editButton} onPress={openEditor}>
              <Text style={styles.editButtonText}>Edit</Text>
            </Pressable>

            <Text style={styles.note}>
              North Star represents direction, not completion.
            </Text>
          </View>
        </View>
      </Modal>

      {/* Editor Sheet */}
      <Modal
        visible={editing}
        transparent
        animationType="slide"
        onRequestClose={() => setEditing(false)}
      >
        <KeyboardAvoidingView
          style={styles.modal}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <Pressable
            style={styles.backdrop}
            onPress={() => setEditing(false)}
          />

          <View style={styles.sheet}>
            <View style={styles.header}>
              <Text style={styles.sheetTitle}>Edit North Star</Text>

              <Pressable
                onPress={() => setEditing(false)}
                style={styles.closeButton}
              >
                <X size={22} color={GymColors.text.secondary} />
              </Pressable>
            </View>

            <Text style={styles.inputLabel}>North Star</Text>

            <TextInput
              value={title}
              onChangeText={setTitle}
              placeholder="What are you working toward?"
              placeholderTextColor={GymColors.text.tertiary}
              style={styles.input}
            />

            <Text style={styles.inputLabel}>Metric name</Text>

            <TextInput
              value={metricName}
              onChangeText={setMetricName}
              placeholder="Optional"
              placeholderTextColor={GymColors.text.tertiary}
              style={styles.input}
            />

            <View style={styles.inputRow}>
              <View style={styles.inputHalf}>
                <Text style={styles.inputLabel}>Current</Text>

                <TextInput
                  value={current}
                  onChangeText={setCurrent}
                  placeholder="Optional"
                  placeholderTextColor={GymColors.text.tertiary}
                  keyboardType="decimal-pad"
                  style={styles.input}
                />
              </View>

              <View style={styles.inputHalf}>
                <Text style={styles.inputLabel}>Target</Text>

                <TextInput
                  value={target}
                  onChangeText={setTarget}
                  placeholder="Optional"
                  placeholderTextColor={GymColors.text.tertiary}
                  keyboardType="decimal-pad"
                  style={styles.input}
                />
              </View>
            </View>

            <Text style={styles.inputLabel}>Unit</Text>

            <TextInput
              value={unit}
              onChangeText={setUnit}
              placeholder="kg, in, min, etc."
              placeholderTextColor={GymColors.text.tertiary}
              style={styles.input}
            />

            <Text style={styles.inputLabel}>Why</Text>

            <TextInput
              value={why}
              onChangeText={setWhy}
              placeholder="Why does this matter to you?"
              placeholderTextColor={GymColors.text.tertiary}
              multiline
              style={[styles.input, styles.whyInput]}
            />

            <Pressable style={styles.saveButton} onPress={save}>
              <Text style={styles.saveButtonText}>Save</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.detail}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
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
    maxHeight: "90%",
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

  whySection: {
    marginTop: Spacing.four,
  },

  why: {
    color: GymColors.text.secondary,
    fontSize: Typography.body,
    marginTop: Spacing.one,
    lineHeight: 22,
  },

  note: {
    color: GymColors.text.tertiary,
    fontSize: Typography.caption,
    marginTop: Spacing.four,
  },

  editButton: {
    marginTop: Spacing.four,
    backgroundColor: GymColors.semantic.accent,
    paddingVertical: Spacing.two,
    borderRadius: Radius.medium,
    alignItems: "center",
  },

  editButtonText: {
    color: GymColors.text.primary,
    fontSize: Typography.body,
    fontWeight: "600",
  },

  inputLabel: {
    color: GymColors.text.secondary,
    fontSize: Typography.caption,
    marginBottom: Spacing.one,
    marginTop: Spacing.two,
  },

  input: {
    backgroundColor: GymColors.background.card,
    color: GymColors.text.primary,
    borderRadius: Radius.medium,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    fontSize: Typography.body,
  },

  inputRow: {
    flexDirection: "row",
    gap: Spacing.two,
  },

  inputHalf: {
    flex: 1,
  },

  whyInput: {
    minHeight: 80,
    textAlignVertical: "top",
  },

  saveButton: {
    marginTop: Spacing.four,
    backgroundColor: GymColors.semantic.accent,
    paddingVertical: Spacing.two,
    borderRadius: Radius.medium,
    alignItems: "center",
  },

  saveButtonText: {
    color: GymColors.text.primary,
    fontSize: Typography.body,
    fontWeight: "600",
  },
});
