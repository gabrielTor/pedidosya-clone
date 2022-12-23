import { Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Categories from './components/Categories'

export default function HomeScreen() {

  const navigation = useNavigation()

  return (
    <ScrollView>
      <Categories/>
      
    </ScrollView>
  )
}
