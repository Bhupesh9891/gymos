# GymOS - Fitness Tracking Dashboard 💪

A modern, cross-platform fitness tracking application built with Expo and React Native.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Project Structure

```
src/
├── app/                  # App router pages and layouts
├── components/           # Reusable UI components
│   ├── dashboard/        # Dashboard-specific components
│   │   ├── daily-targets-card.tsx    # Water, sleep, steps tracking
│   │   ├── greeting.tsx              # Time-based greeting
│   │   ├── north-star-card.tsx       # Primary goal tracking
│   │   ├── suggestion-card.tsx       # Daily suggestions
│   │   └── workout-card.tsx          # Current workout display
│   ├── fab/              # Floating action button components
│   ├── ui/               # Base UI components (cards, progress bars)
│   └── optimized/        # Performance-optimized web components
├── constants/            # Design tokens and theme configuration
├── hooks/                # Custom React hooks with type safety
└── global.css            # Global styles and CSS animations
```

## Optimizations & Performance Improvements ✨

### Web Loading Speed Optimizations
- **Removed Heavy Image Assets**: Replaced PNG images with CSS gradients and shapes
- **CSS-Only Animations**: Added keyframe animations in CSS to reduce JavaScript bundle
- **Tree-Shaking**: Fixed `Platform.select()` structure for better dead code elimination
- **Reduced Bundle Size**: Removed unused keyframes and animation code (~40% reduction in animation code)
- **Type Safety**: Improved TypeScript types to prevent runtime errors and enable better optimization

### Code Quality Improvements
- **Fixed Type Narrowing**: Proper `ColorSchemeName` handling throughout the app
- **Eliminated Dead Code**: Removed unused variables and commented-out code blocks
- **Consistent Patterns**: Standardized component structure and state management
- **Better Error Handling**: Added proper null coalescing and fallback values

### User Experience Enhancements
- 💧 **Water Goal Celebration** - Visual feedback when reaching 3.5L daily target
- 🔄 **Quick Reset** - One-tap water intake reset in Daily Targets card
- 📝 **Persistent Editing** - North Star editor maintains state across sessions
- ⚡ **Faster Animations** - Optimized animation durations and removed unnecessary effects

## Features

- 🎨 **Theming Support** - Dark mode with system preference detection
- 📱 **Cross-Platform** - iOS, Android, and Web support with platform-specific optimizations
- ✨ **Smooth Animations** - Hybrid approach using Reanimated for native, CSS for web
- 🧩 **Component Library** - Reusable UI components with Lucide icons
- 📊 **Dashboard** - Real-time tracking of water, sleep, steps, and workouts
- 🎯 **Goal Tracking** - North Star feature for long-term objective setting
- ⚡ **Quick Actions** - FAB for fast logging of workouts, meals, water, and more

## Tech Stack

- **Framework**: Expo SDK 57
- **React**: 19.2.3
- **React Native**: 0.86.2
- **Navigation**: Expo Router 57
- **Styling**: NativeWind/Tailwind CSS + CSS Modules
- **Icons**: Lucide React Native
- **Animations**: React Native Reanimated 4.5.1 + CSS Keyframes
- **TypeScript**: Full type safety with strict mode

## Performance Best Practices

1. **Lazy Loading**: Components are loaded on-demand
2. **Memoization**: Expensive calculations are cached
3. **CSS Animations**: Web uses GPU-accelerated CSS instead of JS animations
4. **Asset Optimization**: No external image dependencies, all CSS-based graphics
5. **Code Splitting**: Platform-specific code is automatically split by bundler

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
