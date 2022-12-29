import { ScrollView, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Categories from './components/Categories'
import SearchBar from './components/SearchBar'
import Card from './components/Card'
import Foods from './components/Foods'
import client from '../sanity'

export default function HomeScreen() {

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
      <Text className='font-bold text-lg my-2'>{restaurants.length} restaurantes</Text>
      {restaurants?.map(r => (
        <Card
          key={r._id}
          id={r._id}
          rating={r.rating}
          title={r.title}
          image={r.image}/>
        ))}
      </View>
    </ScrollView>
  )
}
