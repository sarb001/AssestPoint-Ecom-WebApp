import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/FilterReducer';
import { useProductContext } from "./ProductContext";

const FilterContext = createContext();

const initialState = {
    filter_products : [],
    all_products:[],
    sorting_value : "lowest",
    filters : {
        text : "",
        category : "All",
    }
}

export const FilterProvider = ({children}) => 
{
    const { products } = useProductContext();
    
    // console.log(' Products are  ',products);
    const [state,dispatch] = useReducer(reducer,initialState) 
    
    const sorting = () => {
         dispatch({type:'GET_SORT_VALUE'});
    }

    const updateFilterValue = (event) =>  {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type:'UPDATE_FILTER_VALUE',payload : {name,value}})
    }

    
    const clearfitlers = () => {
        dispatch({ type : "CLEAR_FILTERS"});
   };

    useEffect(() => 
    {
         dispatch({type:'FILTER_PRODUCTS'});
         dispatch({type:'SORTING_PRODUCTS' ,payload : products });
    },[products,state.sorting_value,state.filters]);

    useEffect(() => {
         dispatch({type:'LOAD_FILTER_PRODUCTS', payload : products });
    },[products])

    return(
        <FilterContext.Provider value = {{...state ,sorting ,updateFilterValue ,clearfitlers }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}

export default { FilterProvider, FilterContext , useFilterContext }