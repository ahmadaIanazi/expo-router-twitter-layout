import React, { useContext } from 'react';
import { Button, HelperText, Text, TextInput, useTheme } from 'react-native-paper';
import { Button as ActionButton, Background, Header, Logo } from '../widgets';
import { router } from 'expo-router';
import onPressAuthentication from '../events/onPressAuthentication';
import { BackButton, Snackbar, View } from '../widgets';
import Localization from '../translations';

export default function Login(): React.JSX.Element {
  const colors = useTheme();
  const l = useContext(Localization)
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
      <Header>{l.login}</Header>
      <View s='row ac'>
        <Text>Different method ?</Text>
        <Button mode='text' compact onPress={() => router.replace('/LoginByPhone')}>
          Use Phone number
        </Button>
      </View>
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
        outlineStyle={{ borderRadius: colors.roundness * colors.roundness }}
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
        outlineStyle={{ borderRadius: colors.roundness * colors.roundness }}

      />
      <HelperText type='error' visible={true}>
        {password.error}
      </HelperText>
      <Button
        style={{ alignSelf: 'flex-end' }}
        mode='text'
        compact
        textColor={colors.colors.tertiary}
        onPress={() => router.push('/Reset')}
      >
        Forgot your password ?
      </Button>
      <ActionButton loading={loading} mode='contained' onPress={() => emailAuth.login()}>
        Log in
      </ActionButton>
      <View s='row ac'>
        <Text>You do not have an account yet ?</Text>
        <Button mode='text' compact onPress={() => router.replace('/Register')}>
          Create
        </Button>
      </View>
      <Snackbar visible={error?.length > 0} autoDismiss snackbarText={error} />
    </Background>
  );
}
