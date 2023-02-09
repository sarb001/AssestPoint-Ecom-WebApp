const CartReducer = (state,action) => {

    switch(action.type)
    {   
        case 'ADD_TO_CART':
            let { id , amount ,singleprod } = action.payload;

            let cartproduct;

            cartproduct = {
              id : id + amount,
              amount,
              name : singleprod.name,
              price : singleprod.price,
              max: singleprod.stock,
            };
            
            return {
              ...state ,
              cart : [...state.cart ,cartproduct]
            };
    }

}
export default CartReducer