import React, { useContext } from 'react';
import { Text } from 'react-native-paper';
import Localization from '../../translations';
import { Background, Main } from '../../widgets';
import manageLocales from '../../managers/locales';

const LoadingApp = () => {

const { l } = manageLocales()

  return (
    <Main color='black'>
      <Background>
      <Text>Loading App</Text>
      </Background>
    </Main>
  );
};

export default LoadingApp;
