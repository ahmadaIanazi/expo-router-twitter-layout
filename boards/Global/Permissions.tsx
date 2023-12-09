import React, { useContext } from 'react';
import { ScrollView, Image, Dimensions } from 'react-native';
import { Text, Button, Icon } from 'react-native-paper';
import { Main, Safe, Spacer, View } from '../../widgets';
import Localization from '../../translations';

const Permissions = ({ access, contents }) => {
  const { title, image, text, iconA, iconB, textA, textB } = contents[access];
  const { height } = Dimensions.get('screen')
  const l = useContext(Localization);

  return (
    <Main>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Image source={image} style={{ width: '100%', height: height * 0.4, resizeMode: 'contain' }} />
        <Text variant='displayMedium' style={{ alignSelf: 'center' }}>
          {title}
        </Text>
        <Text variant='bodyLarge'>{text}</Text>
        <Spacer />
        <View s='row'>
          <Icon source={iconA} size={24} />
          <Spacer />
          <Text variant='bodyLarge'>{textA}</Text>
        </View>
        <Spacer />
        <View s='row'>
          <Icon source={iconB} size={24} />
          <Spacer />
          <Text variant='bodyLarge'>{textB}</Text>
        </View>
      </ScrollView>
      <Safe safe='all'>
        <View s='p-20'>
          <Button mode='contained' onPress={() => { }}>
            {l.continue}
          </Button>
        </View>
      </Safe>
    </Main>
  );
};

export default Permissions;
