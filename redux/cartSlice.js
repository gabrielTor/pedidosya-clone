import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(item => item !== action.payload)
            if(index) state.items.splice(index, 1)
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer