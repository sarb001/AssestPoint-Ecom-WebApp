import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/FilterReducer';
import { useProductContext } from "./ProductContext";

const FilterContext = createContext();

const initialState = {
    filter_products : [],
    all_products:[],
    sorting_value : "lowest",
}

export const FilterProvider = ({children}) => 
{
    const { products } = useProductContext();
    
    console.log(' Products are  ',products);
    const [state,dispatch] = useReducer(reducer,initialState) 

    const sorting = () => {
        dispatch({type : "GET_SORT_VALUE"});
    }

    useEffect(()  => 
    {
         dispatch({type : "SORTING_PRODUCTS" , payload : products });
    },[state.sorting_value]);

    useEffect(() => {
         dispatch({type:'LOAD_FILTER_PRODUCTS',payload : products });
    },[products])

    return(
        <FilterContext.Provider value = {{...state ,sorting}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}

export default { FilterProvider, FilterContext , useFilterContext }