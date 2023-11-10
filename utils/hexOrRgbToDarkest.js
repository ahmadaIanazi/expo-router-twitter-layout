export const hexOrRgbToDarkest = (color) => {
  let isHex = false;

  if(color == undefined || color == null || color == ''){
    return '';
  }
  // Check if the color is in HEX format
  if (color[0] === '#') {
    isHex = true;
    color = color.substring(1);
    if (color?.length === 3) {
      color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }
    color = [
      parseInt(color.substring(0, 2), 16),
      parseInt(color.substring(2, 4), 16),
      parseInt(color.substring(4, 6), 16),
    ];
  }

  // Check if the color is in RGB format
  if (!isHex && color.startsWith('rgb(') && color.endsWith(')')) {
    isHex = false;
    color = color
      .substring(4, color?.length - 1)
      .split(',')
      .map(Number);
  }

  // Calculate the darkest shade (reduce brightness)
  const darkestShade = color.map((channel) => Math.round(Math.max(channel - 100, 0)));

  // Convert RGB color to HEX format
  const darkestShadeHex =
    '#' + darkestShade.map((channel) => channel.toString(16).padStart(2, '0')).join('');

  return darkestShadeHex;
};
