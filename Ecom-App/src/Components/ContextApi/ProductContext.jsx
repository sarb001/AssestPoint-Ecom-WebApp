import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/ProductReducer';
import axios from "axios";

const AppContext = createContext(); 

const API = 'https://api.pujakaitem.com/api/products';

const initialState = {
    products : [],
    featuredProducts : [],
    singleprod : {},
    isSingleLoading : false,
    isLoading :false,
    isError : false,
}


const AppProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer, initialState);

    const getproducts = async(url) => 
    {
        dispatch({type : "SET_LOADING" });
        try
        {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type : "SET_API_DATA" ,payload : products});

        }catch(error)
        {
            dispatch({ type : "API_ERROR" });
        }
    }

    
    const getsingleproduct = async(url) => 
    {
        dispatch({type : "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleprod = await res.data;
            console.log('Single Prod is --' , singleprod);  
            dispatch({ type : "SINGLE_PRODUCTS" ,payload : singleprod});
        }catch(error)
        {
            dispatch({ type : "SINGLE_PRODUCTS_ERROR" });
        }
    }

    useEffect(() => {
        getproducts(API)
    },[])

    return(
        <AppContext.Provider value = {{...state , getsingleproduct }}>
                {children}
        </AppContext.Provider>
    )
}

const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider ,useProductContext ,AppContext } 