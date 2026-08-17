/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ColorSchemeName } from 'react-native';

export function useTheme() {
  const scheme: NonNullable<ColorSchemeName> = useColorScheme() ?? 'light';
  // Type-safe: useColorScheme now returns properly narrowed type
  
  return Colors[scheme];
}
