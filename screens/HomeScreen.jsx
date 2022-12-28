import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Categories from './components/Categories'
import SearchBar from './components/SearchBar'
import Card from './components/Card'
import Foods from './components/Foods'
import client from '../sanity'

export default function HomeScreen({navigation}) {

  const [restaurants, setRestaurants] = useState([])

  useEffect(()=>{
    client.fetch(`*[_type == "restaurant"]`)
      .then(data => setRestaurants(data))
  },[])

  return (
    <ScrollView>
      <Categories/>
      <SearchBar/>
      <Foods/>
      <View className='my-7 px-5'>
      <Text className='font-bold text-lg my-2'>100 restaurantes</Text>
      {restaurants?.map(r => (
          <TouchableOpacity key={restaurants._id}>
            <Card
              rating={r.rating}
              title={r.title}
              image={r.image}/>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}
