import React, { useState } from 'react'
import { View, Text, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInDown } from "react-native-reanimated"

interface Category {
    id: string,
    name: string,
    icon: string
  }
  
  interface Props {
    categories: Category[];
    selectedCategory: string;
    setSelectedCategory: (id: string) => void;
  }

  const HorizontalScrollList: React.FC<Props> = ({categories, selectedCategory, setSelectedCategory }) => {

    // const [selectedCategory, setSelectedCategory] = useState('business');

    const renderCategory = ({item}: {item: Category}) => (
      <Pressable onPress={ ()=> {setSelectedCategory(item.id)}} 
          style={{marginRight:6, padding:8, borderRadius:9999, alignItems:'center', flexDirection:'column', gap:16}}>
  
          <View style={{ padding:12, borderRadius:9999, flexDirection:'row', alignItems:'center',
                borderWidth:selectedCategory === item.id ?2:1, 
                borderColor:selectedCategory===item.id?'#FF69B4':'#black' }}>
              <Ionicons name={item.icon as any} size={24} color={selectedCategory === item.id?'#FF69B4':'black'}></Ionicons>
          </View>
          <Text style={{ marginTop:-10, color:selectedCategory===item.id?'#FF69B4':'#black'}}>{item.name}</Text>
      </Pressable>
    )

    return (
      <Animated.View style={{gap:2}} entering={FadeInDown.duration(500).delay(200).springify()}>
        <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:12, paddingTop:16, alignItems:'center'}}>
          <Text style={{fontSize:20, lineHeight:28, fontWeight:'bold'}}>Explore topics</Text>
          <Text style={{color:'#1d4ed8'}}>See more</Text>
        </View>

        { /* Categories List*/ }
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{borderColor:'blue', borderWidth:0, marginBottom:16}}>
        {
          categories.map( (category) => (
              <View key={category.id} style={{borderColor:'red', borderWidth:0}}> 
                  {renderCategory({item:category})}
              </View>
            )
          )
        }
        </ScrollView>
      </Animated.View>
  )
}

export default HorizontalScrollList