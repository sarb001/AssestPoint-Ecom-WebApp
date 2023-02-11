const CartReducer = (state,action) => {

    if(action.type === 'ADD_TO_CART')
    {
        let {id, amount ,stock ,image ,name ,price} = action.payload;
        console.log(' id ',id);
        console.log(' amount ',amount);
        console.log(' stock ' ,stock);
        console.log(' name '  ,name);
        console.log(' price ' ,price);
        console.log(' image is ' ,image);

        let cartproduct;
        cartproduct = {
            id: id ,
            name : name,
            amount,
            image : image[0].url,
            price : price,
            max : stock,
        };

        return {
            ...state ,
            cart : [...state.cart , cartproduct],
        }
    }

    if(action.type === 'SET_INCREASE'){
        
    }

    if(action.type === 'SET_DECREASE'){
        
    }

    if(action.type === 'REMOVE_FROM_CART'){
        
    }
    
    return state;
}
export default CartReducer