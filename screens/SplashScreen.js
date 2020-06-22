import React from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';

const SplashScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.bodyContent}>
                <Image source = {require('../assets/img/WhatsApplogo.png')} width = {40} height = {40} resizeMode = "center" />
            </View>
            <View style={styles.footer}>
                <Text style={{fontSize:18}}>WhatApp from Quamies Studio</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headText: {
      fontSize: 26,
      fontWeight: '600',
    },
    bodyContent:{
        flex:4
    },
    footer:{
        flex:1
    },
    mainText:{
        fontSize:24,
        fontWeight:'500'
    }
  });

export default SplashScreen;