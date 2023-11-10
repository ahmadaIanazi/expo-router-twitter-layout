
import { useRouter } from 'expo-router';
import { Text } from 'react-native-paper';


import {
  View,
  Div,

  Tap,
  Appbar,
  BackButton,
  Background,
  Banner,
  Button,
  Header,
  Paragraph,
  ScrollView,
  SliderIndicator,
  Snackbar,
  TextInput,
  Logo,
  Main,
  OnboardSlider,
  OnboardingButton,
} from '../widgets';


export default function Welcome(): React.JSX.Element {
  const router = useRouter();

  return (
    <Background>
      <Logo />
      <Text variant='headlineLarge'>Expo Router</Text>
      <Paragraph>The Ultimate Starter-kit by Ahmad</Paragraph>
      <Button mode='contained' onPress={() => {
        router.push('/Login')
        router.setParams({ postDatas: 'This is the post data' });
      }}>
        Log in
      </Button>
      <Button mode='outlined' onPress={() => router.push('/Register')}>
        Create an account
      </Button>
      <View s='absolute b-0'>
      <Paragraph>By using the app you agree to</Paragraph>
      </View>
    </Background>
  );
}
