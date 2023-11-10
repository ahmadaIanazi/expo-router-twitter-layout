export function capitalizeLetters(string) {
  if (string == undefined || string == null || string == '') {
    return '';
  }
  let letters = string.replace(/[^A-Za-z\u00C0-\u1FFF\u2800-\uFFFD]/g, '');
  let capitalized = letters.toUpperCase();
  return capitalized;
}

export function formatDate(date) {
  try {
    let formattedDate;
    if (typeof date === 'string') {
      // Parse date string
      const parsedDate = new Date(date);
      if (isNaN(parsedDate)) {
        return '';
        throw new Error('Invalid date format');
      }
      formattedDate = parsedDate.toISOString().split('T')[0];
    } else if (date instanceof Date) {
      // Handle Firestore timestamp
      formattedDate = date.toDate().toISOString().split('T')[0];
    } else if (date && typeof date.toDate === 'function') {
      // Handle Firestore Timestamp object
      formattedDate = date.toDate().toISOString().split('T')[0];
    } else {
      return '';
      throw new Error('Invalid input');
    }
    return formattedDate;
  } catch (error) {
    return '';
    console.error('Error formatting date:', error);
    return null;
  }
}

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

