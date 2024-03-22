import React from "react";

function Cart(props) {
    return(
        <div className='Cart'>
          <p> Roll no {props.id} is {props.name} has rank {props.rank}</p>
        </div>
    )
}
export default Cart;