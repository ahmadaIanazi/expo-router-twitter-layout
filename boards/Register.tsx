
import { router } from 'expo-router';
import React from 'react';
import { Button, HelperText, Text, TextInput } from 'react-native-paper';

import onPressAuthentication from '../events/onPressAuthentication';
import {
  Button as ActionButton,
  BackButton,
  Background,
  Logo,
  Snackbar,
  View
} from '../widgets';

export default function Register() {
  const {
    emailAuth,
    email,
    setEmail,
    password,
    setPassword,
    secureText,
    loading,
    error,
    onPressToggleSecureText
  } = onPressAuthentication()

  return (
    <Background keyboard>
      <BackButton />
      <Logo />
      <Text variant='headlineLarge'>Register</Text>
      <View s='row ac'>
        <Text>Different method ?</Text>
        <Button mode='text' compact onPress={() => router.replace('/LoginByPhone')}>
          Use Phone number
        </Button>
      </View>
      <TextInput
        label='Email'
        mode='outlined'
        style={{ width: '100%' }}
        returnKeyType='next'
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        autoCapitalize='none'
        textContentType='emailAddress'
        keyboardType='email-address'
      />
      <HelperText type='error' visible={true}>
        {email.error}
      </HelperText>
      <TextInput
        label='Password'
        mode='outlined'
        returnKeyType='done'
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        secureTextEntry={secureText}
        right={<TextInput.Icon icon={secureText ? 'eye' : 'eye-off'} onPress={() => onPressToggleSecureText()} />}
        style={{ width: '100%' }}
      />
      <HelperText type='error' visible={true}>
        {password.error}
      </HelperText>
      <ActionButton loading={loading} mode='contained' onPress={() => emailAuth.signup()}>
        Next
      </ActionButton>
      <View s='row c'>
        <Text>I already have an account. </Text>
        <Button mode='text' onPress={() => router.push('/Login')}>
          Log in
        </Button>
      </View>
      <Snackbar visible={error?.length > 0} autoDismiss snackbarText={error} />
    </Background>
  );
}
