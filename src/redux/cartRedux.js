import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        cartQuantity: 0,
        total: 0
    },

    reducers: {
        addProduct: (state, action) => {

            let index = state.products.findIndex(products => products.id === action.payload.id)
            state.total += action.payload.price * action.payload.quantity;
            state.cartQuantity += action.payload.quantity;

            if (index === -1) {
                state.products.push(action.payload);
            } else {
                state.products[index].quantity += action.payload.quantity;
            }
        },

        updateQuantity: (state, action) => {
            let index = state.products.findIndex(products => products.id === action.payload.id);
            state.products[index].quantity = action.payload.quantity;

            if (action.payload.type === "inc") {
                state.cartQuantity += 1;
                state.total += action.payload.price;
            } else {
                state.cartQuantity -= 1;
                state.total -= action.payload.price;
            }

        },

        removeProduct: (state, action) => {
            // finds index of the respective item in cart
            let index = state.products.findIndex(products => products.id === action.payload.id)
            console.log("remove product" + index);

            state.total -= state.products[index].price * state.products[index].quantity;
            let removedProducts = state.products.splice(index, 1);
            state.cartQuantity -= action.payload.quantity;
            console.log("Removed:" + removedProducts)
        },

        removeAllProducts: (state, action) => {
            console.log("Clear cart")
            state.products = [];
            state.cartQuantity = 0;
            state.total = 0;
        },
    },
});

export const { addProduct, updateQuantity, removeProduct, removeAllProducts } = cartSlice.actions;
export default cartSlice.reducer;