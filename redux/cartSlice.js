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
            const index = state.items.findIndex(item => item.id !== action.payload)
            if(index) state.items.splice(index, 1)
        },
        removeAll: (state) => {
            state.items = []
        }
    }
})

export const {addToCart, removeFromCart, removeAll} = cartSlice.actions
export default cartSlice.reducer