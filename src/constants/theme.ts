import "@/global.css";

import { Platform } from "react-native";

/**
 * Legacy Expo theme colors.
 * Kept temporarily while starter components are migrated.
 */
export const Colors = {
  light: {
    text: "#000000",
    background: "#ffffff",
    backgroundElement: "#F0F0F3",
    backgroundSelected: "#E0E1E6",
    textSecondary: "#60646C",
  },
  dark: {
    text: "#ffffff",
    background: "#000000",
    backgroundElement: "#212225",
    backgroundSelected: "#2E3135",
    textSecondary: "#B0B4BA",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

/**
 * GymOS design tokens.
 */
export const GymColors = {
  background: {
    primary: "#0F0F10",
    card: "#18181A",
    surface: "#202023",
  },

  text: {
    primary: "#FFFFFF",
    secondary: "#A0A0A5",
    tertiary: "#6F7075",
    disabled: "#4A4A4F",
  },

  semantic: {
    success: "#4CAF50",
    warning: "#D9A441",
    error: "#D9534F",
    accent: "#8B9EFF",
  },
} as const;

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  android: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
}) ?? {
  sans: "normal",
  serif: "serif",
  rounded: "normal",
  mono: "monospace",
};

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 40,
  seven: 48,
  eight: 64,
} as const;

export const Radius = {
  medium: 12,
  large: 16,
  extraLarge: 24,
} as const;

export const Typography = {
  display: 32,
  h1: 28,
  h2: 22,
  h3: 18,
  body: 16,
  caption: 13,
} as const;

export const Motion = {
  fast: 150,
  medium: 250,
  slow: 350,
} as const;

export const BottomTabInset =
  Platform.select({
    ios: 50,
    android: 80,
  }) ?? 0;

export const MaxContentWidth = 800;
