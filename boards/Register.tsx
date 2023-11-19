import manageAuth from '../managers/manageAuth'
import { validateEmail } from '../validations/validateEmail'
import { validateName } from '../validations/validateName'
import { validatePassword } from '../validations/validatePassword'

import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, TextInput, useTheme, HelperText } from 'react-native-paper';

import {
  View,
Div,
Tap,
  Appbar,
  BackButton,
  Background,
  Banner,
  Button as ActionButton,
  Header,
  Paragraph,
  ScrollView,
  SliderIndicator,
  Snackbar,
  Logo,
  Main,
  OnboardSlider,
  OnboardingButton,
} from '../widgets';

export default function Register() {

  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [secureText, setSecureText] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { handleSignup } = manageAuth();

  const onSignUpPressed = async () => {
    const emailError = validateEmail(email.value);
    const passwordError = validatePassword(password.value);
    setLoading(true);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setLoading(false);
      return;
    }
    try {
      await handleSignup(email.value, password.value);
    } catch (error: any) {
      console.log('ERROR:', error);
      setLoading(false);
      setError(error);
    }
  };

  const toggleSecureText = () => setSecureText(!secureText);

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
        right={<TextInput.Icon icon={secureText ? 'eye' : 'eye-off'} onPress={toggleSecureText} />}
        style={{ width: '100%' }}
      />
      <HelperText type='error' visible={true}>
        {password.error}
      </HelperText>
      <ActionButton loading={loading} mode='contained' onPress={onSignUpPressed}>
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
