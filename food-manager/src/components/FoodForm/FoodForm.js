import React, { useState, useEffect } from 'react';
import './FoodForm.css';

const FoodForm = ({ addFood, selectedFood, updateFood }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('kg');
  const [image, setImage] = useState('');
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    if (selectedFood) {
      setName(selectedFood.name);
      setQuantity(selectedFood.quantity);
      setUnit(selectedFood.unit);
      setImage(selectedFood.image);
      setImageURL('');
    } else {
      resetForm();
    }
  }, [selectedFood]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const foodData = { name, quantity, unit, image: image || imageURL };
    if (selectedFood) {
      updateFood(selectedFood.id, foodData);
    } else {
      addFood(foodData);
    }
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setQuantity(1);
    setUnit('kg');
    setImage('');
    setImageURL('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setImageURL('');
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-container">
      
      <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-title">{selectedFood ? 'Atualizar Alimento' : 'Cadastrar Alimento'}</h2>
        <div>
          <label>Nome do alimento:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Ex: Maçã" 
            required 
          />
        </div>
        <div>
          <label>Quantidade:</label>
          <input 
            type="number" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
            min="1" 
            required 
          />
        </div>
        <div>
          <label>Unidade de medida:</label>
          <select value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="litro(s)">litro(s)</option>
            <option value="ml">ml</option>
            <option value="unidade(s)">unidade(s)</option>
          </select>
        </div>
        <div>
          <label>Imagem (ou insira a URL):</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
          />
          <input 
            type="text" 
            value={imageURL} 
            onChange={(e) => setImageURL(e.target.value)} 
            placeholder="Ou insira a URL da imagem" 
          />
        </div>
        <button type="submit">
          <i className={selectedFood ? "fas fa-sync" : "fas fa-plus"}></i>
        </button>
      </form>
    </div>
  );
};

export default FoodForm;
