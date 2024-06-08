import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id="explore-menu">
      <h1>Explore Menu</h1>
      <p className='explore-text'>
        Swiggy One is our versatile membership programme, accessible across offerings, that offers members discounts and promotions on our platform, including free delivery on select orders. Users can become Swiggy One members by paying a membership fee.
      </p>
      <div className="explore-list">
        {menu_list.map((item, index) => (
          <div 
            key={index} 
            className={`explore-list-item ${category === item.menu_name ? "active" : ""}`}
            onClick={() => {
              console.log(`Clicked on: ${item.menu_name}`); // Debug log
              setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)
            }}
          >
            <img 
              className={category === item.menu_name ? "active" : ""} 
              src={item.menu_image} 
              alt={item.menu_name} 
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreMenu;
