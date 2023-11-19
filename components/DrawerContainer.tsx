import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { View } from 'react-native';
import DrawerBottomContainer from './DrawerBottomContainer';
import DrawerTopContainer from './DrawerTopContainer';
import { Divider } from 'react-native-paper';
import Localization from '../translations';

export default function DrawerContainer(props: any) {
  const l = useContext(Localization);

  return (
    <View style={{ flex: 1, direction: l.direction }}>
      <DrawerTopContainer />
      <Divider style={{ width: '90%', alignSelf: 'center', marginVertical: 10 }} />
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          zIndex: 10,
          flex: 2,
        }}
      >
        <View style={{ flex: 2 }}>
          <DrawerItemList {...props} />
        </View>
        <DrawerBottomContainer {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
