export function capitalizeLetters(string) {
  if(string == undefined || string == null || string == ''){
    return '';
  }
  let letters = string.replace(/[^A-Za-z\u00C0-\u1FFF\u2800-\uFFFD]/g, '');
  let capitalized = letters.toUpperCase();
  return capitalized;
}