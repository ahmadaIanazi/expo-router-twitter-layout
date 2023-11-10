/**
 * Finds an object in an array of objects based on a specified property name and search value.
 *
 * @param {Array} array - The array of objects to search through.
 * @param {string} propertyName - The name of the property to compare against.
 * @param {*} searchValue - The value to search for within the specified property.
 * @returns {Object|null} - The matched object if found, otherwise null.
 * @throws {Error} - If invalid input is provided.
 */
export const findObjectByPropertyValue = (array, propertyName, searchValue) => {
  if (!Array.isArray(array) || array.length === 0) {
    throw new Error('Invalid input. The array should be a non-empty array.');
  }

  if (typeof propertyName !== 'string' || propertyName === '') {
    throw new Error('Invalid input. The propertyName should be a non-empty string.');
  }

  const matchedItem = array.find((item) => item[propertyName] === searchValue);
  return matchedItem || null;
};
