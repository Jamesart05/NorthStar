import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice' // You’ll create this next

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})
