import React from 'react';
import './FoodItem.css';

const FoodItem = ({ food, removeFood, editFood }) => {
  return (
    <li className="food-item">
      <img src={food.image} alt={food.name} />
      <span>{food.name}</span>
      <span>{food.quantity} {food.unit}</span>
      <button onClick={() => editFood(food)}>
        <i className="fas fa-edit"></i> {/* Ícone para editar */}
      </button>
      <button onClick={() => removeFood(food.id)}>
        <i className="fas fa-trash"></i> {/* Ícone para remover */}
      </button>
    </li>
  );
};

export default FoodItem;
