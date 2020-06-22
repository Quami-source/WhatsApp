import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
    View,
    Text,
    TouchableHighlightBase
}from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'


//screens
import RecentChatScreen from './RecentChatScreen';
import Camera from './Camera';
import StatusScreen from './StatusScreen';
import Chat from '../../components/Chat'
import CallHistoryScreen from './CallHistoryScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Navs = createStackNavigator();
const AppNav = () => {
    return(
        <Navs.Navigator headerMode = {false} initialRouteName = "ChatHistory" >
        <Navs.Screen name = "ChatHistory" component = {RecentChatScreen}/>
        
        <Navs.Screen name = "Chat" component = {Chat}/>
        

    </Navs.Navigator>
    )
}

const TopTab = createMaterialTopTabNavigator();
const HomeStack = () => {
    const switchColor = (isFocused) =>{
        if(isFocused){
            return '#fff'
        }
        return '#75a6a0'
    }
  return (
    <TopTab.Navigator initialRouteName ="CHATS" tabBarOptions = {{
        indicatorStyle : {
            height:3,
            backgroundColor:'#fff'
        },
        style :{
            backgroundColor: '#075e54',
        },
        labelStyle : {
            fontSize : 16
        },
        activeTintColor:'#fff',
        inactiveTintColor:'#75a6a0'
    }} >
        <TopTab.Screen name = "camera" component = {Camera} options = {{
            tabBarLabel : ({focused,})=>{
                return(
                    <MaterialIcons name = "camera-alt" size = {25} color = {switchColor(focused)} />
                )
            }
        }}/>
        <TopTab.Screen name = "CHATS" component = {AppNav} />
        <TopTab.Screen name = "STATUS" component = {StatusScreen}/>
        <TopTab.Screen name = "CALLS" component = {CallHistoryScreen}/>
    </TopTab.Navigator>
  );
};

export default HomeStack;