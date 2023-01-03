import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { AntDesign, FontAwesome, Ionicons  } from '@expo/vector-icons'
import client, { urlFor } from '../sanity'
import MenuCard from './components/MenuCard'
import CartIcon from './components/CartIcon'


export default function DetailScreen({navigation}) {

  const { params } = useRoute()
  const [info, setInfo] = useState()
  const defaultImg = 'https://png.pngitem.com/pimgs/s/197-1979886_images-transparent-food-symbol-png-png-download.png'
  
  useEffect(()=>{
    client.fetch(`*[_type == "restaurant" && _id == $id]{
      ...,
      dishes[]->{
        ...
      }
    }`, {id: params.id}).then(data => setInfo(data[0]))
    .catch((err)=>console.log(err))
  },[])

  return (
    <>
    <CartIcon/>
    <ScrollView>
      <View className='relative'>
        <Image 
          source={{uri: info?.cover_image ? urlFor(info?.cover_image).url() : defaultImg}}
          className='w-full h-56 bg-gray-300 p-4'/>
        <TouchableOpacity 
          onPress={navigation.goBack}
          className='absolute top-14 left-5 p-2 bg-gray-300 rounded-full'>
          <AntDesign name="arrowleft" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className='absolute top-14 right-28 p-2 bg-gray-300 rounded-full'>
          <Ionicons name="share-social" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className='absolute top-14 right-16 p-2 bg-gray-300 rounded-full'>
          <AntDesign name="hearto" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className='absolute top-14 right-5 p-2 bg-gray-300 rounded-full'>
          <AntDesign name="search1" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View className='bg-white'>
        <View className='px-4 pt-4 space-y-3 my-3'>
          <Text className='text-3xl font-bold'>{info?.title}</Text>
          <Text><FontAwesome name="star" size={14} color="orange"/> {info?.rating}</Text>
        </View>
      </View>
      <Text className='text-lg font-bold p-4'>Menu</Text>
      {info?.dishes?.map(dish => (
        <MenuCard
          key={dish._id}
          id={dish._id}
          description={dish.description}
          name={dish.name}
          image={dish.image}
          price={dish.price}/>
        ))}
        <View className='h-16'/>
    </ScrollView>
    </>
  )
}