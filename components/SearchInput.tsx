import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon, IconButton, TextInput } from 'react-native-paper'

export default function SearchInput() {
  return (
    <View>
      <TextInput
        placeholder="Search"
        right={<Icon source="magnify" size={20} />}
      />
      {/* <View style={styles.searchFloating}>
      <TouchableOpacity>
        <View style={styles.searchButton}>
          <Icon source="magnify" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </View> */}
    </View>
  )
}
