

import React from 'react';
import { HelperText, Paragraph, TextInput } from 'react-native-paper';

import onPressAuthentication from '../events/onPressAuthentication';
import {
  Button as ActionButton,
  BackButton,
  Background,
  Header,
  Logo,
  Snackbar
} from '../widgets';

export default function Reset(): React.JSX.Element {
  const {
    emailAuth,
    email,
    setEmail,
    loading,
    error,
  } = onPressAuthentication()

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
      <ActionButton loading={loading} mode='contained' onPress={() => emailAuth.reset()}>
        {loading ? 'Sending ..' : 'Continue'}
      </ActionButton>
      <Paragraph>You will receive an email with the reset link.</Paragraph>
      <Snackbar visible={error?.length > 0} autoDismiss snackbarText={error} />
    </Background>
  );
}