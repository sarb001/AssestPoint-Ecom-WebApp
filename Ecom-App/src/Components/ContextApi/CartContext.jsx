import { createContext, useContext, useEffect, useReducer } from "react";

import reducer from '../Reducer/CartReducer';
const CartContext = createContext();

const CartProvider = ({children}) => {

    const initialstate = {
        cart:[],
        total_items: "",
        total_amount: "",
        shipping_fee :50,
    }

    const [state,dispatch] = useReducer(reducer,initialstate);

    const addtocart = (id, amount ,stock ,image ,name ,price ) => {
         dispatch({type:'ADD_TO_CART',payload : {id, amount ,stock ,image ,name ,price }});
    } ;

    const setIncrease = (id) => {
         dispatch({type:'SET_INCREASE',payload : id});
    }

    const setDecrease = (id) => {
        dispatch({type:'SET_DECREASE',payload : id});
    }

    const removefromcart = (id) => {
        dispatch({type:'REMOVE_FROM_CART',payload : id});
    }

    useEffect(() => 
    {
        dispatch({ type: "CART_SUBTOTAL" });                // For Subtotal Amount for Paying 
        dispatch({ type: "CART_TOTAL_ITEM" });  
    },[state.cart])


    return(
        <CartContext.Provider  value = {{...state , addtocart ,setIncrease ,setDecrease  ,removefromcart }} >
             {children}
        </CartContext.Provider>  
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext , CartContext}



