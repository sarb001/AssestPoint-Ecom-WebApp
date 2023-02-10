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

    return(
        <CartContext.Provider  value = {{...state , addtocart }} >
             {children}
        </CartContext.Provider>  
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext , CartContext}



