import { createSlice } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

const localStorageItems = localStorage.getItem('cart')
const initialState = {
    cartState: false,
    cartItems: localStorageItems ? JSON.parse(localStorageItems) : [],
    cartTotalAmount: 0,
    cartTotalQYT: 0
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartOpen: (state) => {
            state.cartState = true
        },
        setCartClose: (state) => {
            state.cartState = false
        },
        setAddItemToCart: (state, action) => {

            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.success(`Item Quantity increased`)
            }
            else {
                const temp = { ...action.payload, cartQuantity: 1 }

                state.cartItems.push(temp)
                toast.success(`${action.payload.title} added`)

            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems))



        },
        setRemoveItemFromCart: (state, action) => {
            const removedItem = state.cartItems.filter((item) => item.id !== action.payload.id)
            state.cartItems = removedItem;
            localStorage.setItem('cart', JSON.stringify(state.cartItems))
            toast.success(`${action.payload.title} removed `)

        },

        setIncreaseItemQYT: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems))

        }, setDecreaseItemQYT: (state, action) => {

            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems))

        },
        setRemoveAllItems: (state, action) => {
            state.cartItems = [];
            toast.success(`Cart Cleared !`)
            localStorage.setItem('cart', JSON.stringify(state.cartItems))

        },
        setGetTotals: (state, action) => {
            let { totalAmount, totalQYT } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem
                const totalPrice = price * cartQuantity
                cartTotal.totalAmount += totalPrice

                cartTotal.totalQYT += cartQuantity
                return cartTotal
            }, {
                totalAmount: 0,
                totalQYT: 0
            })

            state.cartTotalAmount = totalAmount
            state.cartTotalQYT = totalQYT
        }

    },
})


export const cartReducer = cartSlice.reducer
export const { setCartOpen, setCartClose, setAddItemToCart, setRemoveItemFromCart, setIncreaseItemQYT, setDecreaseItemQYT, setRemoveAllItems, setGetTotals } = cartSlice.actions
