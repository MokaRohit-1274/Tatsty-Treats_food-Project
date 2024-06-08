import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';


const PlaceOrder = () => {
  const { getTotal } = useContext(StoreContext);
  

  return (
    <div>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='First name' />
            <input type="text" placeholder='Last name' />
          </div>
          <input type="text" placeholder='Email address' />
          <input type="text" placeholder='Street' />
          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
          <div className="cart-totals">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotal()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotal()===0 ?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>${getTotal()===0?0:getTotal+2}</p>
              </div>
              <hr />
            </div>
            <button type="button" >Proceed to checkout</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
