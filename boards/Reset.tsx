

import React, { useState } from 'react';
import { HelperText, Paragraph, TextInput } from 'react-native-paper';
// import TextInput from '@widgets/TextInput';

import { validateEmail } from '../validations/validateEmail'

import manageAuth from '../managers/manageAuth'

import {
  View,
  Div,
  Text,
  Tap,
  Appbar,
  BackButton,
  Background,
  Banner,
  Button as ActionButton,
  Header,
  ScrollView,
  SliderIndicator,
  Snackbar,
  Logo,
  Main,
  OnboardSlider,
  OnboardingButton,
} from '../widgets';

export default function Reset(): React.JSX.Element {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const { handleResetPassword } = manageAuth();

  const onResetPassword = async () => {
    console.log('VALIDATE')
    const emailError = validateEmail(email.value);
    console.log('EMAIL ERROR', emailError)
    setLoading(true);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      setLoading(false);
      return;
    }
    try {
      await handleResetPassword(email.value);
    } catch (error: any) {
      console.log('ERROR:', error);
      setLoading(false);
      setError(error);
    }
  };

  return (
    <Background keyboard>
      <BackButton />
      <Logo />
      <Header>Reset your password.</Header>
      <TextInput
        label='Email'
        mode='outlined'
        returnKeyType='next'
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        autoCapitalize='none'
        autoComplete='email'
        textContentType='emailAddress'
        keyboardType='email-address'
        style={{ width: '100%' }}
      />
      <HelperText type='error' visible={true}>
        {email.error}
      </HelperText>
      <ActionButton loading={loading} mode='contained' onPress={onResetPassword}>
        {loading ? 'Sending ..' : 'Continue'}
      </ActionButton>
      <Paragraph>You will receive an email with the reset link.</Paragraph>
      <Snackbar visible={error?.length > 0} autoDismiss snackbarText={error} />
    </Background>
  );
}