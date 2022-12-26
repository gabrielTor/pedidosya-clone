import { ScrollView, View, Image, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Categories from './components/Categories'
import SearchBar from './components/SearchBar'

export default function HomeScreen() {

  const navigation = useNavigation()

  return (
    <ScrollView>
      <Categories/>
      <SearchBar/>
      <View className='px-5'>
        <View className='flex-row justify-between my-3'>
          <Text className='font-bold text-xl'>Comidas</Text>
          <Text className='my-auto'>Ver Todos</Text>
        </View>
        <ScrollView horizontal className='space-x-4'>
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
    </ScrollView>
  )
}
