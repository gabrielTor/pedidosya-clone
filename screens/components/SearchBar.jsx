import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome, AntDesign } from '@expo/vector-icons'

export default function SearchBar() {

  const [search, setSearch] = useState('')

  return (
    <View className='flex-row mt-8'>
      <View className='flex-row px-4 m-5 w-72 h-11 bg-gray-300 rounded-full'>
        <View className='mt-2.5'>
          <FontAwesome name="search" size={24} color="gray"/>
        </View>
        <TextInput className='px-2' style={{width: '100%'}}
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={()=>setSearch('')}
          placeholder='Buscar...'/>
      </View>
      <Text className='m-auto font-bold mr-4'>
        <AntDesign name="filter" size={24} color="black" />
        Filtros
      </Text>
    </View>
  )
}