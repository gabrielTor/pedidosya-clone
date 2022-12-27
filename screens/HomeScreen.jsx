import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Categories from './components/Categories'
import SearchBar from './components/SearchBar'
import Card from './components/Card'

export default function HomeScreen({navigation}) {

  return (
    <ScrollView>
      <Categories/>
      <SearchBar/>
      <View className='px-5'>
        <View className='flex-row justify-between my-3'>
          <Text className='font-bold text-xl'>Comidas</Text>
          <Text className='my-auto text-gray-500'>Ver Todos</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='space-x-4'>
          <View>
            <View className='w-20 h-20 bg-white'>
              <Image
                className='w-16 h-16 place-self-end left-4'
                source={require('../imgs/beef-2.webp')}/>
            </View>
            <Text className='mt-2'>Carnes</Text>
          </View>
          <View>
            <View className='w-20 h-20 bg-white'>
              <Image
                className='w-16 h-16 place-self-end left-4'
                source={require('../imgs/beef-2.webp')}/>
            </View>
            <Text className='mt-2'>Carnes</Text>
          </View>
          <View>
            <View className='w-20 h-20 bg-white'>
              <Image
                className='w-16 h-16 place-self-end left-4'
                source={require('../imgs/beef-2.webp')}/>
            </View>
            <Text className='mt-2'>Carnes</Text>
          </View>
          <View>
            <View className='w-20 h-20 bg-white'>
              <Image
                className='w-16 h-16 place-self-end left-4'
                source={require('../imgs/beef-2.webp')}/>
            </View>
            <Text className='mt-2'>Carnes</Text>
          </View>
          <View>
            <View className='w-20 h-20 bg-white'>
              <Image
                className='w-16 h-16 place-self-end left-4'
                source={require('../imgs/beef-2.webp')}/>
            </View>
            <Text className='mt-2'>Carnes</Text>
          </View>
          <View>
            <View className='w-20 h-20 bg-white'>
              <Image
                className='w-16 h-16 place-self-end left-4'
                source={require('../imgs/beef-2.webp')}/>
            </View>
            <Text className='mt-2'>Carnes</Text>
          </View>
          <View>
            <View className='w-20 h-20 bg-white'>
              <Image
                className='w-16 h-16 place-self-end left-4'
                source={require('../imgs/beef-2.webp')}/>
            </View>
            <Text className='mt-2'>Carnes</Text>
          </View>
        </ScrollView>
      </View>
      <View className='my-7 px-5'>
      <Text className='font-bold text-lg my-2'>100 restaurantes</Text>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </View>
    </ScrollView>
  )
}
