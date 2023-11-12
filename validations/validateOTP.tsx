// export const validateOTP = (otp: string): string => {
//   const re = /^\d{6}$/;
//   if (!otp) return 'Please fill in this field.';
//   if (!re.test(otp)) return 'Please enter a valid 6-digit OTP.';
//   return '';
// };
export const validateOTP = (otp: string): boolean => {
  const re = /^\d{6}$/;
  if (!otp) return false
  if (!re.test(otp)) return false
  return true
};
