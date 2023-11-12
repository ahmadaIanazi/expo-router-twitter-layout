import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { View } from 'react-native';
import DrawerBottomContainer from './DrawerBottomContainer';
import DrawerTopContainer from './DrawerTopContainer';
import { Divider } from 'react-native-paper';

export default function DrawerContainer(props: any) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerTopContainer />
      <Divider style={{ width: '90%', alignSelf: 'center', marginVertical: 10 }} />
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          zIndex: 10,
          flex: 2,
        }}>
          <View style={{flex: 2}}>
        <DrawerItemList {...props} />
          </View>
        <DrawerBottomContainer />
      </DrawerContentScrollView>
    </View>
  );
}
