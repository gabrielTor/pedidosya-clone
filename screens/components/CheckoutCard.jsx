import { View, Text, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { urlFor } from '../../sanity'
import { useSelector } from 'react-redux'
import CartBtns from './CartBtns'
import Total from './Total'

export default function CheckoutCard() {

    const items = useSelector(state => state.cart.items)
    let cart = []
    for (let i = 0; i < items.length; i++) {
        let element = cart.find(item => item?.id === items[i].id)
        if(!element) cart.push(items[i])
    }
    const itemTotal = (id) => {
        let subtotal = items.filter(item => item.id === id)
        subtotal = subtotal.map(item => item.price)
        subtotal = subtotal.reduce((total, amount) => total + amount, 0)
        return subtotal
    }

  return (
    <View className='px-5'>
        <FlatList
            className='mb-36'
            data={cart}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            ListHeaderComponent={<Text className='-mt-4'></Text>}
            renderItem={({item}) => (
                <View className='bg-white p-2 rounded-lg my-1.5'>
                    <View className='flex-row'>
                        <Image
                            className='w-16 h-20'
                            source={{uri: urlFor(item.image).url()}}/>
                        <View className='ml-4 w-40'>
                            <Text>{item.name}</Text>
                            <Text className='mt-3'>${itemTotal(item.id)}</Text>
                        </View>
                        <View className='mt-8'>
                            <CartBtns id={item.id} price={item.price} name={item.name} image={item.image}/>
                        </View>    
                    </View>
                </View>
        )} ListFooterComponent={<Total/>} />
    </View>
  )
}