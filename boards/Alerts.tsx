import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { Button, IconButton, useTheme } from 'react-native-paper'
import { BackButton, Background } from '../widgets'
import manageAlerts from '../managers/manageAlerts'
import { Card } from 'react-native-paper'
// import { ScrollView } from 'tamagui'

export default function Alerts() {
  const colors = useTheme()
  const { alerts, addAlert, removeAlert } = manageAlerts()

  const addAlertDummy = () => {
    const alert = {
      id: '11',
      title: 'Oops',
      message: 'You have to make more stuff',
      type: 'success',
      action: ()=> console.log('Action')
    }
    addAlert(alert)
  }

  return (
    <BlurView tint={colors.dark ? 'dark' : 'light'} style={styles.container}>
      <View style={{ flex: 1 }}>
        <BackButton />
        <FlatList
          inverted
          data={alerts}
          key={alerts.id}
          renderItem={({item}) => {
            console.log('ALERT?', item)
            return (
              <Card 
              onPress={item?.action}
              style={{ width: '100%', borderRadius: colors.radius, marginBottom: colors.margin }}>
                <Card.Title title={item.title} subtitle={item.message} />
                <Card.Actions>
                  <IconButton icon='close' onPress={() => removeAlert(item.id)} />
                </Card.Actions>
              </Card>
            )
          }}
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: colors.padding}}
        />
      </View>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})