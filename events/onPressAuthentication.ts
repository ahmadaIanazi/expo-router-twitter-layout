import { useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth'
import manageAuth from '../managers/authentication'
import { validateEmail } from '../utils/validations/validateEmail'
import { validatePassword } from '../utils/validations/validatePassword'
import { validatePhoneNumber } from '../utils/validations/validatePhone'
import { validateOTP } from '../utils/validations/validateOTP'
import { router } from 'expo-router'
import manageLocales from '../managers/locales'

export default function onPressAuthentication() {
  const { l } = manageLocales()
  const { emailAndPassword, phoneNumber, apple, google, anonymous } =
    manageAuth()

  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [secureText, setSecureText] = useState(true)

  const [phone, setPhone] = useState({ value: '', error: '' })
  const [OTP, setOTP] = useState({ value: '', error: '' })

  const [isValidPhone, setIsValidPhone] = useState(false)
  const [isValidOTP, setIsValidOTP] = useState(false)

  const [showOTP, setShowOTP] = useState(false)

  const [confirmations, setConfirmations] = useState(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const validate = validatePhoneNumber(phone.value)
    console.log('PHONE', phone.value, validate)
    if (validate) {
      setIsValidPhone(true)
    }else{
      setIsValidPhone(false)
    }
  }, [phone])

  useEffect(() => {
    const validate = validateOTP(OTP.value)
    console.log('OTP', OTP.value, validate)
    if (validate) {
      setIsValidOTP(true)
    }else{
      setIsValidOTP(false)
    }
  }, [OTP])

  const onPressAnonymousSignup = async () => {
    try {
      await anonymous.signup()
    } catch (error) {
      console.log('Error', error)
    }
  }

  const onPressEmailLogin = async () => {
    const emailError = validateEmail(email.value)
    const passwordError = validatePassword(password.value)
    setLoading(true)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setLoading(false)
      return
    }
    try {
      await emailAndPassword.signin(email.value, password.value)
    } catch (error: any) {
      console.log('ERROR:', error)
      setLoading(false)
      setError(error)
    }
  }

  const onPressEmailSignup = async () => {
    const emailError = validateEmail(email.value)
    const passwordError = validatePassword(password.value)
    setLoading(true)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setLoading(false)
      return
    }
    try {
      await emailAndPassword.signup(email.value, password.value)
    } catch (error: any) {
      console.log('ERROR:', error)
      setLoading(false)
      setError(error)
    }
  }

  const onPressEmailResetPassword = async () => {
    console.log('VALIDATE')
    const emailError = validateEmail(email.value)
    console.log('EMAIL ERROR', emailError)
    setLoading(true)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      setLoading(false)
      return
    }
    try {
      await emailAndPassword.reset(email.value)
    } catch (error: any) {
      console.log('ERROR:', error)
      setLoading(false)
      setError(error)
    }
  }

  const handleSendOTP = async () => {
    setLoading(true)
    if (!isValidPhone) {
      setPhone({ ...phone, error: phone.error })
      setLoading(false)
      return
    }
    try {
      const confirmation = await auth().signInWithPhoneNumber(phone.value)
      setConfirmations(confirmation)
      setShowOTP(true)
      setLoading(false)
    } catch (error: any) {
      console.log('ERROR:', error)
      setLoading(false)
      if (typeof error === 'object' && error !== null && 'code' in error) {
        switch (error.code) {
          case 'auth/invalid-phone-number':
            setError('Invalid Phone Number')
            break
          case 'auth/too-many-requests':
            setError(l.error_account_locked)
            break
          default:
            setError(l.error_occurred)
            break
        }
      } else {
        setError(l.error_occurred)
      }
    }
  }

  const handleConfirmOTP = async () => {
    setLoading(true)
    if (!isValidOTP) {
      setOTP({ ...OTP, error: OTP.error })
      setLoading(false)
      return
    }
    try {
      await phoneNumber.confirm(confirmations, OTP.value)
    } catch (error: any) {
      setLoading(false)
      console.log('OTP Error')
    }
  }

  const onPressApple = async () => {
    try {
      await apple.authenticate()
    } catch (error) {
      console.log('Error', error)
    }
  }

  const onPressGoogleAuthenticate = async () => {
    try {
      await google.authenticate()
    } catch (error) {
      console.log('Error', error)
    }
  }

  const onPressToggleSecureText = () => setSecureText(!secureText)

  const onPressContinueWithEmail = () => {
    router.push('/(auth)/LoginByPhone')
  }

  return {
    emailAuth: {
      login: onPressEmailLogin,
      signup: onPressEmailSignup,
      reset: onPressEmailResetPassword,
    },
    phoneAuth: {
      handleSendOTP,
      handleConfirmOTP,
    },
    appleAuth: {
      login: onPressApple,
    },
    googleAuth: {
      login: onPressGoogleAuthenticate,
    },
    anonymous: {
      login: onPressAnonymousSignup,
    },
    onPressToggleSecureText,
    onPressContinueWithEmail,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    setOTP,
    showOTP,
    secureText,
    setSecureText,
    loading,
    setLoading,
    error,
    setError,
    isValidPhone,
    isValidOTP,
  }
}
