import React from 'react';
import {
    View,
    Text,
    StatusBar
}from 'react-native';

import {MaterialIcons,AntDesign} from '@expo/vector-icons'

const TabBar = () => {
  return (
    <View>
      <StatusBar backgroundColor="#054d44" />
      <View
        style={{
          backgroundColor: '#075e54',
          height: 60,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Text style={{color: '#fff', fontSize: 23, padding: 10}}>
            WhatsApp
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <View style={{flexDirection: 'row', padding: 10}}>
            <AntDesign
              name="search1"
              color="#fff"
              size={20}
              style={{paddingRight: 20}}
            />
            <MaterialIcons name="more-vert" color="#fff" size={24} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TabBar;
