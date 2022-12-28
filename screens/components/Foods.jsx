import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import client, { urlFor } from '../../sanity'

export default function Foods() {

    const [foods, setFoods] = useState(null)

    useEffect(()=>{
        client.fetch(`*[_type == "dishCategory"]{
            name,
            image
        }`).then(data => setFoods(data))
        .catch(error => console.error(error))
    },[])

  return (
    <View className='px-5'>
        <View className='flex-row justify-between my-3'>
          <Text className='font-bold text-xl'>Comidas</Text>
          <Text className='my-auto text-gray-500'>Ver Todos</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='space-x-4'>
        {foods?.map(f => (
          <View key={f.name}>
            <View className='w-20 h-20 bg-white'>
              <Image
                className='w-16 h-16 place-self-end left-4'
                source={{uri: urlFor(f.image).url()}}/>
            </View>
            <Text className='mt-2 w-20'>{f.name}</Text>
          </View>
        ))
        }
        </ScrollView>
      </View>
  )
}