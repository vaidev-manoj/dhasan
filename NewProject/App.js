import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {useDimensions,useDeviceOrientation} from  '@react-native-community/hooks';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppText from './component/AppText';
//import { createPortal } from 'react-dom';
//import { int } from 'getenv';
//import {MaterialCommunityIcons} from '@expo/vector-icons'
export default function App() {
 const { landscape}= useDeviceOrientation()
 console.log(landscape)
  return(
<View style={styles.container}>
<AppText></AppText>
</View>
    


  );
}
const styles = StyleSheet.create({
  container: {
  
    flex: 1,
   borderColor:'green',
   borderWidth:20,
   backgroundColor:'white',
   justifyContent:'center',
    alignItems:'center',

    padding:Platform.OS==='android'? StatusBar.currentHeight:50,
   
   
  }

});


