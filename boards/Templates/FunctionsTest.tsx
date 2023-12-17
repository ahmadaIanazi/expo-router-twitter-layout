
import React from 'react'
import { Button, Main, Safe } from '../../widgets'
import { Text } from 'react-native-paper'
import manageData from '../../managers/manageData'
import { endpoints } from '../../keys/functionsEnums'

export default function FunctionsTest() {

  const onPress = async () => {
    const api = manageData()

    const healthCheckFunction = api.get(endpoints.health, { data: { test: 'test' } })
    try {

      await healthCheckFunction.then((result)=> {
        console.log('Function result:', result)
      })
      // Handle the response
    } catch (error) {
      console.error('Error calling function:', error)
      // Handle the error
    }
  }

  return (
    <Main>
      <Safe safe='header'>
        <Text variant='headlineLarge' style={{textAlign:'center'}}>FunctionsTest</Text>
        <Button onPress={onPress} mode='contained'>
          Health Check
        </Button>
      </Safe>
    </Main>
  )
}
