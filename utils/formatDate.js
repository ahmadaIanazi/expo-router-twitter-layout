export function formatDate(date) {
  try {
    let formattedDate;
    if (typeof date === 'string') {
      // Parse date string
      const parsedDate = new Date(date);
      if (isNaN(parsedDate)) {
        return ''
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
