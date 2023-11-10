import { useState } from 'react';
import { PhoneNumberUtil, PhoneNumberType } from 'google-libphonenumber';

const usePhoneNumberValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumber, setIsValid] = useState(false);
  const phoneUtil = PhoneNumberUtil.getInstance();

  const validatePhoneNumber = (number) => {
    try {
      const parsedNumber = phoneUtil.parse(number);
      const isValidNumber = phoneUtil.isValidNumber(parsedNumber);
      const numberType = phoneUtil.getNumberType(parsedNumber);

      if (isValidNumber && numberType === PhoneNumberType.MOBILE) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } catch (error) {
      setIsValid(false);
    }
  };

  const handlePhoneNumberChange = (number) => {
    setPhoneNumber(number);
    validatePhoneNumber(number);
  };

  const validateNumber = (number) => {
    const parsedNumber = phoneUtil.parse(number);
    const isValidNumber = phoneUtil.isValidNumber(parsedNumber);
    const numberType = phoneUtil.getNumberType(parsedNumber);

    return isValidNumber && numberType === PhoneNumberType.MOBILE;
  };

  return { phoneNumber, isPhoneNumber, handlePhoneNumberChange, validateNumber };
};

export default usePhoneNumberValidation;
