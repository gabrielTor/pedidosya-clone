import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import client from '../sanity'

export default function DetailScreen() {

  const navigation = useNavigation()
  const { params } = useRoute()
  const [info, setInfo] = useState()
  
  useEffect(()=>{
    client.fetch(`*[_type == "restaurant" && _id == $id]{
      ...,
      dishes[]->{
        ...
      }
    }`, {id: params.id}).then(data => setInfo(data))
    .catch((err)=>console.log(err))
  },[])

  return (
    <ScrollView>
      <View className='relative'>
        <Image 
          source={require('../imgs/pets-icon.webp')}
          className='w-full h-56 bg-gray-300 p-4'/>
        <TouchableOpacity 
          onPress={navigation.goBack}
          className='absolute top-14 left-5 p-2 bg-gray-400 rounded-full'>
          <AntDesign name="arrowleft" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View className='bg-white'>
        <View className='px-4 pt-4'>
          <Text className='text-3xl font-bold'>{info?.title}</Text>
        </View>
      </View>
    </ScrollView>
  )
}