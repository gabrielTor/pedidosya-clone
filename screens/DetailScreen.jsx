import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import client, { urlFor } from '../sanity'
import MenuCard from './components/MenuCard'
import CartIcon from './components/CartIcon'
import { useDispatch } from 'react-redux'
import { removeAll } from '../redux/cartSlice'
import { currentRestImg } from '../redux/restaurantsSlice'


export default function DetailScreen({navigation}) {

  const dispatch = useDispatch()
  const { params } = useRoute()
  const [info, setInfo] = useState()
  
  useEffect(()=>{
    client.fetch(`*[_type == "restaurant" && _id == $id]{
      ...,
      dishes[]->{
        ...
      }
    }`, {id: params.id}).then(data => setInfo(data[0]))
    .catch((err)=>console.log(err))
  },[])

  const handleGoBack = () => {
    Alert.alert(
      'Volver al incio',
      'Al volver al incio su compra se reiniciara',
      [
        {
          text: 'Si',
          onPress: () => {
            dispatch(removeAll())
            dispatch(currentRestImg(null))
            navigation.goBack()
          }
        },
        {
          text: 'No'
        }
      ])
  }

  return (
    <>
    <CartIcon/>
    <ScrollView>
      <View className='relative'>
        <Image 
          source={{uri: info?.cover_image ? urlFor(info?.cover_image).url() : null}}
          className='w-full h-56 bg-gray-300 p-4'/>
        <TouchableOpacity 
          onPress={handleGoBack}
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
          <View className='flex-row justify-between'>
            <View className='flex-row space-x-1'>
              <Text>
                <FontAwesome name="star" size={14} color="orange"/> {info?.rating} - 
              </Text>
              <Text className='text-green-700'>
                <Ionicons name="ios-trophy-sharp" size={14} color="green" /> Comida rica
              </Text>
            </View>
            <Text className='underline'>Leer opiniones</Text>
          </View>
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
        <View className='h-24'/>
    </ScrollView>
    </>
  )
}