import { router } from 'expo-router';
import { Divider, Text } from 'react-native-paper';

import SignByProviderButton from '../../components/SignByProviderButton';
import TextAndLink from '../../components/TextAndLink';
import onPressAuthentication from '../../events/onPressAuthentication';
import { Background, Button, Logo, Spacer, View } from '../../widgets';
import { Slider } from 'tamagui'

export default function Welcome(): React.JSX.Element {

  const { appleAuth, googleAuth, loading, error } = onPressAuthentication()

  return (
    <Background safe='all'>
      <Logo />
      <Spacer />
      <View s='row'>
        <Divider theme={{ colors: { outline: 'black' } }} />
        <Text>Sign up to enjoy SIMPLE</Text>
        <Divider />
      </View>
      <SignByProviderButton type='apple' loading={loading} onPress={() => appleAuth.login()} />
      <SignByProviderButton type='google' loading={loading} onPress={() => googleAuth.login()} />
      <SignByProviderButton type='phone' loading={loading} onPress={() => router.push('/(auth)/LoginByPhone')} />
      <Spacer />
      <View s='row'>
        <Divider theme={{ colors: { outlineVariant: 'black' } }} />
        <Text>or</Text>
        <Divider />
      </View>
      <Spacer />
      <SignByProviderButton type='email' loading={loading} onPress={() => router.push('/Register')} />
      <Explore  />
      <TextAndLink
        text='By continuing, you acknowledge that you have read and agreed to the'
        url='https://www.expo.dev'
        linkText='Terms of Use and Privacy Policy'
      />
    </Background>
  );
}

function Explore () {
  const { anonymous } = onPressAuthentication()

  return <Button mode='text' onPress={() => anonymous.login() }>
    Explore
  </Button>
}