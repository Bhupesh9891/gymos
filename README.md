# GymOS - Professional Fitness Tracking App

A modern, beautifully designed fitness tracking application built with Expo and React Native. Features a premium dark theme with vibrant accents, smooth animations, and an intuitive user interface.

## ✨ Features

### Dashboard
- **Personalized Greeting** - Dynamic greeting with user identification
- **Workout Card** - Today's workout display with quick start action
- **North Star Goal** - Long-term goal tracking with editable metrics
- **Daily Targets** - Water, sleep, and step tracking with progress visualization
- **Smart Suggestions** - Context-aware fitness recommendations

### Quick Actions FAB
- Color-coded action buttons for different tracking categories
- Haptic feedback for tactile response
- Water quick-add with multiple volume options
- Smooth modal animations

### Design System
- Professional dark mode palette
- Vibrant semantic colors for different action types
- Consistent spacing and typography scale
- Subtle shadows and borders for depth
- Icon-based visual hierarchy

## 🏗️ Project Structure

```
src/
├── app/                      # Expo Router pages
│   ├── _layout.tsx          # Root layout
│   ├── index.tsx            # Home dashboard
│   ├── hub.tsx              # Activity hub
│   ├── nutrition.tsx        # Nutrition tracking
│   ├── progress.tsx         # Progress tracking
│   └── workouts.tsx         # Workout library
├── components/
│   ├── dashboard/           # Dashboard widgets
│   │   ├── daily-targets-card.tsx
│   │   ├── greeting.tsx
│   │   ├── north-star-card.tsx
│   │   ├── suggestion-card.tsx
│   │   └── workout-card.tsx
│   ├── fab/                 # Floating action button
│   │   └── gym-fab.tsx
│   ├── ui/                  # Base UI components
│   │   ├── gym-card.tsx
│   │   └── progress-bar.tsx
│   └── ...
├── constants/
│   └── theme.ts             # Design tokens & colors
├── hooks/                   # Custom React hooks
└── global.css               # Global styles
```

## 🎨 Design Tokens

### Colors
- **Backgrounds**: Deep black-blue tones (#0A0A0C, #141418, #1C1C22)
- **Text**: Clear hierarchy (Primary: #FFFFFF, Secondary: #9CA0AB, Tertiary: #6B7280)
- **Semantic**: 
  - Success: Emerald (#10B981)
  - Warning: Amber (#F59E0B)
  - Error: Red (#EF4444)
  - Accent: Indigo (#6366F1)

### Typography Scale
- Display: 36px (Hero statements)
- H1: 30px (Major sections)
- H2: 24px (Card titles)
- H3: 20px (Subsections)
- Body: 16px (Body text)
- Caption: 12px (Labels)

### Spacing Scale
Quarter (1), Half (2), ThreeQuarter (3), One (4) through Twenty (80)

## 🚀 Tech Stack

- **Expo SDK 57** - Modern React Native development
- **React 19.2.3** - Latest React features
- **React Native 0.86.2** - Native mobile framework
- **Expo Router 57** - File-based routing
- **Lucide React Native** - Beautiful icon library
- **Expo Haptics** - Tactile feedback

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npx expo start

# Run on specific platforms
npx expo run:ios
npx expo run:android
npx expo run:web
```

## 📱 Platform Support

- ✅ iOS (Native)
- ✅ Android (Native)
- ✅ Web (Optimized)

## 🎯 Quality of Life Features

1. **Water Goal Celebration** - Visual celebration when daily water goal is met
2. **Quick Reset** - One-tap water tracker reset
3. **Color-Coded Actions** - Intuitive color system for different tracking types
4. **Haptic Feedback** - Tactile response for all interactions
5. **Scrollable Dashboard** - Comfortable navigation on all screen sizes
6. **Progress Animations** - Smooth progress bar transitions
7. **Icon Badges** - Visual indicators for card types
8. **Action Buttons** - Direct call-to-action on workout cards

---

Built with 💪 by the GymOS Team
