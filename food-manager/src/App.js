import React, { useState, useEffect } from 'react';
import FoodList from './components/FoodList/FoodList';
import FoodForm from './components/FoodForm/FoodForm';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/App.css'; // Importa os estilos do App
import '@fortawesome/fontawesome-free/css/all.min.css';


const App = () => {
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch('http://localhost:5000/foods');
      const data = await response.json();
      setFoods(data);
    };
    fetchFoods();
  }, []);

  const addFood = async (food) => {
    const response = await fetch('http://localhost:5000/foods', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(food),
    });
    const newFood = await response.json();
    setFoods([...foods, newFood]);
  };

  const removeFood = async (id) => {
    await fetch(`http://localhost:5000/foods/${id}`, {
      method: 'DELETE',
    });
    setFoods(foods.filter(food => food.id !== id));
  };

  const editFood = (food) => {
    setSelectedFood(food);
  };

  const updateFood = async (id, food) => {
    const response = await fetch(`http://localhost:5000/foods/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(food),
    });
    const updatedFood = await response.json();
    setFoods(foods.map(f => (f.id === id ? updatedFood : f)));
    setSelectedFood(null);
  };

  return (
    <div>
      <Header />
      <FoodForm addFood={addFood} selectedFood={selectedFood} updateFood={updateFood} />
      <FoodList foods={foods} removeFood={removeFood} editFood={editFood} />
      <Footer />
    </div>
  );
};

export default App;
