import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, useTheme, Text, TextInput, HelperText } from 'react-native-paper';
import { BackButton, Background, Header, Logo, Paragraph, Snackbar, View } from '../widgets';
import { router } from 'expo-router';
import ActionButton from '../widgets/components/Button';
import executeAuth from '../execute/executeAuth';
import validatePhone, { validatePhoneNumber } from '../validations/validatePhone';
import auth from '@react-native-firebase/auth';
import OTPpaper from '../widgets/components/OTPpaper';
import usePhoneNumberValidation from '../utils/validate/usePhoneValidation'
import { validateOTP } from '../validations/validateOTP';

export default function LoginWithPhone() {
  const [phone, setPhone] = useState({ value: '', error: '' });
  const [OTP, setOTP] = useState({ value: '', error: '' });
  const [isValidPhone, setIsValidPhone] = useState(false)
  const [isValidOTP, setIsValidOTP] = useState(false)

  const [showOTP, setShowOTP] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { executeSignByPhone_confirmOTP_andSign } = executeAuth();

  const [modalVisible, setModalVisible] = useState(false);

  const [confirmations, setConfirmations] = useState(null)

  useEffect(()=>{
    const validate = validatePhoneNumber(phone.value);
    if (validate) {
      setIsValidPhone(true)
    }
  },[phone])

  useEffect(()=>{
    const validate = validateOTP(OTP.value);
    if (validate) {
      setIsValidOTP(true)
    }
  },[OTP])

  const handleSendOTP = async () => {
    setLoading(true);
    if (!isValidPhone) {
      setPhone({ ...phone, error: phone.error });
      setLoading(false);
      return;
    }
    try {
      const confirmation = await auth().signInWithPhoneNumber(phone.value);
      setConfirmations(confirmation);
      setShowOTP(true);
      setLoading(false);
    } catch (error: any) {
      console.log('ERROR:', error);
      setLoading(false);
      setError(error);
    }
  };

  const handleConfirmOTP = async () => {
    setLoading(true);
    if (!isValidOTP) {
      setOTP({ ...OTP, error: isValidOTP });
      setLoading(false);
      return;
    }
    try {
      await executeSignByPhone_confirmOTP_andSign(confirmations, OTP.value);
    } catch (error: any) {
      setLoading(false);
      console.log('OTP Error');
    }
  };

  console.log(
    'showOTP? isValidOTP : isValidPhone',
    showOTP ? isValidOTP : isValidPhone,
    '||',
    showOTP,
    isValidOTP,
    isValidPhone
  );
  return (
    <Background keyboard>
      <BackButton />
      <Logo />
      <Header>Enter your phone</Header>
      <Paragraph>You will receive a 4 digit code to verify your account</Paragraph>
      {showOTP ? (
        <OTPpaper mode='outlined' onChangeText={setOTP} />
      ) : (
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
          style={{ width: '100%' }}
        />
      )}
      <HelperText type='error' visible={true}>
        {phone.error}
      </HelperText>
      <ActionButton
        // disabled={showOTP? isValidOTP : isValidPhone}
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
