// /Components/Contexts/CartContext.js
import React, { createContext, useReducer } from "react";
import { cartReducer, initialState } from "./ContextProvider";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const getTotalItems = () => {
        return state.items.reduce((total, item) => total + item.quantity, 0);
    };
    return (
        <CartContext.Provider value={{ state, dispatch, getTotalItems }}>
            {children}
        </CartContext.Provider>
    );
};


