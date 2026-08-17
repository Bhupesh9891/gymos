# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

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

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Project Structure

```
src/
├── app/                  # App router pages and layouts
├── components/           # Reusable UI components
│   ├── dashboard/        # Dashboard-specific components
│   ├── fab/              # Floating action button components
│   └── ui/               # Base UI components
├── constants/            # App constants and configuration
├── hooks/                # Custom React hooks
└── global.css            # Global styles
```

## Known Issues

✅ **All critical issues have been resolved!**

### Fixed Issues
1. ✅ **Missing Asset Files** - Asset files exist at `@/assets/images/expo-logo.png` and `@/assets/images/logo-glow.png`
2. ✅ **Missing Import** - Added `Text` import to `app-tabs.web.tsx`
3. ✅ **Type Safety** - Proper type narrowing in `use-theme.ts` with explicit `ColorSchemeName` type
4. ✅ **Unused Keyframes** - Prefixed unused keyframes with `_` and commented out unused `AnimatedIcon` component
5. ✅ **Water Unit Confusion** - Consistent mL to L conversion in FAB, proper display formatting
6. ✅ **Animation Duration** - Fixed invalid keyframe percentage in `animated-icon.web.tsx`
7. ✅ **North Star Persistence** - Editor now properly persists changes to local state
8. ✅ **Platform-Specific Code** - Fixed `Platform.select()` structure for Fonts object with proper fallback

### Quality of Life Improvements
- 💧 **Water Goal Celebration** - Shows celebration message when daily water goal (3.5L) is met
- 🔄 **Water Reset Button** - Added ability to reset water intake in Daily Targets card
- 📝 **Better Form Handling** - North Star editor resets form to persisted values on open
- ✨ **Cleaner Code** - Removed dead code warnings by properly marking unused variables

## Features

- 🎨 **Theming Support** - Dark/light mode with system preference detection
- 📱 **Cross-Platform** - iOS, Android, and Web support
- ✨ **Animations** - Smooth animations using React Native Reanimated
- 🧩 **Component Library** - Reusable UI components with Lucide icons
- 📊 **Dashboard** - Daily targets, workout tracking, and suggestions

## Tech Stack

- **Framework**: Expo SDK 57
- **React**: 19.2.3
- **React Native**: 0.86.2
- **Navigation**: Expo Router 57
- **Styling**: NativeWind/Tailwind CSS
- **Icons**: Lucide React Native
- **Animations**: React Native Reanimated 4.5.1

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
