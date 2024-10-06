import React from 'react';
import FoodItem from '../FoodItem/FoodItem';
import './FoodList.css';

const FoodList = ({ foods, removeFood, editFood }) => {
  return (
    <div className="food-list-container">
      <h2 className="food-list-title">Alimentos Adquiridos</h2>
      <ul className="food-list">
        {foods.map((food) => (
          <FoodItem 
            key={food.id} 
            food={food} 
            removeFood={removeFood} 
            editFood={editFood} 
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
