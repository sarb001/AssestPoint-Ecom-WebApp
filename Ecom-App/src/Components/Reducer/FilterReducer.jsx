const FilterReducer = (state,action) => {

    switch(action.type)
    {
                   case 'LOAD_FILTER_PRODUCTS':
                      return {
                            ...state,
                       filter_products : [...action.payload],
                       all_products : [...action.payload],
                       filters : {...state.filters}
                       
                   }      
               
                   case 'GET_SORT_VALUE':
                    let userSortValue = document.getElementById('sort');
                    let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

                    //  console.log(' sort value' ,sort_value);   
                    return {
                        ...state,
                        sorting_value : sort_value,
                    }     
                    
                   case 'SORTING_PRODUCTS' :
                    let newSortData;
                    let tempSortProduct = [...action.payload];
                    
                    if(state.sorting_value === "a-z")
                    {
                        newSortData = tempSortProduct.sort((a,b) => 
                            a.name.localeCompare(b.name)
                        )
                    }

                    if(state.sorting_value === "z-a")
                    {
                        newSortData = tempSortProduct.sort((a,b) => 
                            b.name.localeCompare(a.name)
                        )  
                    }

                    if(state.sorting_value === "lowest")
                    {
                        const sortingproducts = (a,b) => {
                           return a.price - b.price;
                        };
                        newSortData = tempSortProduct.sort(sortingproducts);
                    }

                    if(state.sorting_value === "highest")
                    {
                        const sortingproducts = (a,b) => {
                           return b.price - a.price;
                        };
                        newSortData = tempSortProduct.sort(sortingproducts);
                    }

                    return {
                        ...state,
                        filter_products:newSortData,
                    }      

                    case 'UPDATE_FILTER_VALUE':
                    const { name ,value } = action.payload;

                     return {
                        ...state,
                        filters : {
                            ...state.filters,
                            [name] : value
                        }
                     }


                    case  'FILTER_PRODUCTS':
                     let { all_products } =  state;
                     let  tempFilterProduct = [...all_products];

                    const { text ,category } = state.filters;
                    
                    if(text){
                        tempFilterProduct = tempFilterProduct.filter((curelem) => 
                        {
                                return curelem.name.toLowerCase().includes(text);
                        });  
                    }

                    if(category){
                        tempFilterProduct = tempFilterProduct.filter((curelem) => 
                        curelem.category === category
                        )
                    }

                    console.log(' category iss ---  ',tempFilterProduct);

                    return {
                        ...state,
                        filter_products: tempFilterProduct,
                    }

                    
                    case 'CLEAR_FILTERS' :
                        return {
                            ...state,
                            filters : {
                                text : "",
                                category : "all",
                            }                          // Reset All states to Back 
                        }
    }
}
export default FilterReducer