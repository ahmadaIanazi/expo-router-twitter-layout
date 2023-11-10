/**
 * 
 * @param {Message} inputString 
 * @param {%@} replacementString 
 * @returns 
 */
export function replaceSymbolWithinString(inputString, replacementString, symbol) {
  // Check if inputString and replacementString are both non-empty strings
  if (
    typeof inputString !== 'string' ||
    typeof replacementString !== 'string' ||
    inputString === '' ||
    replacementString === ''
  ) {
    return '';
    throw new Error(
      'Invalid input. Both inputString and replacementString should be non-empty strings.'
    );
  }

  return inputString.replace(/%@/g, replacementString);
}
