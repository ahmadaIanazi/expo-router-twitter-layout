import { useContext, useEffect, useState } from 'react';
import LOCALIZATION from '@context/locales';

export function useEmailValidation(email){
  const l = useContext(LOCALIZATION)
  const [errorValidate, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(validateEmail(email));
  }, [email]);

  function validateEmail(email) {
    if (email !== undefined){

    // Check if input is not empty
    if (email?.length === 0) {
      setError('');
      return false;
    }

    // Check if input is a valid email
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      setError(l.email_not_valid);
      return false;
    }

    // If all checks pass, reset error and return true
    setError('');
    return true;
  }}

  return { errorValidate, isValid };
}
