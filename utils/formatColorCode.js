export function formatColorCode(colorCode) {
  // Check if the input is a valid hex code
  const hexRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  if (hexRegex.test(colorCode)) {
    if (colorCode.charAt(0) !== '#') {
      colorCode = '#' + colorCode;
    }
    return colorCode;
  }

  // Check if the input is a valid RGB format
  const rgbRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
  if (rgbRegex.test(colorCode)) {
    return colorCode;
  }

  // Neither a valid hex code nor RGB format
  return '#e2e2e2';
}
