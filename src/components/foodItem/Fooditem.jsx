import React, { useContext } from 'react';
import './Fooditem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Fooditem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="image-container">
                <img className="food-item-image" src={image} alt={name} />
                {!cartItems[id] ? (
                    <div>
                        <img className='add' id="box1" onClick={() => addToCart(id)} src={assets.icon1} alt="" />
                    </div>
                ) : (
                    <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.green1} alt="" />
                    </div>
                )}
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                </div>
                <p className="food-item-description">{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    );
};

export default Fooditem;
