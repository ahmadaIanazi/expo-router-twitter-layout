export function getDateByPeriod(period) {
  const currentDate = new Date();

  switch (period) {
    case 'week':
      const weekStartDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() - currentDate.getDay()
      );
      return formatDate(weekStartDate);
    case 'month':
      const monthStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      return formatDate(monthStartDate);
    case 'year':
      const yearStartDate = new Date(currentDate.getFullYear(), 0, 1);
      return formatDate(yearStartDate);
    default:
      return '';
  }
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());

  return `${day}-${month}-${year}`;
}
