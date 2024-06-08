import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { food_list } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart,getTotal } = useContext(StoreContext);
  const navigate=useNavigate();

  return (
    <div className='cart'>
      <div className='cart-items-title'>
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div key={index} className='cart-items-title cart-items-item'>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price * cartItems[item._id]}</p>
              <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
            </div>
          );
        }
        return null;
      })}
      <div className='cart-bottom'>
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
        <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
      </div>
      <div className="cart-promocode">
        <p>If you have coupons, enter here</p>
        <div className="cart-promocode-input">
          <input type="text" placeholder='Enter coupon' />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
