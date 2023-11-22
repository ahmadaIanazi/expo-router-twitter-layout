import { router } from 'expo-router';
import React, { useState } from 'react';
import { Button, HelperText, Text, TextInput, useTheme } from 'react-native-paper';
import { BackButton, Background, Header, Logo, Paragraph, Snackbar, View } from '../widgets';
import ActionButton from '../widgets/components/Button';
import OTPpaper from '../widgets/components/OTPpaper';
import onPressAuthentication from '../events/onPressAuthentication';
import CountryPickerButton from '../components/CountryPickerButton';


export default function LoginWithPhone() {

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
        <View s='w-100% row c'>
          <CountryPickerButton />
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
        </View>
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
