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
            id: id + amount,
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
    return state;
}
export default CartReducer