import { useRouter } from 'expo-router';
import { Divider, Text } from 'react-native-paper';

import { Background, Button, Logo, Paragraph, Spacer, View } from '../widgets';

export default function Welcome(): React.JSX.Element {
  const router = useRouter();

  return (
    <Background>
      <Logo />
      <Spacer />
      <View s='row'>
        <Divider theme={{ colors: { outline: 'black' } }} />
        <Text>Sign up to enjoy SIMPLE</Text>
        <Divider />
      </View>
      <Button icon='email' mode='outlined' onPress={() => router.push('/Register')}>
        Continue with Email
      </Button>

      <Spacer />
      <View s='row'>
        <Divider theme={{ colors: { outlineVariant: 'black' } }} />
        <Text>or</Text>
        <Divider />
      </View>
      <Spacer />
      <Button onPress={() => router.push('/(auth)/LoginByPhone')} mode='outlined' icon='phone'>
        Continue with phone
      </Button>
      <View s='absolute b-0'>
        <Text variant='bodySmall'>By continuing to the next page, you acknowledge that you have read and agreed to the Terms of use and Privacy Policy</Text>
      </View>
    </Background>
  );
}
