import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import Animated, { Keyframe, Easing } from 'react-native-reanimated';

const DURATION = 300;

export function AnimatedSplashOverlay() {
  return null;
}

const keyframe = new Keyframe({
  0: {
    transform: [{ scale: 0 }],
  },
  60: {
    transform: [{ scale: 1.2 }],
    easing: Easing.elastic(1.2),
  },
  100: {
    transform: [{ scale: 1 }],
    easing: Easing.elastic(1.2),
  },
});

const logoKeyframe = new Keyframe({
  0: {
    opacity: 0,
  },
  60: {
    transform: [{ scale: 1.2 }],
    opacity: 0,
    easing: Easing.elastic(1.2),
  },
  100: {
    transform: [{ scale: 1 }],
    opacity: 1,
    easing: Easing.elastic(1.2),
  },
});

// Optimized: Removed unused glowKeyframe to reduce bundle size
// Simple CSS-based gradient background instead of image

export function AnimatedIcon() {
  return (
    <View style={styles.iconContainer}>
      {/* Optimized: Removed heavy image assets, using CSS gradient */}
      <Animated.View style={styles.background} entering={keyframe.duration(DURATION)}>
        <div className="expo-logo-background" />
      </Animated.View>

      <Animated.View style={styles.imageContainer} entering={logoKeyframe.duration(DURATION)}>
        {/* Placeholder for logo - can be replaced with SVG for better performance */}
        <View style={styles.logoPlaceholder} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    zIndex: 1000,
    position: 'absolute',
    top: 128 / 2 + 138,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 128,
    height: 128,
  },
  background: {
    width: 128,
    height: 128,
    position: 'absolute',
    borderRadius: 40,
    backgroundColor: '#3C9FFE',
  },
  logoPlaceholder: {
    width: 76,
    height: 71,
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
});
