import { Text, View, Image } from 'react-native'
import React from 'react'

export default function Categories() {

  return (
    <View className='flex-row flex-wrap justify-between px-4'>
        <View className='m-2 mt-5'>
          <Image
          source={require('../../imgs/restaurants-icon.webp')}
          className='w-16 h-16 m-auto'/>
          <Text className='font-bold text-center'>Restaurantas</Text>
        </View>
        <View className='m-2 mt-5'>
          <Image
          source={require('../../imgs/groceries-icon.webp')}
          className='w-16 h-16 m-auto'/>
          <Text className='font-bold text-center'>Mercados</Text>
        </View>
        <View className='m-2 mt-5'>
          <Image
          source={require('../../imgs/drinks-icon.webp')}
          className='w-16 h-16 m-auto'/>
          <Text className='font-bold text-center'>Bebidas</Text>
        </View>
        <View className='m-2 mt-5'>
          <Image
          source={require('../../imgs/kioscs-icon.webp')}
          className='w-16 h-16 m-auto'/>
          <Text className='font-bold text-center'>kioscos</Text>
        </View>
        <View className='m-2 mt-5'>
          <Image
          source={require('../../imgs/coffee-icon.webp')}
          className='w-16 h-16 m-auto'/>
          <Text className='font-bold text-center'>Cafe && Deli</Text>
        </View>
        <View className='m-2 mt-5'>
          <Image
          source={require('../../imgs/pharmacies-icon.webp')}
          className='w-16 h-16 m-auto'/>
          <Text className='font-bold text-center'>Farmacias</Text>
        </View>
        <View className='m-2 mt-5'>
          <Image
          source={require('../../imgs/shops-icon.webp')}
          className='w-16 h-16 m-auto'/>
          <Text className='font-bold text-center'>Tiendas</Text>
        </View>
        <View className='m-2 mt-5'>
          <Image
          source={require('../../imgs/pets-icon.webp')}
          className='w-16 h-16 m-auto'/>
          <Text className='font-bold text-center'>Mascotas</Text>
        </View>
    </View>
  )
}