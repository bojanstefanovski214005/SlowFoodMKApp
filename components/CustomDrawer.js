import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';

const CustomDrawer = (props) => {
  const windowHeight = Dimensions.get('window').height;
  return (
    
    <DrawerContentScrollView {...props}>
        <View style={{flex:1, alignItems: 'center', paddingTop: 20}}>
        <Image 
    style={{width: 170,height: 170}}
    source={require('../assets/icon.png')}/></View>
        <View style={{flex:1, backgroundColor: '#ffffff', paddingTop: 20}}>
            <DrawerItemList {...props}/>
        </View>
        <View style={{alignItems: 'center', marginTop: windowHeight * 0.32}}>
            <Text style={{alignItems: 'center', justifyContent: 'center', color: '#666666'}}>Version 2.0.0</Text>
        </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer