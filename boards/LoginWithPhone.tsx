import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, useTheme, Text, TextInput, HelperText } from 'react-native-paper';
import { BackButton, Background, Header, Logo, Paragraph, Snackbar, View } from '../widgets';
import { router } from 'expo-router';
import ActionButton from '../widgets/components/Button';
import executeAuth from '../execute/executeAuth';
import validatePhone from '../validations/validatePhone';

const INPUT_OFFSET = 50;

export default function LoginWithPhone() {
  const [phone, setPhone] = useState({ value: '', error: '' });
  const [OTP, setOTP] = useState({ value: '', error: '' });

  const [showOTP, setShowOTP] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { executeSignByPhone_SendOTP, executeSignByPhone_confirmOTP_andSign } = executeAuth();

  const [verificationId, setVerificationId] = useState(null);

  const recaptcha = useRef(null);

  const handleSendOTP = async () => {
    // const validate = validatePhoneNumber(phone.value);

    setLoading(true);
    // if (!validate) {
    //   setPhone({ ...phone, error: phone.error });
    //   setLoading(false);
    //   return;
    // }
    try {
      console.log('PHONE NUMBER:', phone.value)
      const confirmationResult = await executeSignByPhone_SendOTP('+966565969555');
      setShowOTP(true);
      setVerificationId(confirmationResult);
      setLoading(false);
    } catch (error: any) {
      console.log('ERROR:', error);
      setLoading(false);
      setError(error);
    }
  };

  const handleConfirmOTP = async () => {
    // const validate = validateOTP(OTP.value);

    setLoading(true);
    // if (!validate) {
    //   setOTP({ ...OTP, error: OTP.error });
    //   setLoading(false);
    //   return;
    // }
    try {
      await executeSignByPhone_confirmOTP_andSign(verificationId, OTP.value);
    } catch (error: any) {
      setLoading(false);
      console.log('OTP Error');
    }
  };

  return (
    <Background keyboard>
      <BackButton />
      <Logo />
      <Header>Enter your phone</Header>
      <Paragraph>You will receive a 4 digit code to verify your account</Paragraph>
      {showOTP ? (
        <TextInput
          label='OTP'
          mode='outlined'
          returnKeyType='next'
          value={phone.value}
          onChangeText={(text) => setPhone({ value: text, error: '' })}
          error={!!phone.error}
          autoCapitalize='none'
          autoComplete='sms-otp'
          textContentType='oneTimeCode'
          keyboardType='number-pad'
          style={{ width: '100%' }}
        />
      ) : (
        <TextInput
          label='Phone number'
          mode='outlined'
          returnKeyType='next'
          value={OTP.value}
          onChangeText={(text) => setOTP({ value: text, error: '' })}
          error={!!OTP.error}
          autoCapitalize='none'
          autoComplete='tel-national'
          textContentType='telephoneNumber'
          keyboardType='phone-pad'
          style={{ width: '100%' }}
        />
      )}
      <HelperText type='error' visible={true}>
        {phone.error}
      </HelperText>
      <ActionButton
        loading={loading}
        mode='contained'
        onPress={() => (showOTP ? handleConfirmOTP() : handleSendOTP())}
      >
        {showOTP ? 'Confirm' : 'Continue'}
      </ActionButton>
      <View s='row ac'>
        <Text>Different method ?</Text>
        <Button mode='text' compact onPress={() => router.back()}>
          Use Email
        </Button>
      </View>
      <Snackbar visible={error?.length > 0} autoDismiss snackbarText={error} />
    </Background>
  );
}
