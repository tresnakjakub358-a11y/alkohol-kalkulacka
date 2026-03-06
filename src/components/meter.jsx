import React, { useState } from "react";
import alcoholList from "./alcoholList";
import Result from "./result";

const Meter = () => {

  const [weight, setWeight] = useState(80);
  const [gender, setGender] = useState("male");
  const [hours, setHours] = useState(1);

  const [selectedDrink, setSelectedDrink] = useState(0);
  const [drinkCount, setDrinkCount] = useState(1);

  const selected = alcoholList[selectedDrink];

  const drinks = [
    {
      ...selected,
      count: drinkCount
    }
  ];

  return (
    <div className="container">

      <h1>Alcohol Calculator</h1>

      <label>Weight (kg)</label>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(Number(e.target.value))}
      />

      <label>Gender</label>
      <select onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label>Hours drinking</label>
      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(Number(e.target.value))}
      />

      <h2>Select drink</h2>

      <select
        value={selectedDrink}
        onChange={(e) => setSelectedDrink(Number(e.target.value))}
      >
        {alcoholList.map((drink, index) => (
          <option key={index} value={index}>
            {drink.name}
          </option>
        ))}
      </select>

      <label>Number of drinks</label>
      <input
        type="number"
        min="1"
        value={drinkCount}
        onChange={(e) => setDrinkCount(Number(e.target.value))}
      />

      <Result
        weight={weight}
        gender={gender}
        drinks={drinks}
        hours={hours}
      />

    </div>
  );
};

export default Meter;