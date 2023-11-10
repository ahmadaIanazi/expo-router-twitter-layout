export function formatDateWithTime(date) {
  try {
    let formattedDate;
    if (typeof date === 'string') {
      // Parse date string
      const parsedDate = new Date(date);
      if (isNaN(parsedDate)) {
        return '';
        throw new Error('Invalid date format');
      }
      // Format the date with time
      formattedDate = parsedDate.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
    } else if (date instanceof Date) {
      // Handle Firestore timestamp
      // Format the date with time
      formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
    } else if (date && typeof date.toDate === 'function') {
      // Handle Firestore Timestamp object
      // Format the date with time
      formattedDate = date.toDate().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
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




