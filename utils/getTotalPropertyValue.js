/**
 * Calculates the total value of a specific property in an array of objects based on given criteria.
 *
 * @param {Array} arr - The array of objects.
 * @param {string} property - The property to match against.
 * @param {string} valueProperty - The property from which to retrieve the value.
 * @param {number} value - The value to match against the property.
 * @returns {number} - The total value of the specified valueProperty for the objects that match the property and value.
 * @throws {Error} - If any of the input parameters are invalid.
 */

export function getTotalPropertyValue(arr, property, valueProperty, value) {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input. 'arr' must be an array.");
  }

  if (typeof property !== 'string') {
    throw new Error("Invalid input. 'property' must be a string.");
  }

  if (typeof valueProperty !== 'string') {
    throw new Error("Invalid input. 'valueProperty' must be a string.");
  }

  let totalValue = 0;

  for (let i = 0; i < arr?.length; i++) {
    if (arr[i] && arr[i].hasOwnProperty(property) && arr[i][property] === value) {
      const propertyValue = arr[i][valueProperty];
      if (typeof propertyValue === 'number') {
        totalValue += propertyValue;
      }
    }
  }

  return totalValue;
}
