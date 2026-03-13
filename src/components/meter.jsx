import React, { useState } from "react";
import alcoholList from "./alcoholList";
import Result from "./result";

const Meter = () => {

  const [weight, setWeight] = useState(70);
  const [gender, setGender] = useState("male");
  const [hours, setHours] = useState(0);
  const [selectedDrink, setSelectedDrink] = useState(0);
  const [drinkCount, setDrinkCount] = useState(1);
  const [drinks, setDrinks] = useState([]);
  const [calculate, setCalculate] = useState(false);

  const addDrink = () => {

    const drink = {
      ...alcoholList[selectedDrink],
      count: drinkCount
    };

    setDrinks([...drinks, drink]);
  };

  return (
    <div className="container">

      <h1>🍺 Alkohol kalkulačka©</h1>

      <div className="section">

        <label>Váha (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />

        <label>Pohlaví</label>
        <select onChange={(e) => setGender(e.target.value)}>
          <option value="male">Muž</option>
          <option value="female">Žena</option>
        </select>

        <label>Kolik hodin piješ</label>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
        />

      </div>

      <div className="section drinkSection">

        <h2>Vyber drink</h2>

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

        <label>Počet</label>
        <input
          type="number"
          min="1"
          value={drinkCount}
          onChange={(e) => setDrinkCount(Number(e.target.value))}
        />

        <button className="addBtn" onClick={addDrink}>
          ➕ Přidat drink
        </button>

      </div>

      <div className="drinkList">

        <h3>Přidané drinky</h3>

        {drinks.map((drink, index) => (
          <div key={index} className="drinkRow">
            {drink.name} × {drink.count}
          </div>
        ))}

      </div>

      <button
        className="calcBtn"
        onClick={() => setCalculate(true)}
      >
        🧮 Vypočítat
      </button>

      {calculate && (
        <Result
          weight={weight}
          gender={gender}
          drinks={drinks}
          hours={hours}
        />
      )}

    </div>
  );
};

export default Meter;