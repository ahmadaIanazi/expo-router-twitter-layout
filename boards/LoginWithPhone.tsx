import { router } from 'expo-router';
import React, { useState } from 'react';
import { Button, HelperText, Text, TextInput, useTheme } from 'react-native-paper';
import { BackButton, Background, Header, Logo, Paragraph, Snackbar, View } from '../widgets';
import ActionButton from '../widgets/components/Button';
import OTPpaper from '../widgets/components/OTPpaper';
import onPressAuthentication from '../events/onPressAuthentication';
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import { XStack, YStack } from 'tamagui'
import { Input } from 'tamagui';


export default function LoginWithPhone() {

  const [countryCode, setCountryCode] = useState('SA')

  const colors = useTheme()
  const {
    phoneAuth,
    phone,
    setPhone,
    setOTP,
    showOTP,
    loading,
    error,
  } = onPressAuthentication()

  return (
    <Background keyboard>
      <BackButton />
      <Logo />
      <Header>Enter your phone</Header>
      <Paragraph>You will receive a 4 digit code to verify your account</Paragraph>
      {showOTP ? (
        <OTPpaper mode='outlined' onChangeText={setOTP} />
      ) : (
        <XStack space alignItems='center'>
          <CountryPicker
            withFilter
            withAlphaFilter
            withCallingCode
            countryCode={countryCode}
            onSelect={(country) => {
              setCountryCode(country.cca2)
              // setCountry(country)
            }}
            theme={(colors.dark ? DARK_THEME : undefined)}
          />
          <TextInput
            label='Phone number'
            mode='outlined'
            returnKeyType='next'
            value={phone.value}
            onChangeText={(text) => setPhone({ value: text, error: '' })}
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
        onPress={() => (showOTP ? phoneAuth.handleConfirmOTP() : phoneAuth.handleSendOTP())}
      >
        {showOTP ? 'Confirm' : 'Continue'}
      </ActionButton>
      <View s='row ac'>
        <Text>Different method ?</Text>
        <Button mode='text' compact onPress={() => router.back()}>
          Back
        </Button>
      </View>
      <Snackbar visible={error?.length > 0} autoDismiss snackbarText={error} />
    </Background>
  );
}
