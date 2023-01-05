import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import CheckoutCard from './components/CheckoutCard'
import { useSelector } from 'react-redux'
import { urlFor } from '../sanity'

export default function CheckoutScreen({navigation}) {

  const restaurant = useSelector(state => state.restaurant.thisRestaurant)
  const imgUrl = urlFor(restaurant?.image).url()

  return (
    <>
    <SafeAreaView className='p-5 bg-white'>
      <TouchableOpacity 
        onPress={()=>navigation.goBack()}
        className='my-3 flex-row'>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text className='m-auto font-bold text-xl'>Mi pedido</Text>
      </TouchableOpacity>
      <View className='flex-row'>
        <Image source={{uri: imgUrl}} className='w-12 h-12 rounded-md'/>
        <View className='ml-3'>
          <Text className='text-lg font-bold'>{restaurant.title}</Text>
          <Text>30 - 45 min • $269 envio • Minimo %699</Text>
        </View>
      </View>
    </SafeAreaView>
    <Text className='p-5'>Estas llevando:</Text>
    
    <CheckoutCard/>

    <View className='absolute bottom-0 z-50 bg-white w-full border-t'>
      <TouchableOpacity
        onPress={()=>navigation.navigate('Success')}
        className='m-5 rounded-full p-4 flex-row justify-center' 
        style={{backgroundColor: 'rgb(250, 0, 80)'}}>
        <Text className='color-white font-bold'>Ir a pagar</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}