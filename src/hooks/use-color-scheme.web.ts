import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme, ColorSchemeName } from 'react-native';

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 * Optimized: Returns properly typed value to avoid unnecessary type narrowing downstream
 */
export function useColorScheme(): NonNullable<ColorSchemeName> {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const colorScheme = useRNColorScheme();

  if (hasHydrated) {
    return colorScheme ?? 'light';
  }

  return 'light';
}
