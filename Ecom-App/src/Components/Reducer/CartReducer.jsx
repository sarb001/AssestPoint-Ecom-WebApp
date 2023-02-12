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

    if(action.type === 'SET_INCREASE')
    { 
        let updatedproduct = state.cart.map((curelem) => {

            if(curelem.id === action.payload)
            {let inccamount = curelem.amount + 1;

              if(inccamount >= curelem.max)
              {
                inccamount = curelem.max;
              }

              return {
                ...curelem,
                amount : inccamount,
              };
            }else
              {
                 return curelem;
              }
          })
          return { ...state ,cart : updatedproduct };
    }

    if(action.type === 'SET_DECREASE')
    {
            let updatedproduct = state.cart.map((curelem) => {

                if(curelem.id === action.payload)
                {let decamount = curelem.amount - 1;

                if(decamount <= 1)
                {
                    decamount = 1;
                }

                return {
                    ...curelem,
                    amount : decamount,
                };
                }else
                {
                    return curelem;
                }
            })
            return { ...state ,cart : updatedproduct };
        }

    if(action.type === 'REMOVE_FROM_CART'){
        if(action.type === "REMOVE_FROM_CART")
        {
          let updatedcart = state.cart.filter((curitem) => curitem.id !== action.payload )
          return {
            ...state ,
            cart: updatedcart,
          }
        }
    }
    
    return state;
}
export default CartReducer