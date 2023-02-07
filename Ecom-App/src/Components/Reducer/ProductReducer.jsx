const ProductReducer = (state,action) => {
    switch(action.type)
    {
                case "SET_LOADING" : 
                    return {
                        ...state,
                        isLoading : true,
                    } 
                
                case "SET_API_DATA":   
                const featuredata = action.payload.filter((curelem) => {            // Getting Data from products which need to featured at main screen  
                        return curelem.featured === true;
                });

                
                return {
                    ...state,
                    isLoading : false,
                    products : action.payload,
                    featuredProducts : featuredata,
                };    


                case  'API_ERROR' : 
                     return {
                        ...state,
                        isLoading : false,
                     };
            

            case 'SET_SINGLE_LOADING' : 
            return {
                ...state ,
                isSingleLoading : true,
            };

            case 'SINGLE_PRODUCTS' : 
            return {
                ...state,
                isSingleLoading: false,
                singleprod: action.payload,
            };

            case 'SINGLE_PRODUCTS_ERROR' : 
            return{
                ...state ,
                isSingleLoading: false,
                isError:true,
            };

    }
}

export default ProductReducer;