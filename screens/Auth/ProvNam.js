import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Dimensions
} from 'react-native';

import { AuthContext } from '../../AuthContext';
const {width, height} = Dimensions.get('screen');

const ProvNam = () => {
    
    const {numAuth} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headText}>Enter your name</Text>
      </View>
      <View style={styles.nameInput}>
        <View
          style={{
            backgroundColor: '#00fcf3',
            width: 50,
            height: 50,
            borderRadius: 25,
            marginRight: 10,
          }}
        />
        <View>
          <TextInput />
          <View style={{height: 1, width: 200, backgroundColor: '#000'}} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View>
          <TouchableHighlight style={styles.btnSkip} onPress={()=>numAuth()}>
            <Text style={styles.mainText}>Skip</Text>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight style={styles.btnStart} onPress={()=>numAuth()}>
            <Text style={styles.mainText}>Continue</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginVertical: 50,
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  headText: {
    fontSize: 26,
    fontWeight: '600',
  },
  footer: {
    flex: 1,
  },
  mainText: {
    fontSize: 20,
    fontWeight: '500',
  },
  btnStart: {
    width:width/2.5,
    backgroundColor: '#017b8a',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginLeft:10
  },
  nameInput: {
    flex:3,
    flexDirection: 'row',
    marginRight:50,
  },
  btnSkip: {
    width:width/2.5,
    borderWidth: 2,
    borderColor: '#017b8a',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginRight:10
  },
});

export default ProvNam;
