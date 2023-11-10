function convertToLocalizedValue(value) {
  if (typeof value === 'string') {
    return value;
  } else if (typeof value === 'number') {
    return value;
  } else if (value instanceof Date) {
    return value.toISOString();
  }

  return JSON.stringify(value);
}