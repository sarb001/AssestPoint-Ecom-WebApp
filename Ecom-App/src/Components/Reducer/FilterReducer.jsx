const FilterReducer = (state,action) => {

    switch(action.type)
    {
                case 'LOAD_FILTER_PRODUCTS':
                      return {
                            ...state,
                       filter_products : [...action.payload],
                       all_products : [...action.payload],
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

    }
}
export default FilterReducer