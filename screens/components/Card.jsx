import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome, EvilIcons } from '@expo/vector-icons'
import { urlFor } from '../../sanity'
import { useNavigation } from '@react-navigation/native'

export default function Card({title, image, rating, id}) {

  const { navigate } = useNavigation()

  return (
    <TouchableOpacity 
      onPress={()=>navigate('Details', {id})}
      className='mt-2 px-3 py-1 shadow rounded-md bg-white flex-row justify-between'>
      <Image
          className='h-12 w-12 mt-1.5 rounded-md'
          source={{uri: urlFor(image).url()}}/>
      <View className='w-52'>
          <Text className='font-bold text-lg'>{title}</Text>
          <Text className='my-0.5 text-xs'>
              <EvilIcons name="credit-card" size={16} color="black"/> Acepta pago online
          </Text>
          <Text className='my-0.5 text-xs mb-2'>25 - 40min - Envio$159</Text>
      </View>
      <Text className='p-1'><FontAwesome name="star" size={14} color="orange"/> {rating}</Text>
    </TouchableOpacity>
  )
}