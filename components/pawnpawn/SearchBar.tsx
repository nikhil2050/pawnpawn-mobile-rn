import React from 'react'
import { Image, StyleSheet, Platform, View, Text, Pressable } from 'react-native';
import { AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { HelloWave } from '@/components/HelloWave';
import Animated from "react-native-reanimated"
import { useRouter } from 'expo-router';

const SearchBar = () => {
    const router = useRouter();

    return (
        <>
            <Pressable onPress={() => router.push("/explore")}>
                <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#ffffff55', borderRadius:16, padding:16, marginTop:16 }}>
                    <MaterialCommunityIcons name='magnify' size={20} color={'black'}></MaterialCommunityIcons>
                    <Text style={{color:'black', marginLeft:8}}>Search...</Text>
                </View>
            </Pressable>
        </>
    )
}


export default SearchBar