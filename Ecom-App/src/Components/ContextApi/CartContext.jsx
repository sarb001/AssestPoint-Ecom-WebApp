import { createContext, useContext, useEffect, useReducer } from "react";

import reducer from '../Reducer/CartReducer';
import axios from 'axios';
const CartContext = createContext();


const CartProvider = ({children}) => {


    const initialState = {
        cart:[],
    }

    const [state,dispatch] = useReducer(reducer,initialState);

    // const addtocart = (id,amount,singleprod) => {
    //         dispatch({type:'ADD_TO_CART',payload :{id,amount,singleprod}})
    // }

    return(
        <CartContext.Provider  value = {{...state }} >
             {children}
        </CartContext.Provider>  
    )
}

const useCartContext = () => {
    useContext(CartContext);
}

export { CartProvider, useCartContext , CartContext}



