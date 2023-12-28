import React from 'react'
import { Text } from 'react-native-paper'
import { Button, Main, Safe } from '../../widgets'
import { endpoints } from '../../keys/endpoints';
import onPressFunctionHandler from '../../events/onPressFunctionHandler'

export default function FunctionsTest() {

  const healthCheckHandler = ()=> onPressFunctionHandler('post', endpoints.health, { data: { message: 'Hello World' } });

  return (
    <Main>
      <Safe safe='header'>
        <Text variant='headlineLarge' style={{ textAlign: 'center' }}>
          FunctionsTest
        </Text>
        <Button onPress={healthCheckHandler} mode='contained'>
          Health Check
        </Button>
      </Safe>
    </Main>
  )
}
