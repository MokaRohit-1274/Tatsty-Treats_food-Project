import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import Fooditem from '../foodItem/Fooditem';

const FoodDisplay = ({ category = "All" }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => (
          (category === "All" || category === item.category) && (
            <Fooditem
              key={item._id} 
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
