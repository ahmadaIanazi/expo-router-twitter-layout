export const Theme = {
  animation: { scale: 1 },
  props: {
    radius: 30,
    roundness: 3,
    padding: 20,
    margin: 20,
    alignment: 'center',
  },
  // === Colors === //
  colors: {
    light: {
      // 1. Background Colors
      background: 'rgba(255, 255, 255, 1)',
      onBackground: 'rgba(28, 27, 31, 1)',

      // 2. Backdrop
      backdrop: 'rgba(255, 255, 255, 0.5)',

      // 3. Surface
      surface: 'rgba(255, 232, 130, 1)',
      onSurface: 'rgba(28, 27, 31, 1)',
      onSurfaceDisabled: 'rgba(255, 87, 51, 0.5)',
      onSurfaceVariant: 'rgba(73, 69, 79, 1)',

      inverseSurface: 'rgba(49, 48, 51, 1)',
      inverseOnSurface: 'rgba(244, 239, 244, 1)',

      // 4. Primary Colors
      primary: 'rgba(255, 87, 51, 1)',
      onPrimary: 'rgba(255, 255, 255, 1)',

      primaryContainer: 'rgba(255, 214, 193, 1)',
      onPrimaryContainer: 'rgba(0, 0, 0, 1)',

      inversePrimary: 'rgba(208, 188, 255, 1)',

      // 5. Secondary Colors
      secondary: 'rgba(128, 186, 255, 1)',
      onSecondary: 'rgba(255, 255, 255, 1)',

      secondaryContainer: 'rgba(204, 218, 255, 1)',
      onSecondaryContainer: 'rgba(0, 34, 102, 1)',

      // 6. Tertiary Colors
      tertiary: 'rgba(255, 178, 102, 1)',
      onTertiary: 'rgba(255, 255, 255, 1)',

      tertiaryContainer: 'rgba(255, 238, 194, 1)',
      onTertiaryContainer: 'rgba(80, 0, 0, 1)',

      // 7. Error Colors
      error: 'rgba(255, 51, 51, 1)',
      onError: 'rgba(255, 255, 255, 1)',
      errorContainer: 'rgba(255, 204, 204, 1)',
      onErrorContainer: 'rgba(102, 0, 0, 1)',

      // 8. Shadows
      shadow: 'rgba(0, 0, 0, 1)',

      // 9. Outlines
      outline: 'rgba(121, 116, 126, 1)',
      outlineVariant: 'rgba(202, 196, 208, 1)',

      // 10. Scrims
      scrim: 'rgba(0, 0, 0, 1)',

      // 11. Elevation Colors
      elevation: {
        level0: 'transparent',
        level1: 'rgba(255, 255, 255, 1)',
        level2: 'rgb(255, 205, 64)',
        level3: 'rgb(255, 195, 41)',
        level4: 'rgb(255, 184, 19)',
        level5: 'rgb(255, 174, 0)',
      },
    },
    dark: {
      // 1. Background Colors
      background: 'rgba(28, 27, 31, 1)',
      onBackground: 'rgba(255, 255, 255, 1)',

      // 2. Backdrop
      backdrop: 'rgba(0, 0, 0, 0.5)',

      // 3. Surface
      surface: 'rgba(49, 48, 51, 1)',
      onSurface: 'rgba(255, 255, 255, 1)',
      onSurfaceDisabled: 'rgba(255, 87, 51, 0.8)',
      onSurfaceVariant: 'rgba(202, 196, 208, 1)',

      // 4. Primary Colors
      primary: 'rgba(255, 87, 51, 1)',
      onPrimary: 'rgba(0, 0, 0, 1)',

      primaryContainer: 'rgba(255, 214, 193, 1)',
      onPrimaryContainer: 'rgba(0, 0, 0, 1)',

      inversePrimary: 'rgba(208, 188, 255, 1)',

      // 5. Secondary Colors
      secondary: 'rgba(128, 186, 255, 1)',
      onSecondary: 'rgba(255, 255, 255, 1)',

      secondaryContainer: 'rgba(204, 218, 255, 1)',
      onSecondaryContainer: 'rgba(0, 34, 102, 1)',

      // 6. Tertiary Colors
      tertiary: 'rgba(255, 178, 102, 1)',
      onTertiary: 'rgba(255, 255, 255, 1)',

      tertiaryContainer: 'rgba(255, 238, 194, 1)',
      onTertiaryContainer: 'rgba(102, 0, 0, 1)',

      // 7. Error Colors
      error: 'rgba(255, 51, 51, 1)',
      onError: 'rgba(255, 255, 255, 1)',
      errorContainer: 'rgba(255, 204, 204, 1)',
      onErrorContainer: 'rgba(102, 0, 0, 1)',

      // 8. Shadows
      shadow: 'rgba(0, 0, 0, 1)',

      // 9. Outlines
      outline: 'rgba(121, 116, 126, 1)',
      outlineVariant: 'rgba(202, 196, 208, 1)',

      // 10. Scrims
      scrim: 'rgba(0, 0, 0, 1)',

      // 11. Elevation Colors
      elevation: {
        level0: 'transparent',
        level1: 'rgba(255, 255, 255, 1)',
        level2: 'rgb(255, 205, 64)',
        level3: 'rgb(255, 195, 41)',
        level4: 'rgb(255, 184, 19)',
        level5: 'rgb(255, 174, 0)',
      },
    },
  },
}
