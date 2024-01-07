import { useState, useEffect } from "react";
import { getCatering } from "../../../../backend/api";
import "./cater.css"

export const CateringComponent = ({ catering, updateCatering }) => {

  const [selectedCaterer, setSelectedCaterer] = useState('');
  const [catererList, setList] = useState();
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [peopleCount, setPeopleCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedMenuNames, setMenuNames] = useState();

  let selectedItems = new Set();

  useEffect(() => {
    let catererData = null;

    getCatering()
      .then(res => {
        catererData = res.data.map((x) => x.attributes.CatererName);
        setList(catererData);
      })
      .catch(error => {
        // Handle errors
        console.log(error)
      });
  }, []);


  const cateringOptions = [
    {
      cuisine: "Italian",
      items: [
        { id: 1, name: 'Pizza', type: 'main', price: 15.99 },
        { id: 2, name: 'Pasta', type: 'main', price: 12.50 },
        { id: 3, name: 'Salad', type: 'side', price: 8.95 },
      ],
    },
    {
      cuisine: 'Indian',
      items: [
        { id: 4, name: 'Butter Chicken', type: 'main', price: 14.99 },
        { id: 5, name: 'Vegetable Biryani', type: 'main', price: 12.95 },
        { id: 6, name: 'Samosas', type: 'side', price: 4.99 },
      ],
    },
    {
      cuisine: "Mexican",
      items: [
        { id: 7, name: 'Chicken Tacos', type: 'main', price: 8.99 },
        { id: 8, name: 'Fajitas', type: 'main', price: 14.50 },
        { id: 9, name: 'Guacamole', type: 'side', price: 5.99 },
      ],
    },
  ];

  const handleCatererChange = (event) => {
    setSelectedCaterer(event.target.value);
  };

  const handleCuisineChange = (event) => {
    setSelectedCuisine(event.target.value);
  };

  const handlePeopleCountChange = (event) => {
    const count = Number(event.target.value);
    setPeopleCount(isNaN(count) ? 0 : count); // Handle invalid input
  };

  const handleItemChange = (event) => {
    const itemId = event.target.value;
    selectedItems.has(itemId) ? selectedItems.delete(itemId) : selectedItems.add(itemId)
    calculateTotalPrice()
  };

  const extractMenuItemNames = () => {
    const selectedNames = Array.from(selectedItems).map((itemId) => cateringOptions.flatMap((option) => option.items).find((item) => item.id == itemId).name);
    setMenuNames(selectedNames);
  };

  const calculateTotalPrice = () => {
    const selectedPrices = Array.from(selectedItems).map((itemId) => cateringOptions.flatMap((option) => option.items).find((item) => item.id == itemId).price)
    const totalItemPrice = selectedPrices.reduce((sum, price) => sum + price, 0);
    const baseCuisinePrice = 0;
    const price = baseCuisinePrice + totalItemPrice * peopleCount;
    console.log(selectedItems)
    console.log(selectedPrices)
    setTotalPrice(price)
    console.log(price)
  };

  const handleSubmit = () => {
    updateCatering({
      ...catering,
      catererName: selectedCaterer,
      cateringType: selectedCuisine,
      peopleCount: peopleCount,
      menuItems: selectedMenuNames,
      caterPrice: totalPrice
    });
  };

  useEffect(() => {
    extractMenuItemNames(); // Populate menuItems initially
  }, [selectedCuisine]);

  const cuisineOptions = cateringOptions.map((option) => ({
    value: option.cuisine,
    label: option.cuisine,
  }));

  const itemsToShow = selectedCuisine
    ? cateringOptions.find((option) => option.cuisine === selectedCuisine)
      .items
    : [];

  // console.log(catererList)

  return (
    <div className="container">
      <h2 className="">Catering Options</h2>

      <div className="">
        <h4>Pick your caterer</h4>
        <select className="cuisine-select" value={selectedCaterer} onChange={handleCatererChange}>
          {catererList && catererList.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="">
        <h4>Pick your cuisine</h4>
        <select className="cuisine-select" value={selectedCuisine} onChange={handleCuisineChange}>
          {cuisineOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <br />
      <label className="people-count-label" htmlFor="peopleCount">Number of People:</label>
      <input
        className="people-count-input"
        type="number"
        id="peopleCount"
        value={peopleCount}
        onChange={handlePeopleCountChange}
      />
      <br />
      {selectedCuisine ? <h3 className="items-title">Items ({selectedCuisine})</h3> : <></>}
      {selectedCuisine && itemsToShow.map((item) => (
        <div key={item.id}>
          <label>
            <input
              type="checkbox"
              value={item.id}
              onChange={handleItemChange}
            />
            {item.name} -  ₹{item.price}
          </label>
        </div>
      ))}
      <div className="">
        <button onClick={handleSubmit}>Confirm Catering - ₹{totalPrice.toFixed(2)}</button>
      </div>
    </div>
  );
};
