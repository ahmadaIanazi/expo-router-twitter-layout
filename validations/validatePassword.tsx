export function validatePassword(password) {
  if (!password) return 'Please fill in this field.';
  if (password.length < 6) return 'Password should contain at least 6 characters.';
  return '';
}
