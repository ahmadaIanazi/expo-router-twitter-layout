import React, { useContext } from 'react';
import { Text } from 'react-native-paper';
import Localization from '../../translations';
import { Background, Main } from '../../widgets';
import manageLocales from '../../managers/manageLocales';

const LoadingUser = () => {

const { l } = manageLocales()

  return (
    <Main color='black'>
      <Background>
      <Text>Loading User</Text>
      </Background>
    </Main>
  );
};

export default LoadingUser;
