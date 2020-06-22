import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  Dimensions,
  Alert,
  TouchableOpacity
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainText}>Welcome to WhatsApp</Text>
      </View>
      <View style={styles.bodyContent}>
        <Image
          source={require('../../assets/img/WelcomeLogo.png')}
          width={100}
          height={100}
          resizeMode="center"
        />
      </View>
      <View style={styles.footer}>
        <View style={{width:width/1.2,justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center',color:"#868686"}}>
            Read our <Text style={{color:'#0aa8ff'}} onPress={() => Alert.alert('Privacy Policy','Some policy writing here')}>Privacy Policy.</Text> Tap "Agree and continue" to
            accept the <Text style={{color:'#0aa8ff'}} onPress={() => Alert.alert('Terms of Service','Some terms of use writing here')}>Terms of Services.</Text>
          </Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
          <TouchableOpacity
            style={styles.btnStart}
            onPress={() => navigation.navigate('Number')}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
              AGREE AND CONTINUE
            </Text>
          </TouchableOpacity>
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
    marginTop: 50,
  },
  headText: {
    fontSize: 26,
    fontWeight: '600',
  },
  bodyContent: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
  },
  mainText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#00796a',
  },
  btnStart: {
    backgroundColor: '#00cc3f',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: width/1.3,
  },
});

export default Welcome;
