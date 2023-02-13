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

                                        case "GET_SORT_VALUE"  :
                                        let usersortvalue = document.getElementById("sort");
                                        let sort_value = usersortvalue.options[usersortvalue.selectedIndex].value;

                                        console.log('sort value isssss',sort_value);
                                        return {
                                            ...state ,
                                            sorting_value : sort_value,              
                                        };


                                        case 'SORTING_PRODUCTS':
                                        let newsortdata;
                                        const { filter_products } = state;

                                            let tempsortproduct = [...filter_products];
                                            if(state.sorting_value === "a-z")
                                            {
                                                newsortdata = tempsortproduct.sort((a,b) => 
                                                a.name.localeCompare(b.name));
                                            }   


                                            if(state.sorting_value === "z-a")
                                            {
                                                newsortdata = tempsortproduct.sort((a,b) =>  b.name.localeCompare(a.name));
                                            }   


                                            if(state.sorting_value === "lowest")
                                            {
                                                const sortingproducts = (a,b) => {
                                                    return a.price - b.price;
                                                };
                                                newsortdata = tempsortproduct.sort(sortingproducts);
                                            }


                                            if(state.sorting_value === "highest")
                                            {
                                                const sortingproducts = (a,b) => {
                                                    return b.price - a.price;
                                                };
                                                newsortdata = tempsortproduct.sort(sortingproducts);
                                            }

                                            return {
                                                ...state,
                                                filter_products :newsortdata,
                                            }             
    }
}
export default FilterReducer