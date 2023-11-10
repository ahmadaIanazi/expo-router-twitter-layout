// Function to create a deep copy of an array or object
export const deepCopy = (value) => {
  if (Array.isArray(value)) {
    return value.map(deepCopy); // Recursively copy each element
  } else if (typeof value === 'object' && value !== null) {
    const copy = {};
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        copy[key] = deepCopy(value[key]); // Recursively copy each property
      }
    }
    return copy;
  } else {
    return value; // Return primitive values as is
  }
};
