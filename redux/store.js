import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import restaurantsSlice from "./restaurantsSlice"

export default configureStore({
    reducer: {
       cart: cartSlice,
       restaurant: restaurantsSlice
    }
})