import React from 'react';

const CartAmountToggle = ({amount,setDecrease,setIncrease,removefromcart}) => 
{
    return(
        <>
            <div className = "cart-button" style = {{color:'black',paddingTop:'8%'}}>
                <div className ="amount-Toggle" style = {{display:'grid',gridTemplateColumns:'60px 20px 60px'}}>
                        <div className = "increment-button">
                            <button onClick = {() => setDecrease()}>  Minus   </button>
                        </div>
                    <div className = "amount-style" style = {{textAlign:'center'}}> {amount} </div>
                        <div className = "decrement-button">
                            <button onClick = {() => setIncrease()}>   Plus   </button>
                        </div>
                </div>
            </div>
    </>
    )
}

export default CartAmountToggle
