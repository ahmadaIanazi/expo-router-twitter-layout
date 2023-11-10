import { useState, useEffect } from 'react';

const usePushNotificationValidator = (text) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Regular expression pattern for validating the push notification text
    const validationPattern = /^[A-Za-z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\p{L}\p{M}\p{N}]+$/u;

    const validateText = () => {
      if (text.match(validationPattern)) {
        setIsValid(true);
      } else {
        //** FIX THIS TO == FALSE */
        setIsValid(true);
      }
    };

    validateText();

    return () => {
      // Cleanup function to reset the validation state when the component unmounts
      setIsValid(false);
    };
  }, [text]);

  return isValid;
};

export default usePushNotificationValidator;
