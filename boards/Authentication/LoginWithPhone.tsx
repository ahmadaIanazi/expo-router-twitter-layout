import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import {
  Button,
  HelperText,
  Text,
  TextInput,
  useTheme,
} from 'react-native-paper'
import { XStack } from 'tamagui'
import onPressAuthentication from '../../events/onPressAuthentication'
import manageLocales from '../../managers/manageLocales'
import {
  BackButton,
  Background,
  Header,
  Logo,
  Paragraph,
  Snackbar,
  View,
} from '../../widgets'
import ActionButton from '../../widgets/components/Button'
import OTPpaper from '../../widgets/components/OTPpaper'

export default function LoginWithPhone() {
  const mark = '+'
  const [countryCode, setCountryCode] = useState('SA')
  const [countryCallingCode, setCountryCallingCode] = useState(mark + '966')
  const [phoneInput, setPhoneInput] = useState(countryCallingCode)

  const colors = useTheme()
  const { l } = manageLocales()

  const {
    phoneAuth,
    phone,
    setPhone,
    setOTP,
    showOTP,
    loading,
    error,
    isValidPhone,
    isValidOTP,
  } = onPressAuthentication()

  useEffect(() => {
    setPhone({ value: phoneInput, error: '' })
  }, [phoneInput])

  const handlePhoneInput = (text: string) => {
    setPhoneInput(text)
  }

  const handleCountryPick = (country: any) => {
    setCountryCode(country.cca2)
    setCountryCallingCode(mark + country.callingCode[0])
    setPhoneInput(mark + country.callingCode[0])
  }

  const FooterSection = () => {
    const [countdown, setCountdown] = useState(45)

    useEffect(() => {
      let interval

      if (countdown > 0) {
        interval = setInterval(() => {
          setCountdown(countdown - 1)
        }, 1000)
      }

      return () => clearInterval(interval)
    }, [countdown])

    return showOTP ? (
      <View s='row ac'>
        <Text>Didn't receive an SMS ?</Text>
        <Button
          mode='text'
          compact
          disabled={countdown > 0}
          // style={{ opacity: countdown > 0 ? 0.5 : 1 }}
          onPress={() => phoneAuth.handleSendOTP()}
        >
          {countdown > 0 ? `Resend (${countdown}s)` : 'Resend'}
        </Button>
      </View>
    ) : (
      <View s='row ac'>
        <Text>Different method ?</Text>
        <Button
          mode='text'
          compact
          onPress={() => router.replace('/(onboard)/Welcome')}
        >
          {l.back}
        </Button>
      </View>
    )
  }

  const determineBackgroundColor = () => {
    if (showOTP) {
      return isValidOTP ? colors.colors.primary : colors.colors.inverseOnSurface
    } else {
      return isValidPhone
        ? colors.colors.primary
        : colors.colors.inverseOnSurface
    }
  }

  return (
    <Background keyboard>
      <BackButton />
      <Logo />
      <Header>Enter your phone</Header>
      <Paragraph>
        You will receive a 4 digit code to verify your account
      </Paragraph>
      {showOTP ? (
        <OTPpaper mode='outlined' onChangeText={setOTP} />
      ) : (
        <XStack space alignItems='center'>
          <CountryPicker
            withFilter
            withAlphaFilter
            withCallingCode
            countryCode={countryCode}
            onSelect={handleCountryPick}
            theme={colors.dark ? DARK_THEME : undefined}
          />
          <TextInput
            label='Phone number'
            mode='outlined'
            returnKeyType='next'
            value={phoneInput}
            // placeholder={countryCallingCode}
            onChangeText={handlePhoneInput}
            error={!!phone.error}
            autoCapitalize='none'
            autoComplete='tel-national'
            textContentType='telephoneNumber'
            keyboardType='phone-pad'
            style={{ width: '80%' }}
            left={<TextInput.Icon icon='phone' />}
            outlineStyle={{ borderRadius: colors.roundness * 5 }}
          />
        </XStack>
      )}
      <HelperText type='error' visible={true}>
        {phone.error}
      </HelperText>
      <ActionButton
        loading={loading}
        mode='contained'
        disabled={showOTP ? !isValidOTP : !isValidPhone}
        style={{
          backgroundColor: determineBackgroundColor(),
        }}
        onPress={() =>
          showOTP ? phoneAuth.handleConfirmOTP() : phoneAuth.handleSendOTP()
        }
      >
        {showOTP ? 'Confirm' : 'Continue'}
      </ActionButton>
      <FooterSection />
      <Snackbar visible={error?.length > 0} autoDismiss snackbarText={error} />
    </Background>
  )
}
