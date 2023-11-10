/* MOBILE */
export const mobile_min_width = 360;
export const mobile_max_width = 414;
export const mobile_min_height = 640;
export const mobile_max_height = 896;

/* TABLET */
export const tablet_min_width = 601; // Corrected
export const tablet_max_width = 1000; // Corrected
export const tablet_min_height = 601; // You may need to adjust this based on your requirements
export const tablet_max_height = 1000; // You may need to adjust this based on your requirements

/* DESKTOP */
export const desktop_min_width = 1024;
export const desktop_max_width = 1920;
export const desktop_min_height = 768;
export const desktop_max_height = 1080;

export function detectDeviceOrientation(width: number, height: number) {
  if (
    width >= desktop_min_width &&
    width <= desktop_max_width &&
    height >= desktop_min_height &&
    height <= desktop_max_height
  ) {
    return 'Desktop';
  } else if (width >= tablet_min_width && width <= tablet_max_width) {
    return 'Tablet';
  } else if (
    width >= mobile_min_width &&
    width <= mobile_max_width &&
    height >= mobile_min_height &&
    height <= mobile_max_height
  ) {
    return 'Mobile';
  } else {
    return 'Unknown';
  }
}
