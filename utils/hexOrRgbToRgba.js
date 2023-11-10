export const hexOrRgbToRgba = (color, alpha) => {
  let isHex = false;

  // Check if the color is in HEX format
  if (color[0] === '#') {
    isHex = true;
    color = color.substring(1);
  }
  
  if (color === 'white') {
    return `rgba(255, 255, 255, ${alpha})`;
  }

  if (color === 'black') {
    return `rgba(0, 0, 0, ${alpha})`;
  }

  // Convert HEX color to RGB format
  if (isHex) {
    if (color?.length === 3) {
      color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }
    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // Check if the color is already in RGB format
  if (color.startsWith('rgb(') && color.endsWith(')')) {
    const values = color
      .substring(4, color?.length - 1)
      .split(',')
      .map(Number);
    if (values?.length === 3 && values.every((value) => value >= 0 && value <= 255)) {
      return `rgba(${values[0]}, ${values[1]}, ${values[2]}, ${alpha})`;
    }
  }

  // If the color format is unknown or invalid, return null or throw an error
  return `rgba(100, 100, 100, ${alpha})`; // or throw new Error('Invalid color format');
};
