import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Dimensions,
  Modal,
  TouchableOpacity,
  ScrollView,
  Alert,
  ListView,
  TouchableHighlightBase,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Countries from '../../data.json';
import Country from '../../components/Country';
//import ModalView from '../../components/Modal';
//import ModalView from '../../components/Modal';

const {width, height} = Dimensions.get('screen');

class NumAuth extends React.Component {
  state = {
    isVisible: false,
    countryName : 'state name',
    countryCode : 'state code'
  };

  modalView = (visible) => {
    this.setState({isVisible: visible});
  };

  render() {
    const {isVisible, countryCode, countryName} = this.state;
    //console.log(Countries)
    return (
      <View style={styles.container}>
        <Modal visible={isVisible}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical:50,backgroundColor:'#ccc'}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:20,fontWeight:'700'}}>Select your country</Text>
              <AntDesign name = "close" size = {30} color = "#000" style={{marginLeft:50,alignItems:'flex-end'}} onPress={() => this.modalView(!isVisible)}/>
            </View>
            <ScrollView>
              {Countries.map((country) => {
                return (
                  <TouchableHighlight
                    key={country.id}
                    >
                    <Text style={{textAlign: 'center', fontSize: 18}} onPress = {(e)=>{
                      console.log(e.nativeEvent.target,countryName)
                      this.modalView(!isVisible)
                    }} >
                      {country.name}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </ScrollView>
          </View>
        </Modal>

        <View style={styles.header}>
          <Text style={styles.headText}>Verify your phone number</Text>
        </View>
        <View style={styles.infoText}>
          <Text style={{textAlign: 'center', fontSize: 17}}>
            WhatsApp will send an SMS message (carrier charges may apply) to
            verify your phone number.
          </Text>
          <Text style={{textAlign: 'center', fontSize: 17}}>
            Enter your country code and phone number:
          </Text>
        </View>
        <View style={styles.bodyContent}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 2, alignItems: 'center'}}>
                <Text style = {{fontSize:18}}> {countryName} </Text>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <AntDesign
                  name="caretdown"
                  size={26}
                  color="#016b61"
                  onPress={() => {
                    this.modalView(true);
                  }}
                />
              </View>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <View style={styles.line} />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flex: 1}}>
              <View style={{marginTop: 15,}}>
                <Text style = {{fontSize:20}} > {countryCode} </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#016b61',
                  width: width / 4.5,
                  marginTop: 5,
                }}
              />
            </View>
            <View style={{flex: 2}}>
              <View>
                <TextInput
                  placeholder="phone number"
                  keyboardType="number-pad"
                  placeholderTextColor="#868686"
                  style={{fontSize: 20}}
                />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#016b61',
                  width: width / 1.8,
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableHighlight
            style={styles.btnStart}
            onPress={() => this.props.navigation.navigate('Name')}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
              NEXT
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 1.1,
  },
  headText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#00796a',
  },
  line: {
    marginTop: 5,
    width: width / 1.2,
    borderWidth: 0.8,
    borderColor: '#016b61',
  },
  numInput: {
    flexDirection: 'row',
  },
  bodyContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width / 1.2,
  },
  footer: {
    flex: 1,
  },
  mainText: {
    fontSize: 24,
    fontWeight: '500',
  },
  btnStart: {
    backgroundColor: '#00cc3f',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: width / 4,
  },
  btnSkip: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#017b9a',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});

export default NumAuth;
