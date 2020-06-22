import React from 'react';
import {View, Text, ScrollView, Image, Alert,TouchableOpacity} from 'react-native';
//import {GiftedChat} from 'react-native-gifted-chat';
import Messages from '../../messages.json';
import {MaterialIcons} from '@expo/vector-icons'

class RecentChatScreen extends React.Component {
  state = {    
    isRead : false,
    bgColor : '#00cc3f'
  };

  toggleMessageRead = () => {
      if(this.state.isRead){
        this.setState({
            bgColor : '#ccc'
        })
      }
  }

  render() {
    //var {text, createdAt} = this.state.messages;
    var {bgColor} = this.state.bgColor
    const {avator} = Messages
    return (
      <View>
        <ScrollView>
          {Messages.map((message) => {
            return(
                <View
            key = {message.id}
              style={{flexDirection: 'row', paddingLeft: 10, paddingTop: 5}}>
              <View
                style={{
                  flex: 1,
                  marginBottom:10,
                  
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                >

               <View style = {{justifyContent:'center',alignItems:'center' ,backgroundColor:'#ccc',width:50,height:50,borderRadius:25}} onPress = {()=> Alert.alert('View Image',"View contact profile picture") } >
               <MaterialIcons name = "person" size = {28} color = "#fff" />
               </View>
              </View>
              <TouchableOpacity onPress = {()=>this.props.navigation.navigate('Chat')} style={{flex: 3,paddingHorizontal:5}}>
                <Text style = {{fontSize:16}} > {message.name} </Text>
                <Text> {message.message} </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex: 1,paddingRight:5}}>
                <Text> {message.date} </Text>
                {
                    message.num ? (
                        <View style ={{width:20,height:20,borderRadius:10,backgroundColor:'#00cc3f',justifyContent:'center',alignItems:'center',alignSelf:'center'}} >
                            <Text style = {{color:'#fff'}} > {message.num} </Text>
                        </View>
                    ) : null
                }
              </TouchableOpacity>
            </View>
            )
          })}
        </ScrollView>
        <View style = {{transform : [{translateX:320,}],marginVertical:250,backgroundColor:bgColor,width:70,height:70,borderRadius:40,alignItems:'center',justifyContent:'center'}} >
          <MaterialIcons name = "message" size = {25} color = "#fff"/>
        </View>
      </View>
    );
  }
}

export default RecentChatScreen;
