import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { useDispatch } from 'react-redux'
import { removeAll } from '../redux/cartSlice'

export default function SuccessScreen({navigation}) {

    const dispatch = useDispatch()

    useEffect(()=>{
        setTimeout(() => {
            dispatch(removeAll())
            navigation.navigate('Home')
        }, 2500);
    },[])

  return (
    <Animatable.Image 
        source={require('../imgs/order-success.gif')}
        animation='slideInUp'
        className='w-full h-full'
    />
  )
}