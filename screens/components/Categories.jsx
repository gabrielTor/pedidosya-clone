import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Categories() {

  return (
    <View className='flex-row flex-wrap justify-between px-4'>
        <TouchableOpacity className='m-2 mt-5'>
          <Image
          source={require('../../imgs/restaurants-icon.webp')}
          className='w-14 h-14 m-auto'/>
          <Text className='font-bold text-center'>Restaurantes</Text>
        </TouchableOpacity>
        <TouchableOpacity className='m-2 mt-5'>
          <Image
          source={require('../../imgs/groceries-icon.webp')}
          className='w-14 h-14 m-auto'/>
          <Text className='font-bold text-center'>Mercados</Text>
        </TouchableOpacity>
        <TouchableOpacity className='m-2 mt-5'>
          <Image
          source={require('../../imgs/drinks-icon.webp')}
          className='w-14 h-14 m-auto'/>
          <Text className='font-bold text-center'>Bebidas</Text>
        </TouchableOpacity>
        <TouchableOpacity className='m-2 mt-5'>
          <Image
          source={require('../../imgs/kioscs-icon.webp')}
          className='w-14 h-14 m-auto'/>
          <Text className='font-bold text-center'>kioscos</Text>
        </TouchableOpacity>
        <TouchableOpacity className='m-2 mt-5'>
          <Image
          source={require('../../imgs/coffee-icon.webp')}
          className='w-14 h-14 m-auto'/>
          <Text className='font-bold text-center'>Cafe && Deli</Text>
        </TouchableOpacity>
        <TouchableOpacity className='m-2 mt-5'>
          <Image
          source={require('../../imgs/pharmacies-icon.webp')}
          className='w-14 h-14 m-auto'/>
          <Text className='font-bold text-center'>Farmacias</Text>
        </TouchableOpacity>
        <TouchableOpacity className='m-2 mt-5'>
          <Image
          source={require('../../imgs/shops-icon.webp')}
          className='w-14 h-14 m-auto'/>
          <Text className='font-bold text-center'>Tiendas</Text>
        </TouchableOpacity>
        <TouchableOpacity className='m-2 mt-5'>
          <Image
          source={require('../../imgs/pets-icon.webp')}
          className='w-14 h-14 m-auto'/>
          <Text className='font-bold text-center'>Mascotas</Text>
        </TouchableOpacity>
    </View>
  )
}