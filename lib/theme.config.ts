export const Theme = {
  animation: { scale: 1 },
  props: {
    radius: 30,
    roundness: 3,
    padding: 20,
    margin: 20,
    alignment: 'center',
  },
  colors: {
    light: {
      background: 'rgba(242, 242, 247, 1)', // System Background
      onBackground: 'rgba(0, 0, 0, 0.87)', // Label

      backdrop: 'rgba(242, 242, 247, 0.5)',

      surface: 'rgba(255, 255, 255, 1)', // Secondary System Background
      onSurface: 'rgba(0, 0, 0, 0.87)', // Label
      onSurfaceDisabled: 'rgba(0, 0, 0, 0.38)', // Disabled Label
      onSurfaceVariant: 'rgba(60, 60, 67, 0.6)', // Secondary Label

      inverseSurface: 'rgba(28, 28, 30, 1)', // Inverse System Background
      inverseOnSurface: 'rgba(255, 255, 255, 0.87)', // Inverse Label

      primary: 'rgba(0, 122, 255, 1)', // System Blue
      onPrimary: 'rgba(255, 255, 255, 1)', // On Primary

      primaryContainer: 'rgba(10, 132, 255, 1)', // Lighter System Blue
      onPrimaryContainer: 'rgba(255, 255, 255, 1)',

      inversePrimary: 'rgba(88, 86, 214, 1)', // System Indigo

      secondary: 'rgba(255, 59, 48, 1)', // System Red
      onSecondary: 'rgba(255, 255, 255, 1)',

      secondaryContainer: 'rgba(255, 69, 58, 1)', // Lighter System Red
      onSecondaryContainer: 'rgba(255, 255, 255, 1)',

      tertiary: 'rgba(52, 199, 89, 1)', // System Green
      onTertiary: 'rgba(255, 255, 255, 1)',

      tertiaryContainer: 'rgba(48, 209, 88, 1)', // Lighter System Green
      onTertiaryContainer: 'rgba(255, 255, 255, 1)',

      error: 'rgba(255, 69, 58, 1)', // System Red
      onError: 'rgba(255, 255, 255, 1)',
      errorContainer: 'rgba(255, 214, 210, 1)', // Light Red
      onErrorContainer: 'rgba(255, 69, 58, 1)',

      shadow: 'rgba(0, 0, 0, 0.3)',

      outline: 'rgba(199, 199, 204, 1)', // System Gray
      outlineVariant: 'rgba(209, 209, 214, 1)', // Lighter System Gray

      scrim: 'rgba(0, 0, 0, 0.5)',

      elevation: {
        level0: 'transparent',
        level1: 'rgba(242, 242, 247, 1)',
        level2: 'rgba(229, 229, 234, 1)',
        level3: 'rgba(216, 216, 220, 1)',
        level4: 'rgba(203, 203, 207, 1)',
        level5: 'rgba(190, 190, 195, 1)',
      },
    },
    dark: {
      background: 'rgba(28, 28, 30, 1)', // System Background (Dark)
      onBackground: 'rgba(255, 255, 255, 0.87)', // Label (Dark)

      backdrop: 'rgba(28, 28, 30, 0.5)',

      surface: 'rgba(44, 44, 46, 1)', // Secondary System Background (Dark)
      onSurface: 'rgba(255, 255, 255, 0.87)', // Label (Dark)
      onSurfaceDisabled: 'rgba(255, 255, 255, 0.38)', // Disabled Label (Dark)
      onSurfaceVariant: 'rgba(235, 235, 245, 0.6)', // Secondary Label (Dark)

      inverseSurface: 'rgba(242, 242, 247, 1)', // Inverse System Background (Dark)
      inverseOnSurface: 'rgba(0, 0, 0, 0.87)', // Inverse Label (Dark)

      primary: 'rgba(10, 132, 255, 1)', // System Blue (Dark)
      onPrimary: 'rgba(0, 0, 0, 1)',

      primaryContainer: 'rgba(100, 210, 255, 1)', // Lighter System Blue (Dark)
      onPrimaryContainer: 'rgba(0, 0, 0, 1)',

      inversePrimary: 'rgba(94, 92, 230, 1)', // System Indigo (Dark)

      secondary: 'rgba(255, 69, 58, 1)', // System Red (Dark)
      onSecondary: 'rgba(0, 0, 0, 1)',

      secondaryContainer: 'rgba(255, 159, 148, 1)', // Lighter System Red (Dark)
      onSecondaryContainer: 'rgba(0, 0, 0, 1)',

      tertiary: 'rgba(48, 209, 88, 1)', // System Green (Dark)
      onTertiary: 'rgba(0, 0, 0, 1)',

      tertiaryContainer: 'rgba(102, 212, 167, 1)', // Lighter System Green (Dark)
      onTertiaryContainer: 'rgba(0, 0, 0, 1)',

      error: 'rgba(255, 69, 58, 1)', // System Red (Dark)
      onError: 'rgba(0, 0, 0, 1)',
      errorContainer: 'rgba(255, 214, 210, 1)', // Light Red (Dark)
      onErrorContainer: 'rgba(255, 69, 58, 1)',

      shadow: 'rgba(0, 0, 0, 0.6)',

      outline: 'rgba(99, 99, 102, 1)', // System Gray (Dark)
      outlineVariant: 'rgba(84, 84, 88, 1)', // Lighter System Gray (Dark)

      scrim: 'rgba(0, 0, 0, 0.7)',

      elevation: {
        level0: 'transparent',
        level1: 'rgba(44, 44, 46, 1)',
        level2: 'rgba(58, 58, 60, 1)',
        level3: 'rgba(72, 72, 74, 1)',
        level4: 'rgba(86, 86, 88, 1)',
        level5: 'rgba(100, 100, 102, 1)',
      },
    },
  },
}
