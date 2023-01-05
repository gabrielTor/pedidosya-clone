import { createSlice, current } from '@reduxjs/toolkit'

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        restaurants: [],
        thisRestaurant: null
    },
    reducers: {
        getRestaurants: (state, action) => {
            state.restaurants = action.payload
        },
        currentRestImg: (state, action) => {
            state.thisRestaurant = action.payload
        }
    }
})

export const {getRestaurants, currentRestImg} = restaurantSlice.actions
export default restaurantSlice.reducer