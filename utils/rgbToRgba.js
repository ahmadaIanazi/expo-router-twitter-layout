export function rgbToRgba(rgb, alpha) {
  const rgba = rgb.match(/\d+/g);

  if (!rgba || rgba?.length < 3) {
    return 'white';
    throw new Error('Invalid RGB color format');
  }

  const r = parseInt(rgba[0]);
  const g = parseInt(rgba[1]);
  const b = parseInt(rgba[2]);

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return 'white'
    throw new Error('Invalid RGB component');
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}