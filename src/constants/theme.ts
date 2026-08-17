/**
 * GymOS Design System
 * Professional, energetic fitness tracking interface
 */
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
 * GymOS Design Tokens - Professional Fitness App Palette
 * Dark mode focused with vibrant accents for energy and motivation
 */
export const GymColors = {
  // Backgrounds - Deep, premium dark tones
  background: {
    primary: "#0A0A0C",      // Deepest black-blue
    card: "#141418",         // Card surface
    surface: "#1C1C22",      // Elevated surfaces
    overlay: "rgba(0, 0, 0, 0.6)",  // Modal overlays
  },

  // Text Hierarchy - Clear readability
  text: {
    primary: "#FFFFFF",
    secondary: "#9CA0AB",
    tertiary: "#6B7280",
    disabled: "#3F3F46",
  },

  // Semantic Colors - Action-oriented
  semantic: {
    success: "#10B981",      // Emerald green for achievements
    warning: "#F59E0B",      // Amber for cautions
    error: "#EF4444",        // Red for errors
    accent: "#6366F1",       // Indigo for primary actions
    accentLight: "#818CF8",  // Lighter indigo for hover
    info: "#3B82F6",         // Blue for information
  },

  // Gradients for visual excitement
  gradients: {
    primary: ["#6366F1", "#8B5CF6"],     // Indigo to purple
    success: ["#10B981", "#34D399"],     // Emerald gradient
    water: ["#3B82F6", "#06B6D4"],       // Blue to cyan
    energy: ["#F59E0B", "#EF4444"],      // Amber to red (workout intensity)
  },
} as const;

// Optimized: Fixed Platform.select() structure for better tree-shaking
export const Fonts = {
  sans: Platform.select({
    ios: "system-ui",
    android: "normal",
    web: "var(--font-display)",
  }) ?? "normal",
  
  serif: Platform.select({
    ios: "ui-serif",
    android: "serif",
    web: "var(--font-serif)",
  }) ?? "serif",
  
  rounded: Platform.select({
    ios: "ui-rounded",
    android: "normal",
    web: "var(--font-rounded)",
  }) ?? "normal",
  
  mono: Platform.select({
    ios: "ui-monospace",
    android: "monospace",
    web: "var(--font-mono)",
  }) ?? "monospace",
};

// Refined spacing scale for better visual rhythm
export const Spacing = {
  quarter: 1,
  half: 2,
  threeQuarter: 3,
  one: 4,
  oneAndHalf: 6,
  two: 8,
  twoAndHalf: 10,
  three: 12,
  four: 16,
  five: 20,
  six: 24,
  seven: 28,
  eight: 32,
  nine: 36,
  ten: 40,
  twelve: 48,
  fourteen: 56,
  sixteen: 64,
  twenty: 80,
} as const;

// Enhanced border radius system
export const Radius = {
  small: 8,
  medium: 12,
  large: 16,
  extraLarge: 20,
  full: 9999,
} as const;

// Professional typography scale
export const Typography = {
  display: 36,      // Hero statements
  h1: 30,           // Major sections
  h2: 24,           // Card titles
  h3: 20,           // Subsections
  body: 16,         // Body text
  bodySmall: 14,    // Secondary body
  caption: 12,      // Labels, metadata
  tiny: 10,         // Minimal text
} as const;

// Font weights for hierarchy
export const FontWeight = {
  regular: "400" as const,
  medium: "500" as const,
  semibold: "600" as const,
  bold: "700" as const,
  extrabold: "800" as const,
} as const;

// Motion durations for smooth interactions
export const Motion = {
  instant: 100,
  fast: 200,
  medium: 300,
  slow: 450,
  deliberate: 600,
} as const;

// Shadow system for depth
export const Shadows = {
  small: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
} as const;

export const BottomTabInset =
  Platform.select({
    ios: 50,
    android: 80,
  }) ?? 0;

export const MaxContentWidth = 800;
