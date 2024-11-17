import React from 'react'
import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { HelloWave } from '@/components/HelloWave';
import Animated from "react-native-reanimated"
import SearchBar from './SearchBar';

const TopBar = () => {
    return (
        <View style={{paddingTop:30, paddingBottom:20, paddingLeft:15, paddingRight:15, backgroundColor:"#FF69B4"}}>
            <Animated.View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <View>
                    <View style={{flexDirection:'row', alignItems:'flex-end', gap:2,}}>
                        <Text style={{color:"black", fontSize:14, lineHeight:18, fontFamily:'BarlowMedium'}}>Good Morning</Text>
                        <HelloWave />
                    </View>
                    <Text style={{color:"black", fontSize:20, lineHeight:24, fontFamily:'bold'}}>Tony Stark, Jr.</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'flex-end', gap:18, position:'absolute', right:0, bottom:0}}>
                    <FontAwesome name="heart-o" size={25} color='black'></FontAwesome>
                    <MaterialCommunityIcons name="bell-badge-outline" size={25} color='black'></MaterialCommunityIcons>
                    <TabBarIcon name='cart' size={25} color='black' style={[{ marginBottom: 0 }]} />
                </View>
            </Animated.View>
            <SearchBar></SearchBar>
        </View>
    )
}

export default TopBar